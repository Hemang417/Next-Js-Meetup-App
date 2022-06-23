import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        image: 'https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg?q=60',
        title: 'The First Meetup',
        address: '1234, Some City',
        description: 'This is a first Meetup!'
    },
    {
        id: 'm2',
        image: 'https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg?q=60',
        title: 'The Second Meetup',
        address: '12345, Some City',
        description: 'This is a second Meetup!'

    },
]

function HomePage(){
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;