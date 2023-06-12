import { rest } from "msw";
import {users} from "./users.js";
import { BASE_URL} from "../../api/bank.js"
export const handlers = [
    
    
    rest.post("/users", null),
    
    rest.get(`${BASE_URL}/users`, (req, res, ctx)=>{
        let allUsers = users;
        return res(
            ctx.status(200),
            ctx.json(
                {data:allUsers}
            )
        )
    }),

    rest.get("/users/:id", null),
    
]