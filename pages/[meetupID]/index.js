import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props){
    return (
        <MeetupDetail 
        image = {props.meetupData.image}
        title = {props.meetupData.title}
        address = {props.meetupData.address}
        description = {props.meetupData.description}/>
    )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://Hemang417:Hemang417@cluster0.nlsiivc.mongodb.net/meetup_database?retryWrites=true&w=majority');

        const db = client.db();

        const meetup_databaseCollection = db.collection('meetup_table');

        const meetups = await meetup_databaseCollection.find({}, { _id: 1 }).toArray();

        client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map((meetup) => ({
            params: {
                meetupID: meetup._id.toString(),
            }
        })),

        };
    }

export async function getStaticProps(context){
    // console.log(context);
    const meetupId = context.params.meetupID;
    // console.log(meetupId);
    const client = await MongoClient.connect('mongodb+srv://Hemang417:Hemang417@cluster0.nlsiivc.mongodb.net/meetup_database?retryWrites=true&w=majority');

    const db = client.db();

    const meetup_databaseCollection = db.collection('meetup_table');

    const selectedMeetup = await meetup_databaseCollection.findOne({ _id: ObjectId(meetupId) })

    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    };
}

export default MeetupDetails;