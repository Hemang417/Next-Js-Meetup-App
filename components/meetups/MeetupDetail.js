import { Fragment } from "react";

function MeetupDetail(props){
    return (
        <Fragment>
            <img src={props.image} 
            alt={props.title} />
            <p>{props.description}</p>
            <address>{props.address}</address>
            <h1>{props.title}</h1>
        </Fragment>
    )
}

export default MeetupDetail;