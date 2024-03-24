import { Context, Effect, Layer } from 'effect'
import { Schema } from '@effect/schema'

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class Book extends Schema.Class<Book>('Book')({
  name: Schema.string,
  author: Schema.string,
  startedAt: Schema.Date,
}) {}
