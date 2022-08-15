import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model, JSONAPISerializer, Response } from "miragejs"
import 'bootstrap/dist/css/bootstrap.css';

createServer({
  models: {
    users: Model,
    tasks: Model,
    create: Model,
    newTask: Model,


  },
  serializers: {
    application: JSONAPISerializer,
  },

  seeds(server) {
    server.db.loadData({

      tasks: [

      ],
      users:[
        { id: 1, Name: "Cica", email: "ccica_25@hotmail.com", password: "123"},
      ]

    })

  },

  routes() {
    this.namespace = 'api'

    this.get('/taskList', (schema, request) => {
      console.log(schema.db.tasks)
      return schema.db.tasks
    })


    //Responding to Post request
    this.post("/create", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      let newId;

      if (schema.db.tasks[0] === undefined) {
        newId = 1
      } else{
        newId = Number(schema.db.tasks[schema.db.tasks.length - 1].id) + 1
      }
      const newTask = {
        ...attrs,
        id: newId
      }
      console.log(newTask)
      return schema.db.tasks.insert(newTask);
    });


    this.patch("/update/:id", function (schema, request) {
      let id = request.params.id
      const newObj = JSON.parse(request.requestBody)

      return schema.db.tasks.update(id, newObj)

    })


    this.del('/delete/:id', (schema, request) => {
      let id = request.params.id
      schema.db.tasks.remove(id)
      console.log(schema.db.tasks.find(id))
      return "Item removido"
    })


    this.post("/users", (schema, request) => {

      const user = schema.db.users.findBy({email:JSON.parse(request.requestBody).email})
      if(!user){
        return new Response(400, { some: 'header' }, { errors: [ 'Usuario não existe'] });
        
      }
      
      if(user.password !== JSON.parse(request.requestBody).password){
        return new Response(400, { some: 'header' }, { errors: [ 'Logn ou senha invalida'] });
      }

      return {message:'Login com sucesso!', users: user.Name}

    })
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

);
