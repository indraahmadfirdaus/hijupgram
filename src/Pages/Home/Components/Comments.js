import React, { useEffect } from 'react'
import { useToast, Box, Flex, Text, Avatar, Input, Button, VStack, HStack, InputGroup, InputRightElement, Divider } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getComment } from '../../../Store/Comments/actionCreator'

function Comments() {
    const location = useLocation()
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comment.comments)
    const toast = useToast()

    function handleInputComment(event) {
        if(event.key === 'Enter') {
            
            if(event.target.value === '') {
                toast({
                    title: 'please fill the blank form',
                    duration: 3000,
                    variant:'left-accent'
                })
            } else {
                const commentData = {}
                commentData["id"] = location.state.id
                commentData["comment"] = event.target.value
                commentData["avatar"] = "https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png"
                dispatch(addComment(commentData))
                event.target.value = ""
            }
        }
    }

    function renderComment(comment, idx) {
        return (
            <HStack my="2" key={idx}>
                        <Avatar size="sm" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png"/>
                        <Flex w="250px" alignItems="center">
                            <Text ml="4" fontWeight="bold" letterSpacing="widest" fontSize="sm">hijup
                                <Text fontWeight="light"fontSize="sm">{comment.comment}</Text>
                            </Text>
                        </Flex>
            </HStack>
        )
    }

    return (
        <VStack spacing={5} ml="4">
            <Flex alignItems="center" justifyContent="space-between">
                <Avatar src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png"/>
                    <Input
                    ml="4"
                    placeholder="add a comment"
                    rounded="full"
                    bg="white"
                    onKeyPress={handleInputComment}
                    w="250px"
                    /> 
            </Flex>
            <VStack w="100%" bg="white" rounded="xl" h="60vh" p={4}>
                {/* captions  */}
                    <HStack my="2">
                        <Avatar src={location.state.avatar}/>
                        <Flex w="250px" alignItems="center">
                            <Text ml="4" fontWeight="bold" letterSpacing="widest">{location.state.username}
                                <Text fontWeight="light">{location.state.caption}</Text>
                            </Text>
                        </Flex>
                    </HStack>
                        <Divider />
                {/* comments */}
                {
                    comments.map((comment, idx) => {
                        if(location.state.id === comment.id) {
                            return renderComment(comment, idx);
                        }
                    })
                }
            </VStack>
        </VStack>
    )
}

export default Comments
