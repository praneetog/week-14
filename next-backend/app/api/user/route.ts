import { NextRequest } from "next/server";

//Backend in Next.js
export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);

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