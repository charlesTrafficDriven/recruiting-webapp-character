const API_URL = 'https://recruiting.verylongdomaintotestwith.ca/api';


const GITHUB_USERNAME = "charlesTrafficDriven"

const saveCharacter = async (character) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  });

  if (!response.ok) {
    throw new Error('Failed to save character');
  }
}

const loadCharacter = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to load character');
  }

  const character = await response.json();
  return character;
}