/* All posts and postDetail */
export interface Edge {
  node: Node
}

export interface Node {
  author: Author
  createdAt: Date
  slug: string
  title: string
  excerpt: string
  featuredImage: FeaturedImage
  categories: Category[]
  content: Content
}

export interface Author {
  bio: string
  name: string
  id: string
  photo: FeaturedImage
}

export interface FeaturedImage {
  url: string
}

export interface Category {
  name: string
  slug: string
}
export interface Content {
  raw: Raw
}

export interface Raw {
  children: RawChild[]
}

export interface RawChild {
  type: string
  children: PurpleChild[]
  /* Images */
  src?: string
  title?: string
  width?: number
  handle?: string
  height?: number
  mimeType?: string
}
/*This is just for .map */
export interface PurpleChildArray {
  text: PurpleChild[]
}
export interface PurpleChild {
  type?: string
  children?: FluffyChild[]
  text?: string
  italic?: boolean
  underline?: boolean
  bold?: boolean
  code?: boolean
  href?: string
  title?: string
  openInNewTab?: boolean
}
export interface FluffyChild {
  text: string
  type?: string
  children?: TentacledChild[]
}
export interface TentacledChild {
  type?: string
  children?: StickyChild[]
  text?: string
  italic?: boolean
  href?: string
  title?: string
  openInNewTab?: boolean
}

export interface StickyChild {
  type?: string
  children?: IndigoChild[]
  text?: string
}
export interface IndigoChild {
  text: string
}

/* Recent Post */
export interface DataRecentPost {
  title: string
  createdAt: Date
  slug: string
}
