import { useParams } from "react-router-dom";

function Store() {
  const { id } = useParams();
  return <h1>{id}</h1>;
}

export default Store;
