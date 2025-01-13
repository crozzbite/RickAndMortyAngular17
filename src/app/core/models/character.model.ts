
export interface Character {
    id: string,
    status: string,
    species :string,
    type: string,
    gender: string,
    origin: {
      name: string,
      url: string,
    },
    location:{
      name: string,
      url: string,
    },
    image:string,
    episode: string[],
    url : string,
    created: string,
  
  }
  
  export interface CharacterResults {
      info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
      };
      results: Character[];  // Aquí tenemos un arreglo de objetos de tipo Character
    }
  