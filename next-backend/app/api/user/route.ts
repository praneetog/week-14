import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

//Backend in Next.js
export async function POST(req: NextRequest) {
    const body = await req.json();
    client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return Response.json({
        message: "You are logged in!"
    })
}


//Backend in Express.js
// app.get("/api/v1/user", (req, res) => {
//     res.json({
//         email: "praneet@gmail.com",
//         name: "Praneet"
//     })
// })