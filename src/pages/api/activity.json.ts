import type { APIRoute } from 'astro'
import { Effect, Either,  } from 'effect'
import {http} from "effect/ht"
import { pipe } from 'effect/Function'

class FetchError {
  readonly _tag = 'FetchError'
}

export class BodyError {
  readonly _tag = "BodyError"
  constructor(readonly reason: unknown) {}
}

const getList = () =>
  Effect.tryPromise({
    try: () =>
      fetch(
        'https://www.goodreads.com/review/list/89134778-patryck-golebiewski?shelf=currently-reading',
      ),
    catch: () => new FetchError(),
  })

const getText = (res: Response) =>
  Effect.tryPromise({
    try: () => res.text(),
    catch: (e) => new BodyError(e),
  })

const textToHtml = (content: string) =>
  Effect.try({
    try: () => new DOMParser().parseFromString(content, 'text/html'),
    catch: (e) => new BodyError(e),
  })

const getListHTML = () => pipe(getList(), Effect.flatMap(getText), Effect.flatMap(textToHtml))


const getCurrentBook = (document: Document) => {
  const node = document.querySelector('#booksBody > :first_child')
}

export const GET: APIRoute = async () => {
  const document = 


}
