import React from 'react'
import { Flex, Text,  HStack, Image, Icon, SimpleGrid, Box } from '@chakra-ui/react'
import { FiUser, FiMapPin, FiInstagram, FiHeart } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

function Index() {
    const location = useLocation()
    return (
        <Flex minH="90vh" bg="#FAFAFA" justifyContent="center" alignItems="center" flexDirection="column">
            <Text textAlign="center" fontSize="xl" fontWeight="bold" letterSpacing="widest" mb="4">Post Detail</Text>
            <Flex bg="white" h="70vh" w="70%">
                <HStack p={8}>
                    <Box w="40%">
                        <Image w="100%" h="300px" alt="detail post img" src={location.state.url}/>
                    </Box>
                    <Flex justifyContent="center" w="60%" flexDirection="column" alignItems="center">
                        <SimpleGrid spacing={10} columns={2}>
                            <Flex flexDirection="column" alignItems="center">
                                <Icon as={FiUser} w={7} h={7} color="gray.500"/>
                                <Text color="gray.500">
                                    {location.state.username}
                                </Text>
                            </Flex>
                            <Flex flexDirection="column" alignItems="center">
                                <Icon as={FiInstagram} w={7} h={7} color="gray.500"/>
                                <Text color="gray.500">
                                    {location.state.instagram}
                                </Text>
                            </Flex>
                            <Flex flexDirection="column" alignItems="center">
                                <Icon as={FiHeart} w={7} h={7} color="gray.500"/>
                                <Text color="gray.500">
                                    {location.state.likes}
                                </Text>
                            </Flex>
                            <Flex flexDirection="column" alignItems="center">
                                <Icon as={FiMapPin} w={7} h={7} color="gray.500"/>
                                <Text color="gray.500">
                                    {location.state.location}
                                </Text>
                            </Flex>
                        </SimpleGrid>
                    </Flex>
                </HStack>
            </Flex>
        </Flex>
    )
}

export default Index
