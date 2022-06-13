import { Center, ChakraProvider, Spinner } from "@chakra-ui/react"
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from "../firebaseconfig"
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"


function MyApp({ Component, pageProps }) {
  const[user,loading,error]=useAuthState(auth);
  if(loading){
    return(
      <ChakraProvider>
        <Center></Center>
        
      </ChakraProvider>
    )
    
  }
  return(
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
