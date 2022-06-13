import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Flex } from '@chakra-ui/react'
const Topbar=()=>{
    return(
        
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
