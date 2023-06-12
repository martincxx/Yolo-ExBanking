import { rest } from "msw";
import { users } from "./users.js";
import { BASE_URL } from "../api/bank.js"
import { createUserAccount } from "./util.js";

const allUsers = users;

export const handlers = [
  
  rest.post(`${BASE_URL}/users`, async (req, res, ctx) => {
    const { ci } = await req.json();
    const user = allUsers.flatMap((user) => (user.ci == ci ? user : []));
    if (user.length==1){
      return res(ctx.status(409), ctx.json({ "Error": `User ${ci} already exists` }));
    } else {
    const newUser = createUserAccount(JSON.parse(req.body));
    allUsers.push(newUser);
    return res(ctx.status(201));
    }
  }),

  rest.get(`${BASE_URL}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: allUsers }));
  }),

  rest.get(`${BASE_URL}/users/:userci`, (req, res, ctx)=>{
    const {userci} = req.params
    const user = allUsers.flatMap(user => user.ci == userci ? user: [])
    
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