from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Welcome to the Chamber.fm AI server!"}

@app.get("/status")
def status():
    return {"message": "Chamber.fm AI server is running."}
