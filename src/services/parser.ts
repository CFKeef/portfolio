import { Effect, Layer, Context, Data } from 'effect'
import { parse } from 'node-html-parser'

export class ParserError extends Data.TaggedError('ParserError')<{
  error: unknown
}> {}

const make = Effect.gen(function* (_) {
  return {
    parse: (document: string) =>
      Effect.gen(function* (_) {
        return yield* _(
          Effect.try({
            try: () => parse(document),
            catch: (error) => new ParserError({ error }),
          }),
        )
      }),
  }
})

export class ParserService extends Context.Tag('Parser')<
  ParserService,
  Effect.Effect.Success<typeof make>
>() {
  static readonly Live = Layer.effect(this, make)
}
