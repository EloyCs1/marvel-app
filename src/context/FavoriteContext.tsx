import { createContext, useCallback, useContext, useState } from "react";
import { FavoriteContextValue, FavoriteProviderProps } from "./types";

export const defaultFavoriteContextValue: FavoriteContextValue = {
  favoriteFilter: false,
  toggleFavoriteFilter: () => console.warn("toggleFavoriteFilter init"),
  favoriteIds: [],
  toggleFavoriteId: () => console.warn("toggleFavoriteId init"),
};

export const FavoriteContext = createContext(defaultFavoriteContextValue);

export const FavoriteProvider = ({ children, values }: FavoriteProviderProps) => {
  const [favoriteFilter, setFavoriteFilter] = useState(values.favoriteFilter);
  const [favoriteIds, setFavoriteIds] = useState(values.favoriteIds);

  const toggleFavoriteFilter = useCallback((value: boolean) => setFavoriteFilter(value), []);
  const toggleFavoriteId = useCallback(
    (id: number) => {
      const index = favoriteIds.indexOf(id);
      if (index > -1) {
        const ids = [...favoriteIds];
        ids.splice(index, 1);
        setFavoriteIds(ids);
        return;
      }
      setFavoriteIds([...favoriteIds, id]);
    },
    [favoriteIds],
  );

  return (
    <FavoriteContext.Provider value={{ favoriteFilter, toggleFavoriteFilter, favoriteIds, toggleFavoriteId }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
