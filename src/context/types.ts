import { ReactNode } from "react";

export interface FavoriteContextValue {
  favoriteFilter: boolean;
  toggleFavoriteFilter: (favoriteFilter: boolean) => void;
  favoriteIds: number[];
  toggleFavoriteId: (id: number) => void;
}

export interface FavoriteProviderProps {
  children: ReactNode;
  values: FavoriteContextValue;
}
