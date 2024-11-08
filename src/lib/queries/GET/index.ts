import { gql } from '@apollo/client'

export const CHARACTERS = gql`
query GetCharacters {
  allPeople {
    people {
      id
      name
      gender
      eyeColor
      homeworld {
        name
        id
      }
      species {
        name
      }
    }
  }
}`;

export const CHARACTER = gql`
query GetCharacter($id: ID!) {
  person(id: $id) {
    name
    species {
      name
    }
    homeworld {
      name
    }
    birthYear
  }
}
`;
