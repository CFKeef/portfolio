import type { APIRoute } from 'astro'
import { Effect } from 'effect'
import { GoodReads } from '../../services/good-reads'

const handle = Effect.gen(function* (_) {
  const goodReads = yield* _(GoodReads)

  return yield* _(goodReads.scrape())
})

export const GET: APIRoute = async () => {
  try {
    const book = await Effect.runPromise(Effect.provide(handle, GoodReads.Live))

    return new Response(JSON.stringify(book))
  } catch (e) {
    return new Response(JSON.stringify(e))
  }
}
