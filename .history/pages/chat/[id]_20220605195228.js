import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Avatar, Button, Flex, FormControl, Heading, Input, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, orderBy } from 'firebase/firestore'
import { db } from '../../firebaseconfig'
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
    const router=useRouter();
    const {id}=router.query;
    const q=query(collection(db,`chats/${id}/messages`),orderBy("timestamp"));
    const [messages]=useCollectionData(q);
    console.log(id);

    return (
    <Flex h="100vh" >
        <Head><title>Chat App</title></Head>
        <Sidebar />
        <Flex
        flex={1}
        direction="column"
        >
            <Topbar/>
            <Flex
                flex={1}
                direction="column" 
                pt={4}
                mx={5} overflowX="scroll"
                sx={{scrollbarWidth:"none"}}
            >
               {getMessages}    
            </Flex>
            <Bottombar/>
        </Flex>
    </Flex>
  )
}
