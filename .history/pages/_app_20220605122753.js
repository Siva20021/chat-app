import { ChakraProvider } from "@chakra-ui/react"
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"


function MyApp({ Component, pageProps }) {
  
  return(
    <ChakraProvider>
      //return <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
