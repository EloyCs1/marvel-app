import { useParams } from "react-router-dom";
import useCharacterDetail from "../hooks/useCharacterDetail";
import Layout from "../components/Layout/Layout";

const CharacterDetailPage = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const { characterDetail } = useCharacterDetail(characterId ? parseInt(characterId) : 0);
  console.log("🚀 ~ CharacterDetailPage ~ characterDetail:", characterDetail);

  return (
    <Layout>
      <></>
    </Layout>
  );
};
export default CharacterDetailPage;
