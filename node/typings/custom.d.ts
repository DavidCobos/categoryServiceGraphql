type categoryTree = category[]

interface category {
  id: number
  name: string
  hasChildren: boolean
  url: string
  children: Children[]
  Title: string
  MetaTagDescription: string
}

interface Children {
  id: number
  name: string
  hasChildren: boolean
  url: string
  children: any[]
  Title: string
  MetaTagDescription: string
}

interface categoryImage {
  imageUrl: string
  special: boolean
}

interface categoryResponse {
  id: number
  nombre: string
  title: string
  imageUrl: string
  special: boolean
}
