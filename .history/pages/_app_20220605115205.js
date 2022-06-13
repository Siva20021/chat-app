import { ChakraProvider } from "@chakra-ui/react"
import Login from "../components/Login"
import 

function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
  return(
    <ChakraProvider>
      <Login/>
    </ChakraProvider>
  )
}

export default MyApp
