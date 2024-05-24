import {scrapeReadingActivity } from './services/reading'

import { getActivity as getListeningActivity } from './services/listening'
import { cache } from '@solidjs/router'

export const getReading = cache(async () => {
  'use server'

  return await scrapeReadingActivity(process.env.READER_RSS as string)
}, 'reading')

export const getListening = cache(async () => {
  'use server'

  return await getListeningActivity()
}, 'listening')

