import "@component/styles/globals.css"
// import '../styles/variable.scss';
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../Redux/store"
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
