import { AppCharacter } from "src/service/types";

export const CHARACTER: AppCharacter.Character = {
  description: "Rick Jones has been Hulk's best bud since day one ",
  id: 1017100,
  image: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
  name: "A-Bomb (HAS)",
};

export const COMICS: AppCharacter.Comic[] = [
  {
    id: 10223,
    title: "Marvel Premiere (1972) #35",
    onsaleDate: 1977,
    image: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/642ddeb849005.jpg",
  },
  {
    id: 10224,
    title: "Marvel Premiere (1972) #36",
    onsaleDate: 1977,
    image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
  },
  {
    id: 10225,
    title: "Marvel Premiere (1972) #37",
    onsaleDate: 1977,
    image: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
  },
  {
    id: 8500,
    title: "Deadpool (1997) #44",
    onsaleDate: 2000,
    image: "http://i.annihil.us/u/prod/marvel/i/mg/b/80/4f206cc0ac28a.jpg",
  },
];
