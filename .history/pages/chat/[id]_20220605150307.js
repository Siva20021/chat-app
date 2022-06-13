import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Avatar, Button, Flex, FormControl, Heading, Input, Text } from '@chakra-ui/react'
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
        <FormControl
            p={3}
        >
            <Input placeholder='Type a message...'/>
            <Button type="submit" hidden autoComplete="off">Submit</Button>
        </FormControl>
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
            <Flex
                flex={1}
                direction="column" w="fit-content" min-width="100px" borderRadius={}
            >
                <Text>This is a dummy message</Text>
            </Flex>
            <Bottombar/>
        </Flex>
    </Flex>
  )
}
