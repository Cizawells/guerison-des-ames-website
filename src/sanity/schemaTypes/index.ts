import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { heroSlider } from "./homePageType";
import { gallery } from "./gallery";
import { ministries } from "./ministries";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, heroSlider,gallery, ministries],
}
