import client from '../client'

const movieData = `
_id,
title,
"actor": actor->name,
`

const actorData = `
_id,
name,
"slug": slugname.current,
`

const commonData = `
_id,
name,
"relatedMovies": *[_type=='movie' && references(^._id)], 
"slug": slugname.current,
`


export const getMovie = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieData}}`)
  return data
}

export const getAllActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorData}}`)
  return data
}

export async function getActorBySlug(slug) {
    const data = await client.fetch(`*[_type == "actor" && slugname.current == $slug]{${commonData}}`, {slug})
    return data?.[0]
}