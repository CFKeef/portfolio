import { Redis } from '@upstash/redis'

export const getRedis = async () => {
  return new Redis({
    url: process.env.CACHE_URL as string,
    token: process.env.CACHE_PASSWORD as string,
  })
  
}
