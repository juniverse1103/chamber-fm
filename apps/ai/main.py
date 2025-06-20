from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Chamber.fm AI server is running."}
