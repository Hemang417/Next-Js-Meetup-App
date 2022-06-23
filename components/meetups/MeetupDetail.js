// import { Fragment } from "react";
import classes from './MeetupDetail.module.css';


function MeetupDetail(props){
    return (
        <section className={classes.detail}>
            <img src={props.image} 
            alt={props.title} />
            <p>{props.description}</p>
            <address>{props.address}</address>
            <h1>{props.title}</h1>
        </section>
    )
}

export default MeetupDetail;