import { describe, expect, it, test } from 'vitest'
import { scrapeReadingActivity } from './reading'

test('scrape function', async () => {
  const response = await scrapeReadingActivity(process.env.READER_RSS as string)

  expect(response).toBeDefined()
})
