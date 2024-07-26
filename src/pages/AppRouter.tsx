import { Route, Routes } from "react-router-dom";
import CharactersPage from "./CharactersPage";
import CharacterDetailPage from "./CharacterDetailPage";
import NotFound from "./NotFound";
import { BrowserRouter } from "react-router-dom";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/character/:characterId" element={<CharacterDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
