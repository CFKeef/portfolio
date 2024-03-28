import { expect, test } from 'vitest'
import { getActivity } from './services/listening'

import { scrapeReadingActivity } from './services/reading'

test('gets reading activity', async () => {
  const response = await scrapeReadingActivity(process.env.READER_RSS as string)

  expect(response).toBeDefined()
})

test('gets listening activity', async () => {
  await expect(getActivity()).resolves
})
