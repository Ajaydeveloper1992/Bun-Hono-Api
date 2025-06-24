import {Hono} from 'hono'
const user = new Hono()
user.get('/',(c)=>c.json({users:['Ajay','Ravi']}))
user.get('/:id',(c)=>{
    const id = c.req.param('id')
    return c.json({id,name:'user'+id})
})
export default user