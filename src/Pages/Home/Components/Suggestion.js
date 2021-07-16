import React from 'react'
import { Flex, VStack, Text, Avatar, Spacer } from '@chakra-ui/react'

function Suggestion() {
    return (
        <VStack spacing={5}>
            <Flex alignItems="center" w="100%" px="8">
                <Avatar name="hijup" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png" />
                <Text ml="4" fontWeight="bold" letterSpacing="widest">hijup</Text>
                    <Spacer />
                <Text ml="4" fontWeight="bold" letterSpacing="widest" color="blue.500">Switch</Text>
            </Flex>
            <Flex alignItems="center" w="100%" px="8">
                <Text ml="4" fontWeight="bold" fontSize="sm" color="gray.500" letterSpacing="widest">Suggestions For You</Text>
                    <Spacer />
                <Text ml="4" letterSpacing="widest" fontSize="sm" color="gray.600">See All</Text>
            </Flex>
            <Flex alignItems="center" w="100%" px="8">
                <Avatar size="sm" name="hijup" src="https://www.hijup.com/assets/74b77e2131aa8741977d934512568c8f.png" />
                <Text ml="4" fontWeight="bold" fontSize="sm" letterSpacing="widest">hijupyogya</Text>
                    <Spacer />
                <Text ml="4" fontWeight="bold" fontSize="sm" letterSpacing="widest" color="blue.500">Follow</Text>
            </Flex>
            <Flex alignItems="center" w="100%" px="8">
                <Avatar size="sm" name="hijup" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png" />
                <Text ml="4" fontWeight="bold" fontSize="sm" letterSpacing="widest">hijupsurabaya</Text>
                    <Spacer />
                <Text ml="4" fontWeight="bold" fontSize="sm" letterSpacing="widest" color="blue.500">Follow</Text>
            </Flex>
        </VStack>
    )
}

export default Suggestion
