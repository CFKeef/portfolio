import { type Book, scrapeReadingActivity } from './services/reading'
import { getRedis } from './cache'
import { getActivity as getListeningActivity } from './services/listening'
import { cache } from '@solidjs/router'

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

