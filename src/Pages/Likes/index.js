import React from 'react'
import { Flex, Text, Avatar,  HStack, Image, Icon, SimpleGrid, Box, Button } from '@chakra-ui/react'
import { FiUser, FiMapPin, FiInstagram, FiHeart } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { deleteLikedPost } from '../../Store/Likes/actionCreator'

function Index() {
    const location = useLocation()
    const likedPosts = useSelector(state => state.likes.likedPosts)
    const dispatch = useDispatch()

    function handleDeleteLikedPost(id) {
        dispatch(deleteLikedPost(id))
    }

    return (
        <Flex minH="90vh" bg="#FAFAFA" justifyContent="center" alignItems="center" flexDirection="column">
                <Text textAlign="center" fontSize="xl" fontWeight="bold" letterSpacing="widest" mb="4">Liked Posts</Text>
                <Flex bg="white" h="70vh" w="70%" alignItems="center" justifyContent="center">
                    {
                        likedPosts.length ?
                        <Scrollbars>
                            <SimpleGrid columns={2} w="90%" h="65vh" mx="auto">
                                {
                                    likedPosts.map((liked, idx) => (
                                        <Box w="400px" minH="400px" my="4" bg="gray.100" key={idx}>
                                            <Image w="100%" h="80%" src={liked.url}/>
                                            <Flex justifyContent="space-between" mt="4">
                                                <Flex alignItems="center" ml="2">
                                                    <Avatar src={liked.avatar}/>
                                                    <Text ml="2">{liked.username}</Text>
                                                </Flex>
                                            <Flex justifyContent="center" mt="2" mr="4">
                                                <Button variant="ghost" colorScheme="red" onClick={() => handleDeleteLikedPost(liked.id)}>Remove</Button>
                                            </Flex>
                                            </Flex>
                                        </Box>
                                    ))
                                }
                            </SimpleGrid>
                        </Scrollbars>
                        :
                        <Text>There are no liked posts</Text>
                    }
                </Flex>
        </Flex>
    )
}

export default Index
