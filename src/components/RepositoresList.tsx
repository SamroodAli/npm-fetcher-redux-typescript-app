import { useState } from "react";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
  );
};

export default RepositoriesList;
