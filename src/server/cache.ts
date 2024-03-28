import { Redis } from '@upstash/redis'

const globalForRedis = global as unknown as { cache: Redis }

export const getRedis = async () => {
  if (globalForRedis.cache) {
    return globalForRedis.cache
  }

  const cache = new Redis({
    url: process.env.CACHE_URL as string,
    token: process.env.CACHE_PASSWORD as string,
  })

  globalForRedis.cache = cache

  return globalForRedis.cache
}
