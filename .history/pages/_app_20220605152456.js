import { ChakraProvider } from "@chakra-ui/react"
import {useA}
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"


function MyApp({ Component, pageProps }) {
  
  return(
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
