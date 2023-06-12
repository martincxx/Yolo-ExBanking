import { rest } from "msw";
import {users} from "./users.js";
import { BASE_URL} from "../api/bank.js"

export const handlers = [
  
  rest.post(`${BASE_URL}/users`, (req, res, ctx) => {
    const user = req.body;
    let allUsers = users;
    allUsers.push(user);

    return res(ctx.status(201));
  }),

  rest.get(`${BASE_URL}/users`, (req, res, ctx) => {
    let allUsers = users;
    return res(ctx.status(200), ctx.json({ data: allUsers }));
  }),

  rest.get(`${BASE_URL}/users/:userci`, (req, res, ctx)=>{
    const {userci} = req.params
    let allUsers = users;
    let user = allUsers.flatMap(user => user.ci == userci ? user: [])
    
    if (user.length ==1){
      return res(
        ctx.status(200),
        ctx.json(user[0])
      );
    } else {
        return res(
            ctx.status(404)
        )
    }
  }),
];