import React , { useEffect } from 'react'
import { Flex, Text,  Grid, GridItem } from '@chakra-ui/react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import CardPost from './Components/CardPost'
import Suggestion from './Components/Suggestion'
import Comments from './Components/Comments'
import { useLocation } from 'react-router-dom'
import { fetchPhotos } from '../../Store/Unsplash/actionCreator'
import { useDispatch, useSelector } from 'react-redux'

function Index() {
    const location = useLocation()
    const dispatch = useDispatch()
    const photos = useSelector(state => state.unsplash)

    useEffect(() => {
        dispatch(fetchPhotos())
    },[])

    if(photos.loading) {
        return <p>Loading...</p>
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
                            photos.data?.map((e, idx) => {

                                if(idx === photos.data.length - 1) {
                                    return (
                                        <>
                                            <CardPost key={idx} photo={e} />
                                            <Text
                                            color="blue.500"
                                            textAlign="center"
                                            cursor="pointer"
                                            >Load More...</Text>
                                        </>
                                    )
                                }
                                    return <CardPost key={idx} photo={e}/>
                                }
                            )
                        }
                    </Scrollbars>
                </GridItem>
                <GridItem bg="#FAFAFA" h="10vh" mt="4">
                    {
                        !location.state?.comment ? <Suggestion />
                        :
                        location.state?.comment ? <Comments />
                        : null
                    }
                </GridItem>
            </Grid>
        </Flex>
    )
}

export default Index
