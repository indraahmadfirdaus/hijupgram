import React, { useState } from 'react'
import { Flex, Text, Avatar, Image, SimpleGrid, Box, Button } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { searchPhotosLoadMore } from '../../Store/Unsplash/actionCreator'

function Index() {
    const location = useLocation()
    const searchData = useSelector(state => state.unsplash.searchData)
    const dispatch = useDispatch()
    let [ page, setPage ] = useState(1)

    function handleLoadMore() {
        setPage(page += 1)
        dispatch(searchPhotosLoadMore(location.state?.query, page))
    }

    return (
        <Flex minH="90vh" bg="#FAFAFA" justifyContent="center" alignItems="center" flexDirection="column">
                <Text textAlign="center" fontSize="xl" fontWeight="bold" letterSpacing="widest" mb="4">Search results for: {location.state?.query || ''}</Text>
                <Flex bg="white" h="70vh" w="70%" alignItems="center" justifyContent="center">
                    {
                        searchData.length ?
                        <Scrollbars>
                            <SimpleGrid columns={2} w="90%" h="65vh" mx="auto">
                                {
                                    searchData.map((data, idx) => (
                                        <>
                                        <Box w="400px" minH="400px" my="4" bg="gray.100" key={idx}>
                                            <Image w="100%" h="80%" src={data.urls.regular}/>
                                            <Flex justifyContent="space-between" mt="4">
                                                <Flex alignItems="center" ml="2">
                                                    <Avatar src={data.user.profile_image.small}/>
                                                    <Text ml="2">{data.user.username}</Text>
                                                </Flex>
                                                <Flex justifyContent="center" mt="2" mr="4">
                                                <Button variant="ghost" colorScheme="twitter">Detail</Button>
                                            </Flex>
                                            </Flex>
                                        </Box>
                                        </>
                                    ))
                                }
                            </SimpleGrid>
                        </Scrollbars>
                        :
                        <Text>You haven't search anything yet.</Text>
                    }
                </Flex>
                {
                location.state?.query &&
                    <Button
                    variant="ghost"
                    colorScheme="blue"
                    mt="4"
                    onClick={handleLoadMore}
                    >Load More</Button>
                }
        </Flex>
    )
}

export default Index
