from fastapi import FastAPI, HTTPException
from models import Todo
from database import fetch_one_todo, fetch_all_todos, create_todo, update_todo, remove_todo
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    # "https://localhost:3000",
    # "http://localhost:3000/"
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"hellow": "m"}


@app.get("/api/todo")
async def get_todo():
    response = await fetch_all_todos()
    return response


@app.get("/api/todo/{title}", response_model=Todo)
async def get_todo_by_title(title):
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, "There is no ToDo with the Title->" + title)


@app.post("/api/todo/", response_model=Todo)
async def post_todo(todo: Todo):
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.put("/api/todo/{title}/", response_model=Todo)
async def put_todo(title: str, description: str):
    response = await update_todo(title, description)
    if response:
        return response
    raise HTTPException(404, "There is no ToDo with the Title->" + title)


@app.delete("/api/todo/{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return "Successfully Deleted Todo"
    raise HTTPException(404, "There is no ToDo with the Title->" + title)
