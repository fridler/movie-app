import React from 'react';
// import './ActorGallery.css'
import { Container } from 'react-bootstrap';


function ActorGalleryPage(props) {

    const name = "aaa"


    return (
        <Container className="p-actorGallery">
            <img src="https://i.pinimg.com/474x/7b/42/c5/7b42c553d66d8b58970fadb14ead5f69.jpg" alt="" />
            <p>name:</p>
            <p>age:</p>
        </Container>

    )
}

export default ActorGalleryPage;
