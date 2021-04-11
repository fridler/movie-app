import './ActorCardComponent.css'


function ActorCardComponent(props) {

    return (
        <div className="actor-card">
            <img src={props.img} />
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
        </div>
    )
}

export default ActorCardComponent;