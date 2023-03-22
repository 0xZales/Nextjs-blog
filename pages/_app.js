import '../styles/global.css'
import {AppContext} from 'next/app'
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }