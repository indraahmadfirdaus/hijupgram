import React from 'react'
import { Flex, VStack, Text, Button, Grid, GridItem, Avatar, Spacer, Box, Icon, Image, HStack } from '@chakra-ui/react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import CardPost from './Components/CardPost'

function index() {

    function renderRightContent() {
        // Dummy data
        return (
            <VStack spacing={5}>
                <Flex alignItems="center" w="100%" px="8">
                    <Avatar size="lg" name="hijup" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png" />
                    <Text ml="4" fontWeight="bold" letterSpacing="widest">hijup</Text>
                        <Spacer />
                    <Text ml="4" fontWeight="bold" letterSpacing="widest" color="blue.500">Switch</Text>
                </Flex>
                <Flex alignItems="center" w="100%" px="8">
                    <Text ml="4" fontWeight="bold" color="gray.500" letterSpacing="widest">Suggestions For You</Text>
                        <Spacer />
                    <Text ml="4" letterSpacing="widest" color="gray.600">See All</Text>
                </Flex>
                <Flex alignItems="center" w="100%" px="8">
                    <Avatar name="hijup" src="https://www.hijup.com/assets/74b77e2131aa8741977d934512568c8f.png" />
                    <Text ml="4" fontWeight="bold" letterSpacing="widest">hijupyogya</Text>
                        <Spacer />
                    <Text ml="4" fontWeight="bold" letterSpacing="widest" color="blue.500">Follow</Text>
                </Flex>
                <Flex alignItems="center" w="100%" px="8">
                    <Avatar name="hijup" src="https://www.hijup.com/assets/0a09a576094f19c987f8f2eea0a49422.png" />
                    <Text ml="4" fontWeight="bold" letterSpacing="widest">hijupsurabaya</Text>
                        <Spacer />
                    <Text ml="4" fontWeight="bold" letterSpacing="widest" color="blue.500">Follow</Text>
                </Flex>
            </VStack>
        )
    }

    return (
        <Flex minH="90vh" bg="#FAFAFA" justifyContent="center">
            <Grid templateColumns="repeat(3, 1fr)" w="70%" mt="4">
                <GridItem colSpan={2} h="10vh">
                    <Scrollbars
                    style={{ height: '90vh' }}
                    autoHide
                    >
                        {
                            [0,1,2,3,4].map((e, idx) => {
                                if(idx !== 4) {
                                    return <CardPost />
                                }
                                // last length
                                if(idx === 4) {
                                    return (
                                        <>
                                            <CardPost />
                                            <Text
                                            color="blue.500"
                                            textAlign="center"
                                            cursor="pointer"
                                            >Load More...</Text>
                                        </>
                                    )
                                }
                                }
                            )
                        }
                    </Scrollbars>
                </GridItem>
                <GridItem bg="#FAFAFA" h="10vh" mt="4">
                    {renderRightContent()}
                </GridItem>
            </Grid>
        </Flex>
    )
}

export default index
