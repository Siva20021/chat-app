import React from 'react'
import Head from "next/head"
import { ChatIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
export default function Login() {
  return (
    <>
        <Head>
        <title>Login</title>
        </Head>
        <Box bgColor="blue.500" w="fit-content" p={5} rounded="3xl">
            <ChatIcon w="100px" h="100px" color="white"/>    
        </Box>   
        <Button boxShadow></Button>
        
    </>
        
  )
}
