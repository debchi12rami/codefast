import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import  connectMongo from '@/libs/mongoose';
import { User } from '@/models/User';
import { Board } from '@/models/Board';

export async function POST(request){

    try {

        // Parse the request body
        const body = await request.json();

      //the body field is required   
        if(!body.name){
            return NextResponse.json({ error: 'Board name is required' }, { status: 400 });
        }

        //check if the user is authenticated
        const session = await auth();

        // If the session is not found, return an unauthorized response
        if(!session){
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Connect to the MongoDB database
        await connectMongo();

        // Find the user by their email from the session
        const user = await User.findById(session.user.id);

       const board = await Board.create({
            userId : user._id,
            name: body.name,
        })

        user.boards.push(board._id);

        await user.save();

        return NextResponse.json({ message: 'Board created successfully', board }, { status: 201 });

    }catch(e){
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}