import { AppCharacter } from "../service/types";

export const defaultCharacterList: AppCharacter.Character[] = [];
export const defaultCharacterDetail: AppCharacter.CharacterDetail = {
  id: NaN,
  name: "",
  image: "",
  description: "",
  favorite: false,
  comics: [],
};
