import '@component/styles/globals.css';
// import '../styles/variable.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
