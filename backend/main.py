from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import router
from workflows.scheduler import start_scheduler

app = FastAPI(title="TaskLoft API")

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(router)

# Start background workflow scheduler
start_scheduler()


@app.get("/")
def home():
    return {"message": "TaskLoft API Running"}