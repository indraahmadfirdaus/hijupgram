import React from 'react'
import { Flex, Image, Box, Text, Icon, Avatar, HStack, Spacer } from '@chakra-ui/react'
import { FiMoreHorizontal, FiHeart, FiMessageCircle, FiSend, FiBookmark } from 'react-icons/fi'


function CardPost() {
    return (
        <Box w="100%" bg="white" borderWidth="1px" p={4} my="4">
            <Flex alignItems="center">
                <Avatar name="hijup" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png" />
                <Text ml="4" fontWeight="bold" letterSpacing="widest">hijup</Text>
                <Spacer />
                <Icon as={FiMoreHorizontal} w={6} h={6}/>
            </Flex>
            <Box w="100%" h="650px" mt="4">
                <Image w="100%" h="100%" src="https://images.unsplash.com/photo-1523203658085-27859efeaa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDY0MjV8MHwxfHNlYXJjaHwxfHxoaWphYnxlbnwwfHx8fDE2MjYxODkzMjg&ixlib=rb-1.2.1&q=80&w=1080"/>
            </Box>
            <HStack mt="4">
                <Icon as={FiHeart} w={8} h={8} cursor="pointer"/>
                <Icon as={FiMessageCircle} w={8} h={8} cursor="pointer"/>
                <Icon as={FiSend} w={8} h={8}/>
                <Spacer />
                <Icon as={FiBookmark} w={8} h={8}/>
            </HStack>
            <Flex mt="4">
                <Text fontWeight="bold" letterSpacing="widest">hijup</Text>
                <Text ml="2">Caption goes here...</Text>
            </Flex>
        </Box>
    )
}

export default CardPost
