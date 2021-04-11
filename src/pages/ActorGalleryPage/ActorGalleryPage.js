import React from 'react';
import './ActorGalleryPage.css'
import { Container } from 'react-bootstrap';
import ActorCardComponent from '../../components/ActorCardComponent';


function ActorGalleryPage(props) {

    const name = "aaa"


    return (
        <Container className="p-actorGallery">

            <ActorCardComponent img="https://i.pinimg.com/474x/7b/42/c5/7b42c553d66d8b58970fadb14ead5f69.jpg"
                name="aaaaa" age="11" />
            <ActorCardComponent img="https://i.pinimg.com/474x/7b/42/c5/7b42c553d66d8b58970fadb14ead5f69.jpg"
                name="bbbbb" age="22" />
            <ActorCardComponent img="https://i.pinimg.com/474x/7b/42/c5/7b42c553d66d8b58970fadb14ead5f69.jpg"
                name="ccccc" age="33" />
        </Container>

    )
}

export default ActorGalleryPage;
