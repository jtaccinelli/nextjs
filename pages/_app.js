import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "store";

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
