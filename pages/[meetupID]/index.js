import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(){
    return (
        <MeetupDetail 
        image = "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg?q=60"
        title = "First Meetup"
        address = "Some City, 12345, Some Neighbourhood"
        description = "The First Meetup"/>
    )
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            { 
                params: {
                meetupID: 'm1',
                }, 
            },
            { 
                params: {
                meetupID: 'm2',
                }, 
            },
        ],
            
        };
    }

export async function getStaticProps(context){

    const meetupId = context.params.meetupID;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg?q=60",
                title: "First Meetup",
                id: meetupId,
                address: "Some City, 12345, Some Neighbourhood",
                description: "The First Meetup",
            }
        }
    };
}

export default MeetupDetails;