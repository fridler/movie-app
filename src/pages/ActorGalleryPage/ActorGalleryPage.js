import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ActorGalleryPage.css'
import { Container } from 'react-bootstrap';
import ActorCardComponent from '../../components/ActorCardComponent';
import ActorModel from '../../model/ActorModel';


function ActorGalleryPage() {

    const [actors, setActors] = React.useState([]);

    // We want to fetch the cars data from JSON only once the compoenent is mounting
    useEffect(() => {
        axios.get("actors.json").then(response => {
            setActors(response.data.map(plainActor => new ActorModel(plainActor.fname, plainActor.lname, plainActor.birthday, plainActor.image, plainActor.IMBDLink)));
        }).catch(error => {
            console.error(error);
        });
    }, []);




    const [filterText, setFilterText] = React.useState("")
    const [sortBy, setSortBy] = React.useState("fname");

    // 1) Filter the actors based on the filterText
    const filteredActors = actors.filter(actor =>
        actor.fname.toLowerCase().includes(filterText.toLowerCase()) ||
        actor.lname.toLowerCase().includes(filterText.toLowerCase()));

    // 2) Sort the actors array
    filteredActors.sort((actor1, actor2) => {
        if (actor1[sortBy] > actor2[sortBy]) {
            return 1;
        } else if (actor1[sortBy] < actor2[sortBy]) {
            return -1;
        } else {
            return 0;
        }
    });

    return (
        <Container className="p-actorGallery">
            <h1>Actors Page</h1>
            <div>
                <input type="text" placeholder="Filter actors" className="col-9"
                    value={filterText} onChange={e => setFilterText(e.target.value)} />

                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="col-3">
                    <option value="fname">First Name</option>
                    <option value="lname">Last Name</option>
                </select>
            </div>
            <div>
                <ul style={{ display: "flex", padding: 0 }}>
                    {filteredActors.map(actor => <div>

                        <img src={actor.image} alt="" />

                        <div>
                            {actor.fname + " " + actor.lname}
                        </div>
                        <div>
                            {actor.birthday}
                        </div>

                    </div>)
                    }
                </ul>
            </div>

            {/* <ul>
                {filteredActors.map(actor => <li>
                    {actor.fname + " " + actor.lname}</li>)}
            </ul> */}


            {/* <ActorCardComponent img="https://i.pinimg.com/474x/7b/42/c5/7b42c553d66d8b58970fadb14ead5f69.jpg"
                name="aaaaa" age="11" />
            <ActorCardComponent img="https://i.pinimg.com/474x/7b/42/c5/7b42c553d66d8b58970fadb14ead5f69.jpg"
                name="bbbbb" age="22" />
            <ActorCardComponent img="https://i.pinimg.com/474x/7b/42/c5/7b42c553d66d8b58970fadb14ead5f69.jpg"
                name="ccccc" age="33" /> */}
        </Container >

    )
}

export default ActorGalleryPage;
