export declare namespace ApiCharacters {
  interface Character {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
  }

  interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
  }

  interface Result {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics;
    series: Comics;
    stories: Stories;
    events: Comics;
    urls: Url[];
  }

  interface Url {
    type: string;
    url: string;
  }

  interface Stories {
    available: number;
    collectionURI: string;
    items: StoriesItem[];
    returned: number;
  }

  interface StoriesItem {
    resourceURI: string;
    name: string;
    type: string;
  }

  interface Comics {
    available: number;
    collectionURI: string;
    items: ComicsItem[];
    returned: number;
  }

  interface ComicsItem {
    resourceURI: string;
    name: string;
  }

  interface Thumbnail {
    path: string;
    extension: string;
  }
}

export declare namespace ApiCharacterComics {
  interface Comic {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
  }

  interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
  }

  interface Result {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series: Series;
    dates: Date[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: Thumbnail[];
    creators: Creators;
    characters: Characters;
    stories: Stories;
    events: Events;
  }

  interface Events {
    available: number;
    collectionURI: string;
    returned: number;
  }

  interface Stories {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
  }

  interface Item2 {
    resourceURI: string;
    name: string;
    type: string;
  }

  interface Characters {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
  }

  interface Creators {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
  }

  interface Item {
    resourceURI: string;
    name: string;
    role: string;
  }

  interface Thumbnail {
    path: string;
    extension: string;
  }

  interface Price {
    type: string;
    price: number;
  }

  interface Date {
    type: string;
    date: string;
  }

  interface Series {
    resourceURI: string;
    name: string;
  }

  interface Url {
    type: string;
    url: string;
  }

  interface TextObject {
    type: string;
    language: string;
    text: string;
  }
}

export declare namespace AppCharacter {
  interface Character {
    id: number;
    name: string;
    image: string;
    description: string;
    favorite: boolean;
  }

  interface Comic {
    id: number;
    title: string;
    onsaleDate: number;
    image: string;
  }

  interface CharacterDetail extends Character {
    comics: Comic[];
  }
}
