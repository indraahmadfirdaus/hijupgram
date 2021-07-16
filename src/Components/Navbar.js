import React from 'react'
import { Flex, Text, Input, Spacer, HStack, Icon, Avatar } from '@chakra-ui/react'
import { FiHeart, FiCompass, FiSearch, FiHome } from 'react-icons/fi'
import { useHistory } from 'react-router'
import "@fontsource/courgette"

function Navbar() {
    const history = useHistory()
    return (
        <Flex justifyContent="center" w="100%" mt="4" bg="white" pb="4">
            <Flex w="80%" alignSelf="center">
                <Text
                style={{ fontFamily: 'Courgette' }}
                fontSize="2xl"
                onClick={() => history.push('/')}
                cursor="pointer"
                fontWeight="bold">Hijupgram</Text>
                <Spacer />
                <Input variant="filled" placeholder="Search" w="250px"/>
                <Spacer />
                <HStack spacing={5}>
                    <Icon as={FiHome} w={6} h={6}/>
                    <Icon as={FiCompass} w={6} h={6}/>
                    <Icon as={FiSearch} w={6} h={6}/>
                    <Icon as={FiHeart} w={6} h={6}/>
                    <Avatar size="sm" name="hijup" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png" />
                </HStack>
            </Flex>
        </Flex>
    )
}

export default Navbar
