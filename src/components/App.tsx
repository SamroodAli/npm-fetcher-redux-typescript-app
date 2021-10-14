import { store } from "../redux";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
      </div>
    </Provider>
  );
};
export default App;
