// /api/new-meetup

import { MongoClient } from 'mongodb';

async function handler(req, res){
    if (req.method === "POST"){
        const data = req.body;

        // const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://Hemang417:Hemang417@cluster0.nlsiivc.mongodb.net/meetup_database?retryWrites=true&w=majority');

        const db = client.db();

        const meetup_databaseCollection = db.collection('meetup_table');

        const result = await meetup_databaseCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Data Inserted Successfully'});
    }

}

export default handler;