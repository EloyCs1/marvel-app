import { Route, Routes } from "react-router-dom";
import CharactersPage from "./CharactersPage";
import CharacterDetailPage from "./CharacterDetailPage";
import NotFound from "./NotFound";
import { HashRouter } from "react-router-dom";
const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/character/:characterId" element={<CharacterDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};
export default AppRouter;
