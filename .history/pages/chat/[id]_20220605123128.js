import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Flex } from '@chakra-ui/react'
export default function Chat() {
  return (
    <Flex h="100vh">
        <Sidebar />
        <Flex
        bg="blue.100"
        flex={1}
        >

        </Flex>
    </Flex>
  )
}
