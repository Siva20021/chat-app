import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Avatar, Flex } from '@chakra-ui/react'
const Topbar=()=>{
    return(
        <Flex
            bg
        >
            <Avatar src=""/>
        </Flex>
    )
}
export default function Chat() {
  return (
    <Flex h="100vh">
        <Sidebar />
        <Flex
        flex={1}
        >
            <Topbar/>
        </Flex>
    </Flex>
  )
}
