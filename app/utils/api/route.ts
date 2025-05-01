
// import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { username, password } = req.body;

//   // Validate credentials (this is a simplified example)
//   if (username === "admin" && password === "password") {
//     // Set the "token" cookie
//     res.setHeader("Set-Cookie", "token=authenticated; Path=/; HttpOnly; Secure; SameSite=Strict");

//     return res.status(200).json({ message: "Logged in successfully" });
//   }

//   return res.status(401).json({ message: "Invalid credentials" });
// }
