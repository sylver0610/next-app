// import "@component/styles/globals.css"
import "../styles/globals.css"
// import '../styles/variable.scss';
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../Redux/store"
import { SessionProvider } from "next-auth/react"
import Layout from "../Components/Layout/LayoutAdmin"
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </Provider>
    </SessionProvider>
  )
}
