import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositoris } = useActions();
  const { loading, error, data } = useSelector(
    (state: any) => state.repositories
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    searchRepositoris(term);
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
  );
};

export default RepositoriesList;
