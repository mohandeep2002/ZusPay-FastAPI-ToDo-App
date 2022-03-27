# ZusPay-FastAPI-ToDo-App


## Back-end ```ZusPay-FastAPI-ToDo-App/todo/```
FastAPI ->(https://fastapi.tiangolo.com/)

 * GET Method route (http://localhost:8000) Default Root Method

 * GET Method route (http://localhost:8000/api/todo) Get All ToDos

 * GET Method route (http://localhost:8000/api/todo/{title}) Get Todo by Title

 * DELETE Method route (http://localhost:8000/api/todo/{title}) Deletes Todo by Title

 * POST Method route (http://localhost:8000/api/todo/) Creates New Todo

 * PUT Method route (http://localhost:8000/api/todo/{title}/) Updates Todo by Title
 
Running of Uvicorn server 
  * Navigate to todo folder 
  * Open CMD in todo folder 
  * To activate the virtual env ```.\venv\scripts\activate```
  * ```pip install -r requirements.txt```
  * ```uvicorn main:app --reload``` -> To Run the uvicorn Server
  * Open http://localhost:8000/docs to explore the fastapi GUI
    

## Front-end ```ZusPay-FastAPI-ToDo-App/todo-frontend/fastapi-front/```
  * Navigate to the ZusPay-FastAPI-ToDo-App/todo-frontend/fastapi-front/ folder
  * Open CMD in ZusPay-FastAPI-ToDo-App/todo-frontend/fastapi-front/ foler
  * Run the command ```npm start```
  * Open http://localhost:3000 to access the website


## Database ```MongoDB```
  * The FastAPI app is connected to MongoDB Atlas.
  * Data is storing at remote location.

