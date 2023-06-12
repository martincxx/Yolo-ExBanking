import { rest } from "msw";
import users from "./users";

export const handlers = [
    rest.post("/users", null),
    
    rest.get("/users", (req, res, ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(
                users
            )
        )
    }),

    rest.get("/users/:id", null),
    
]