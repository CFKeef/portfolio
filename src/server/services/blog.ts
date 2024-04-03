import fs from 'node:fs/promises'
import path from 'node:path'

import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import { unified } from 'unified'

export const getArticle = async (slug: string) => {
  const filePath = path.join(process.cwd(), 'src', 'articles', `${slug}.md`)

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
