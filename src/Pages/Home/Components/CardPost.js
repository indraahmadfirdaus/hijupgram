import React from 'react'
import { Flex, Image, Box, Text, Icon, Avatar, HStack, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FiMoreHorizontal, FiHeart, FiMessageCircle, FiSend, FiBookmark } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addLikedPost, deleteLikedPost } from '../../../Store/Likes/actionCreator'

function CardPost({ photo }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const likedPosts = useSelector(state => state.likes.likedPosts)

    function handleOnClickComment() {
        history.push({
            pathname: '/',
            state: {
                comment: true,
                caption: photo.description || photo.alt_description,
                avatar: photo?.user.profile_image.small,
                username: photo.user.username,
                id: photo.id
            }
        })
    }

    function handleOnClickDetails() {
        let flag = likedPosts.some(liked => liked.id === photo.id)

        history.push({
            pathname: '/details/' + photo.id,
            state: {
                url: photo.urls.regular,
                likes: flag ? photo.likes + 1 : photo.likes,
                location: photo.user.location,
                username: photo.user.username,
                instagram: photo.user.instagram_username 
                }
            }
        )
    }

    function handleOnClickLikePost() {
        let flag = likedPosts.some(liked => liked.id === photo.id)
        
        let likedPostData = {}
        likedPostData["id"] = photo.id
        likedPostData["url"] = photo.urls.regular
        likedPostData["username"] = photo.user.username
        likedPostData["avatar"] = photo.user.profile_image.small
        if(!flag)
        dispatch(addLikedPost(likedPostData))
        else
        dispatch(deleteLikedPost(photo.id))
    }

    return (
        <Box w="100%" bg="white" borderWidth="1px" p={4} my="4">
            <Flex alignItems="center">
                <Avatar name="hijup" src={photo?.user.profile_image.small} />
                <Text ml="4" fontWeight="bold" letterSpacing="widest">{photo.user.username}</Text>
                <Spacer />
                <Menu>
                    <MenuButton>
                        <Icon as={FiMoreHorizontal} w={6} h={6} cursor="pointer"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem size="sm" onClick={handleOnClickDetails}>Detail</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Box w="100%" h="650px" mt="4">
                <Image w="100%" h="100%" src={photo.urls.regular}/>
            </Box>
            <HStack mt="4">
                <Icon
                color={likedPosts.some(liked => liked.id === photo.id) && 'red.500'}
                as={FiHeart}
                w={6}
                h={6}
                cursor="pointer"
                onClick={handleOnClickLikePost}
                />
                <Icon as={FiMessageCircle} w={6} h={6} cursor="pointer" onClick={handleOnClickComment}/>
                <Icon as={FiSend} w={6} h={6}/>
                <Spacer />
                <Icon as={FiBookmark} w={6} h={6}/>
            </HStack>
            <Flex mt="4">
                {
                    likedPosts.some(liked => liked.id === photo.id) ?
                    <Text fontWeight="bold" letterSpacing="widest">{photo.likes + 1} likes</Text>
                    :
                    <Text fontWeight="bold" letterSpacing="widest">{photo.likes} likes</Text>
                }
            </Flex>
            <Flex mt="4">
                <Text fontWeight="bold" letterSpacing="widest">{photo.user.username}</Text>
                <Text ml="2">{photo.description || photo.alt_description}</Text>
            </Flex>
        </Box>
    )
}

export default CardPost
