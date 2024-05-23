import { string, type Input, object, parse } from 'valibot'

const toFileName = (slug: string) => slug.replaceAll('%20', '-').toLocaleLowerCase()

export const getArticle = async (slug: string) => {
  const fileName = toFileName(slug)
  const location = getArticleLocation(fileName)

  const blob = await fetch(location).then((f) => f.text());

  const endIdx = blob.lastIndexOf('---') + 3

  const [metadataBlob, fileBlob] = [
    blob.substring(0, endIdx),
    blob.substring(endIdx, blob.length).trimStart(),
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


export const getArticleLocation = (name:string) => {
  return `https://${process.env.CF_R2_DOMAIN}/blog_${name}.md`
}
