import { AppCharacter } from "src/service/types";

export interface CharacterComicsProps {
  comics: AppCharacter.Comic[];
  loading: boolean;
}
