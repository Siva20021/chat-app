import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Button, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { getAuth,signOut } from 'firebase/auth'
import { auth } from '../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import {useCollection} from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../firebaseconfig'
const Chat=()=>{
    return(
        <Flex p={3} align="center" _hover={{bg:"gray.100",cursor:"pointer"}}>
            <Avatar src="" marginEnd={3}/>
            <Text>user@gmail.com</Text>
        </Flex>
    )
}
export default function Sidebar() {
  const[user]=useAuthState(auth);
  const [snapshot,loading,error]=useCollection(collection(db,"chats"));
  const chats=snapshot?.docs.map(doc=>({id:doc.id,...doc.data()}))
  return (
    <Flex
        //bg="blue.100"
        w="300px"
        h="100vh"
        borderEnd="1px solid"
        borderColors="gray.200"
        direction="column"
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
                <Avatar src={user.photoURL} marginEnd={3} />
                <Text>{user.displayName}</Text>
            </Flex>
                
            <IconButton size="sm" isRound icon={<ArrowLeftIcon/>} onClick={()=>signOut(auth)}/>
        </Flex>
        <Button m={5} p={4}>New Chat</Button>
        <Flex overflowX="scroll" direction="column" sx={{scrollbarWidth:"none"}} flex={1}>
            <Chat/>
        </Flex>     
    </Flex>
  )
}
