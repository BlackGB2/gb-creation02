import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from './env'

const imageBuilder = projectId
  ? createImageUrlBuilder({
      projectId: projectId || '',
      dataset: dataset || '',
    })
  : null

export const urlForImage = (source: Image | any) => {
  if (!imageBuilder || !source) return null
  return imageBuilder.image(source).auto('format').fit('max')
}
