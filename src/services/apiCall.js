
export const fetchCharacter = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(({ results }) => 
      results.map(result => ({
        name: result.name,
        image: result.image,
        gender: result.gender
      }))
    );
};
