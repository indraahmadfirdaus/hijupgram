import React, { useState } from 'react'
import { Flex, Text, Input, Spacer, HStack, Icon, Avatar } from '@chakra-ui/react'
import { FiHeart, FiCompass, FiSearch, FiHome } from 'react-icons/fi'
import { useHistory, useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { searchPhotos } from '../Store/Unsplash/actionCreator'
import "@fontsource/courgette"

function Navbar() {
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    function handleSearch(event) {
        if(event.key === 'Enter') {
            console.log(event.target.value)
            dispatch(searchPhotos(event.target.value))
            history.push({ 
                pathname: '/explore',
                state: { query }
            })
        }
    }

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
                <Input
                variant="filled"
                placeholder="Search"
                w="250px"
                onKeyPress={handleSearch}
                onChange={(e) => setQuery(e.target.value)}
                />
                <Spacer />
                <HStack spacing={5}>
                    <Icon
                    as={FiHome}
                    color={location.pathname === '/' ? 'black' : 'gray.500'}
                    w={6}
                    h={6}
                    cursor="pointer"
                    onClick={() => history.push('/')}
                    />
                    <Icon
                    color={location.pathname === '/explore' ? 'black' : 'gray.500'}
                    as={FiCompass}
                    w={6}
                    h={6}
                    onClick={() => history.push({ 
                        pathname: '/explore'
                    })}
                    cursor="pointer"
                    />
                    <Icon
                    as={FiHeart}
                    color={location.pathname === '/likes' ? 'black' : 'gray.500'}
                    w={6}
                    h={6}
                    cursor="pointer"
                    onClick={() => history.push('/likes')}
                    />
                    <Avatar size="sm" name="hijup" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png" />
                </HStack>
            </Flex>
        </Flex>
    )
}

export default Navbar
