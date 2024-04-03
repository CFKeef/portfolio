import fs from 'node:fs/promises'
import path from 'node:path'

import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import { unified } from 'unified'

const toFileName = (slug: string) => slug.replaceAll('%20', '-').toLocaleLowerCase()

export const getArticle = async (slug: string) => {
  const fileName = toFileName(slug)

  const filePath = path.join(process.cwd(), 'src', 'articles', `${fileName}.md`)

  const file = await fs.readFile(filePath)

  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(file)

  return processed.value
}

export const getArticleFiles = async () => {
  const filePath = path.join(process.cwd(), 'src', 'articles')

  const entries = await fs.readdir(filePath, { withFileTypes: false })

  const files = entries.map((e) => e.replaceAll('-', ' ').slice(0, e.length - 3))

  return files
}
