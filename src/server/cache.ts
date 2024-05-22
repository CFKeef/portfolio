import { Redis } from '@upstash/redis'

const cache = new Redis({
  url: process.env.CACHE_URL as string,
  token: process.env.CACHE_PASSWORD as string,
})

export const getRedis = async () => {
  return cache
}
