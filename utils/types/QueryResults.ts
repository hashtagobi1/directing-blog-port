// All Commercials Results
export interface AllCommercialsQuery {
  query: string
  result: AllCommercialResult[]
}

export interface AllCommercialResult {
  projectName: string
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: string
  description: string
  videoLink: string
  _id: string
}
