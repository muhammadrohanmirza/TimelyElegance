import { createClient } from 'next-sanity'


export const client = createClient({
  projectId : "313oq58n",
  dataset: "production",
  apiVersion: "2023-10-17", // Use a UTC date string
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export function sanityFetch({query , params = {}}: {query : string , params?:any}) {
  return client.fetch(query, params)
}