import motor.motor_asyncio
from models import Todo
import urllib.parse

client = motor.motor_asyncio.AsyncIOMotorClient(
    'mongodb+srv://' + urllib.parse.quote('todoapp') + ':' + urllib.parse.quote(
        'Mohandeep@2002') + '@cluster0.g3fyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
database = client.TodoList
collection = database.todo


async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document


async def fetch_all_todos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos


async def create_todo(todo):
    document = todo
    await collection.insert_one(document)
    return document


async def update_todo(title, description):
    await collection.update_one({"title": title}, {"$set": {"description": description}})
    document = await collection.find_one({"title": title})
    return document


async def remove_todo(title):
    await collection.delete_one({"title": title})
    return True