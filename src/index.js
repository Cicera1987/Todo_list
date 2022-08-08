import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model, JSONAPISerializer } from "miragejs"
import 'bootstrap/dist/css/bootstrap.css';


createServer({
  models: {
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
        { id: 1, Name: "teste", Description: "Ola", State: "Pendente" },
        { id: 2, Name: "teste", Description: "Ola", State: "Pendente" },
        { id: 3, Name: "teste", Description: "Ola", State: "Pendente" }
      ],

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
      let newId = Number(schema.db.tasks[schema.db.tasks.length - 1].id) + 1

      if (schema.db.tasks[0] === undefined) {
        newId = 1
      }
      const newTask = {
        ...attrs,
        id: newId
      }

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


    this.post("/movies", () => {
      return {
        movies: [
          { email: "ccica_25@hotmail.com", password: "123" },
        ],
      }
    })
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
