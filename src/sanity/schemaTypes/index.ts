import { type SchemaTypeDefinition } from 'sanity'
import { menproductSchema } from './menproduct'
import { womenproductSchema } from './womenproduct'
import { cupleproductSchema } from './cupleproduct'
import { smartproductSchema } from './smartproduct'
import { luxuryproductSchema } from './luxuryproduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menproductSchema , womenproductSchema , cupleproductSchema , smartproductSchema , luxuryproductSchema],
}
