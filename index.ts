
import {Hono} from 'hono'
import user from './routes/user'

const app = new Hono();

app.get('/',(c)=>{
   return c.text("Hello , Bun + Hono!");
})

app.get('/api/hello',(c)=>{
  return c.json({message:"welcome to your First api"});
});

app.route('/users',user);
//console.log("Hello via Bun!");
export default app;
