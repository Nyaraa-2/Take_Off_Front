import algoliasearch from 'algoliasearch'

/**
 * Récupère le résultat d'une recherche en fonction des paramètres envoyés
 * @param {Ville} city
 * @param {Metier} job
 * @param {Expertise} expertises
 * @param {Langue} languages
 * @returns
 */
export async function getSearch(city) {
  const client = algoliasearch('STH0HNRO4C', 'bda89733a7507b9097cd494fa4a5fa01')

  const index = client.initIndex('search')
  // only query string
  console.log(city)
  const { hits } = await index.search(`${city}`)
  return { ...hits }
}
