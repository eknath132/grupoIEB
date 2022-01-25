import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(()=> {
    document.querySelector('body').classList.toggle('light-body')
  },[])
  return <Component {...pageProps}/>
}

export default MyApp
