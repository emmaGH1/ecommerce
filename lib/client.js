import SanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: 'qek32d6n',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: 'true',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageURLBuilder(client)

export const urlFor = (source) => builder.image(source)