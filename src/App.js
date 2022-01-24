import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./reducer";

import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const store = createStore(RootReducer);

function App() {
  return (
    <Provider store={store}>
      <section className="App">
        <Header />
        <Main />
        <Footer />
      </section>
    </Provider>
  );
}

export default App;
