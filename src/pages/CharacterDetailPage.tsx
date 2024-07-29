import { useParams } from "react-router-dom";

import NotFound from "./NotFound";
import Layout from "../components/Layout/Layout";
import CharacterDetail from "../components/CharacterDetail/CharacterDetail";

const CharacterDetailPage = () => {
  const { characterId } = useParams<{ characterId: string }>();

  const validCharacterId = characterId ? parseInt(characterId) : NaN;

  if (isNaN(validCharacterId)) {
    return <NotFound />;
  }

  return (
    <Layout>
      <CharacterDetail characterId={validCharacterId} />
    </Layout>
  );
};
export default CharacterDetailPage;
