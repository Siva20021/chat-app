import React from 'react'
import Head from "next/head"
import { ChatIcon } from '@chakra-ui/icons'
import { Box,Button,Center } from '@chakra-ui/react'
export default function Login() {
  return (
    <>
        <Head>
        <title>Login</title>
        </Head>
        <Center>
            <ChakraProvider>
    <Login/>
  </ChakraProvider>
  
        </Center>
            
        
    </>
        
  )
}
