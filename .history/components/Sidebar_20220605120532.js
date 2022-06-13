import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Button, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'

export default function Sidebar() {
  return (
    <Flex
        //bg="blue.100"
        w="300px"
        h="100vh"
        borderEnd="1px solid"
        borderColors="gray.200"
    >
        <Flex
            //bg="red.100"
            h="81px" w="100%"
            align="center"
            justifyContent="space-between"
            borderBottom="1px solid" borderColor="gray.100"
            p={3}

        >
            <Flex align="center">
                <Avatar src="" marginEnd={3} />
                <Text>Albert Einstein</Text>
            </Flex>
                
            <IconButton size="sm" isRound icon={<ArrowLeftIcon/>}/>
        </Flex>
        <Button>New Chat</Button>
    </Flex>
  )
}
