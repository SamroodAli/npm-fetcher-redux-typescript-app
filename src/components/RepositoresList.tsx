import { useState } from "react";
import { ActionCreators } from "../redux";
import { useDispatch } from "react-redux";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(ActionCreators.searchRepositoris(term));
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
  );
};

export default RepositoriesList;
