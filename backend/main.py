from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import resume

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://bootaeva.dev"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok"}

app.include_router(resume.router)