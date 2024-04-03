import * as v from 'valibot'
import { XMLParser } from 'fast-xml-parser'

const blobSchema = v.object({
  rss: v.object({
    channel: v.object({
      item: v.array(
        v.object({
          title: v.string(),
          author_name: v.string(),
          user_date_added: v.string(),
          user_read_at: v.optional(v.string()),
          link: v.string(),
          book: v.object({
            num_pages: v.number(),
          }),
          book_medium_image_url: v.string(),
        }),
      ),
    }),
  }),
})

const getXMLText = async (url: string) => {
  const response = await fetch(url)

  const text = await response.text()

  return text
}

export type Book = {
  title: string
  author: string
  startedAt: string
  readAt?: string
  link: string
  pages: number
  image: string
}

const bookFromXML = (blob: unknown) => {
  const book = v.parse(blobSchema, blob).rss.channel.item.at(0)

  if (!book) {
    throw new Error('Missing book')
  }

  return {
    title: book.title,
    author: book.author_name,
    startedAt: book.user_date_added,
    readAt: book.user_read_at,
    link: book.link,
    pages: book.book.num_pages,
    image: book.book_medium_image_url,
  } as Book
}

export const scrapeReadingActivity = async (url: string) => {
  const text = await getXMLText(url)

  const xml = new XMLParser().parse(text)

  return bookFromXML(xml)
}
