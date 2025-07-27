import { NextResponse } from 'next/server';
import { auth } from "@/auth"
import connectMongo from "@/lib/mongoose";
import User from "@/models/user";
import Board from "@/models/board";

export async function POST (request) {
    try {
        // handle POST request
       const body = await request.json();

       // 400 Bad Request: The client sent invalid data (e.g., missing required fields)
       // Example: User submits a form without the 'name' field
       if (!body.name){
           return NextResponse.json({ error: 'Name is required' }, 
            { status: 400 });
       };

       const session = await auth();

       // 401 Unauthorized: The client is not authenticated
       // Example: User tries to create a board without logging in
       if(!session){
        return NextResponse.json(
            { error: 'Unauthorized' }
            , {status: 401 });
       }

       await connectMongo();

       await User.find({email : "hey@hey.com"});
      const user = await User.findById(session.user.id);

      const board = await Board.create({
        userId: user._id,
        name: body.name
      });

     user.boards.push(board._id);
        await user.save();

        // 200 OK: The request was successful
        // Example: Board was created and linked to the user
         return NextResponse.json();


    }catch (e){
        // 500 Internal Server Error: Something went wrong on the server
        // Example: Database connection fails or unexpected error occurs
        return NextResponse.json(
            { error: e.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}

//200 OK: Request succeeded (GET, POST, PUT, DELETE).
//201 Created: Resource created (POST, PUT).
//204 No Content: Request succeeded, no response body (DELETE).
//400 Bad Request: Invalid client data.
//401 Unauthorized: Authentication required.
//403 Forbidden: Authenticated, but not allowed.
//404 Not Found: Resource does not exist.
//409 Conflict: Resource conflict (e.g., duplicate).
//422 Unprocessable Entity: Validation error.
//500 Internal Server Error: Unexpected server error.