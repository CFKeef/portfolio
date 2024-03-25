import * as Http from '@effect/platform/HttpClient'
import * as Context from 'effect/Context'
import { Effect, Layer, Data } from 'effect'
import type { HTMLElement } from 'node-html-parser'
import { ParserService } from './parser'

const processDocument = (document: HTMLElement) =>
  Effect.gen(function* (_) {
    return yield* _(Effect.fromNullable(document.querySelector('meta[name="description"]')))
  })

export class ServiceError extends Data.TaggedError('GoodReadsError')<{
  readonly _tag: 'GoodReadsError'
  readonly reason: 'HTTP' | 'NotFound' | 'ParseError'
  readonly message: string
}> {}

const make = Effect.gen(function* (_) {
  const parser = yield* _(ParserService)

  return {
    scrape: () =>
      Effect.gen(function* (_) {
        const client = Http.client.fetchOk()

        const req = Http.request.get(import.meta.env.READER_URL)

        const response = yield* _(req.pipe(client, Http.response.text))

        const document = yield* _(parser.parse(response))

        const node = yield* _(processDocument(document))

        return yield* _(
          // Gets us the current book in the format <Title> by <Author>
          Effect.fromNullable(node.attrs.content?.split(':').at(1)),
          // Split into tuple [Title,Author]
          Effect.flatMap((f) => Effect.fromNullable(f.split(' by '))),
          // Narrow string | undefined into success
          Effect.flatMap((f) => Effect.all(f.map((e) => Effect.succeed(e)))),
          Effect.flatMap((f) => {
            const [title, author] = f

            if (!title) {
              return Effect.fail(
                new ServiceError({ reason: 'ParseError', message: 'Missing title' }),
              )
            }

            if (!author) {
              return Effect.fail(
                new ServiceError({ reason: 'ParseError', message: 'Missing author' }),
              )
            }

            return Effect.succeed({
              name: title,
              author,
            })
          }),
        )
      }),
  }
})

export class GoodReads extends Context.Tag('@services/GoodReads')<
  GoodReads,
  Effect.Effect.Success<typeof make>
>() {
  static readonly Live = Layer.effect(this, make).pipe(Layer.provide(ParserService.Live))
}
