import * as internal from './internal/reading'
import type * as Effect from 'effect/Effect'
import type * as ServiceError from './error.js'
import * as S from '@effect/schema/Schema'
import type * as Option from 'effect/Option'
import * as Context from 'effect/Context'
import * as Layer from "effect/Layer";

const Book = S.struct({
  title: S.string,
  author: S.string,
  startedAt: S.Date,
  completedAt: S.optional(S.Date, { exact: true }),
})

export type Book = S.Schema.Type<typeof Book>

export const TypeId: unique symbol = internal.TypeId

export type TypeId = typeof TypeId

export interface ReadingActivity {
  readonly [TypeId]: TypeId

  readonly scrape: () => Effect.Effect<Option.Option<Book>, ServiceError.ServerError>
}

export const ReadingActivity: Context.Tag<ReadingActivity, ReadingActivity> =
  internal.readingActivityTag

export const make: (
  impl: Omit<ReadingActivity, typeof TypeId | 'scrape'> & Partial<ReadingActivity>,
) => ReadingActivity = internal.make

export const layerReadingActivity: Layer.Layer<ReadingActivity> = Layer.succeed(internal.readingActivityTag, make({}))