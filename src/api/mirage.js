// import  'bootstrap/dist/css/bootstrap.css' ;
// import { Model, Server,Factory } from 'miragejs';
// import {createServer} from  "miragejs"

// createServer({

//     models: {
//         modal: Model,
//         description:Model,
//         taskName: Model,
//         taskList: Model,
//         user: Model,
//         Iniciar:Model,
//         sobre:Model,
//       },


//       seeds(server) {
//         server.db.loadData({
//         users:[
//             {email: "ccica_25@hotmail.com", password:"123"},
//           ],
//         })
//       },

//     routes() {
//         this.namespace = 'api'
//         // this.urlPrefix = 'http://localhost:3000'

//         this.get("/users", (schema) => {
//           console.log()
//             return {
//               users:[
//                 {email: "ccica_25@hotmail.com", password:"123"},
//               ],
//             }
//           })
      
//           this.post("/movies", (schema, request) => {
//             let attrs = JSON.parse(request.requestBody)
          
//             return schema.db.movies.insert(attrs)
//           })
//     },
//   })

//   // this.post("/api/taskList", (schema, request) => {
//   //   let attrs = JSON.parse(request.requestBody)
//   //   attrs.id = newId++

//   //   return { modal: attrs }
//   // })

//     this.get('/setTaskList', async (schema) => {
//       return {
//         setTaskList: (await schema.setTaskList.all()).models,
//       }
//     })

//     this.post('/setTaskList', async(schema,request) => {
//       const data = JSON.parse(request.requestBody)
//       return {
//         taskList: (await schema.setTaskList.create({name:data.taskList})).attrs
//       }
//     })


//     this.delete('/setTaskList', (schema, request) => {
//       const id = request.params.id

//       return schema.setTaskList.find(id).destroy()
//     })