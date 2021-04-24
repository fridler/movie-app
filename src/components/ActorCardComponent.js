import './ActorCardComponent.css'


function ActorCardComponent({ fname, lname, birthday, image, IMBDLink }) {

    return (
        <div className="actor-card">
            <img src={image} />
            <p>name: {fname, lname}</p>
            <p>age: {birthday}</p>
        </div>
    )
}

export default ActorCardComponent;