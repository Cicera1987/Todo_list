import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer} from "miragejs"
import  'bootstrap/dist/css/bootstrap.css' ;


createServer({
    routes() {
      this.namespace = "api"

      //Responding to Post request
          this.post('/movies', (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            attrs.id = Math.floor(Math.random() *100) 
          
              return {movie: attrs}
          })

          this.get('/taskList', () => {
              return {
                taskList:[
                  {model:'', taskList:''}
                ]
              }
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
