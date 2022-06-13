import { ChakraProvider } from "@chakra-ui/react"
import Login from "../components/Login"


function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
  <ChakraProvider/>
  return <Login/>
}

export default MyApp
