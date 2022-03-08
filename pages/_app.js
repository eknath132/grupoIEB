import { useEffect } from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(()=> {
    document.querySelector('body').classList.toggle('light-body')
    document.getElementById('__next').classList.toggle('body-height')
  },[])
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps}/>
      {/* <ReactQueryDevtools/> */}
    </QueryClientProvider>
  ) 
}

export default MyApp
