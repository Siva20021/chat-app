import { ChakraProvider } from "@chakra-ui/react"
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"


function MyApp({ Component, pageProps }) {
  const[user,loading,error]=useAuthState
  return(
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
