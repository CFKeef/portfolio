import * as Context from 'effect/Context'
import * as Effect from 'effect/Effect'
import * as ReadingActivity from '../reading'
import { Option } from 'effect'
import * as Http from '@effect/platform/HttpClient'
import { XMLParser } from 'fast-xml-parser'
import * as E from '../error'
import * as S from '@effect/schema/Schema'

export const TypeId: ReadingActivity.TypeId = Symbol.for(
  '@services/ReadingActivity',
) as ReadingActivity.TypeId

export const readingActivityTag = Context.GenericTag<ReadingActivity.ReadingActivity>(
  '@services/ReadingActivity',
)

export const make: (
  impl: Omit<ReadingActivity.ReadingActivity, ReadingActivity.TypeId | 'scrape'> &
    Partial<ReadingActivity.ReadingActivity>,
) => ReadingActivity.ReadingActivity = (impl) =>
  readingActivityTag.of({
    [TypeId]: TypeId,
    scrape: () =>
      Effect.gen(function* (_) {
        const client = Http.client.fetchOk()

        const req = Http.request.get(process.env.READER_RSS)

        const dispatched = yield* _(
          client(req),
          Http.response.text,
          Effect.mapError((e) =>
            E.ServerError({
              module: 'ReadingActivity',
              message: `Couldn't fetch: ${String(e)}`,
              method: 'getXml',
              reason: 'StatusCode',
            }),
          ),
        )

        const xml = yield* _(new XMLParser(), (v) =>
          Effect.try({
            try: () => v.parse(dispatched, false),
            catch: (error) =>
              E.ServerError({
                module: 'ReadingActivity',
                message: `Couldn't fetch: ${String(error)}`,
                method: 'getXml',
                reason: 'StatusCode',
              }),
          }),
        )

        console.log(xml)

        const temp = {
          title: 'hi',
          author: 'hi',
          startedAt: new Date(),
          completedAt: new Date(),
        } as ReadingActivity.Book

        return Option.some<ReadingActivity.Book>(temp)
      }),
    ...impl,
  })
