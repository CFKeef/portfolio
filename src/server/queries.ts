import { type Book, scrapeReadingActivity } from './services/reading'
import { getRedis } from './cache'
import { getActivity as getListeningActivity } from './services/listening'
import { cache } from '@solidjs/router'
import { getBucketItems } from './storage'
import * as v from "valibot";
import { S } from '@upstash/redis/zmscore-d1ec861c'
import { getArticleLocation } from './services/blog'

export const getReading = cache(async () => {
  'use server'

  const redis = await getRedis()

  const cached = await redis.get<Book>('reading')

  if (!cached) {
    const fresh = await scrapeReadingActivity(process.env.READER_RSS as string)

    redis.setex('reading', 864000, fresh)

    return fresh
  }

  return cached
}, 'reading')

export const getListening = cache(async () => {
  'use server'

  return await getListeningActivity()
}, 'listening')

export type ExcludeFromArray<T extends any[], ToExclude> = Exclude<T[number], ToExclude>


const ArticleSchema = v.object({
  name: v.pipe(
    v.string(),
    // Article names are blog_<title>.md
    v.transform((str) => str.substring(5, str.length - 3).replaceAll("-", " ")),
  ),
  createdAt: v.date(),
})

export type ArticleDetail = v.InferOutput<typeof ArticleSchema>

export const getArticles = cache(async () => {
  'use server'

  const response = await getBucketItems()

  const files: ArticleDetail[] =  (response.Contents??[]).map((e) => v.parse(ArticleSchema, {name: e.Key, createdAt: e.LastModified}))
  
  return files
}, 'articles')
