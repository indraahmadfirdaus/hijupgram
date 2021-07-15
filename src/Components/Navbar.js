import React from 'react'
import { Flex, Text, Input, Spacer, HStack, Icon, Avatar } from '@chakra-ui/react'
import { FiHeart, FiCompass, FiSearch, FiHome } from 'react-icons/fi'
import "@fontsource/courgette"

function Navbar() {
    return (
        <Flex justifyContent="center" w="100%" mt="4" bg="white" pb="4">
            <Flex w="70%" alignSelf="center">
                <Text
                style={{ fontFamily: 'Courgette' }}
                fontSize="3xl"
                fontWeight="bold">Hijupgram</Text>
                <Spacer />
                <Input variant="filled" placeholder="Search" w="250px"/>
                <Spacer />
                <HStack spacing={5}>
                    <Icon as={FiHome} w={8} h={8}/>
                    <Icon as={FiCompass} w={8} h={8}/>
                    <Icon as={FiSearch} w={8} h={8}/>
                    <Icon as={FiHeart} w={8} h={8}/>
                    <Avatar size="sm" name="hijup" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png" />
                </HStack>
            </Flex>
        </Flex>
    )
}

export default Navbar
