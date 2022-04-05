import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { intitializeStore } from "store";
const { store, persistor } = intitializeStore();

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
