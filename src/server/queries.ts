import { query$ } from '@solid-mediakit/prpc'
import { scrapeReadingActivity } from './services/reading'

export const getReadingActivity = query$({
  queryFn: async ({ ctx$ }) => {
    return await scrapeReadingActivity(process.env.READER_RSS as string)
  },
  key: 'reading',
})
