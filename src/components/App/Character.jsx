import React from 'react';
import { useCharacter } from '../../hooks/appContext';

const Character = () => {

  const characters = useCharacter();

  const characterElements = characters.map(character => (
    <li key={character.name}>
      <p>{character.name}-{character.gender}</p>
      <img src={character.image} alt={character.name} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default Character;
