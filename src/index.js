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
console.log(newTask)
      return schema.db.tasks.insert(newTask);
    });


    this.patch("/update/:id", function (schema, request) {
      let id = request.params.id
      const newObj = JSON.parse(request.requestBody)

      return schema.db.tasks.update(id, newObj)

    })


    this.get("/movies", () => {
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
