import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Avatar, Flex, Heading } from '@chakra-ui/react'
const Topbar=()=>{
    return(
        <Flex
            bg="gray.100"
            h="81px"
            w="100%"
            align="center"   
        >
            <Avatar src="" marginEnd={3}/>
            <Heading size="lg">user@gmail.com</Heading>
        </Flex>
    )
}
const Bottombar=()=>{
    return(
        <Flex
            bg="blue.100"
            h="81px"
        >

        </Flex>
    )
}
export default function Chat() {
  return (
    <Flex h="100vh">
        <Sidebar />
        <Flex
        flex={1}
        direction="column"
        >
            <Topbar/>
            
            <Bottombar/>
        </Flex>
    </Flex>
  )
}
