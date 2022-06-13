import { Avatar, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Sidebar() {
  return (
    <Flex
        bg="blue.100"
        w="300px"
        h="100vh"
        borderEnd="1px solid"
        borderColors="gray.200"
    >
        <Flex
            bg="red.100"
            h="81px" w="100%"
        >
            <Avatar src="/>
        </Flex>
    </Flex>
  )
}
