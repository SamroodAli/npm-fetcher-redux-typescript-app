import { store } from "../redux";
import { Provider } from "react-redux";
import RepositoriesList from "./RepositoresList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};
export default App;
