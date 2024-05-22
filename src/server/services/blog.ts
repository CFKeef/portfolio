import fs from 'node:fs/promises'
import path from 'node:path'
import { string, type Input, object, parse } from 'valibot'
import { getBucketItems } from '../storage'
import * as v from 'valibot'

const toFileName = (slug: string) => slug.replaceAll('%20', '-').toLocaleLowerCase()

export const getArticle = async (slug: string) => {
  const fileName = toFileName(slug)
  
  const filePath = path.join(process.cwd(), 'src', 'articles', `${fileName}.md`)

  const file = await fs.readFile(filePath)

  const stred = file.toString()

  const endIdx = stred.lastIndexOf('---') + 3

  const [metadataBlob, fileBlob] = [
    stred.substring(0, endIdx),
    stred.substring(endIdx, stred.length).trimStart(),
  ]

  const metadata = parseMetadata(metadataBlob)

  return { metadata, file: fileBlob }
}

const metadata = object({
  title: string(),
  date: string(),
})

type Metadata = Input<typeof metadata>

const parseMetadata = (raw: string): Metadata | null => {
  const builder: Record<string, unknown> = {}

  for (const line of raw.split('\n')) {
    const splitIdx = line.indexOf(':')

    const rawKey = line.substring(0, splitIdx)
    const rawVal = line.substring(splitIdx + 1).trim()

    if (rawKey.length === 0 || rawKey.length === 0) {
      continue
    }

    builder[rawKey] = rawVal
  }

  try {
    const parsed = parse(metadata, builder)

    return parsed
  } catch (error) {
    return null
  }
}

export const getArticleFiles = async () => {
  const items = await getBucketItems()

  console.log( process.env.CF_ACCESS_ID)
  console.log(items.Contents)

  return ["test"]
}
