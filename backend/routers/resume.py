from fastapi import APIRouter
from data.resume_data import RESUME

router = APIRouter()

@router.get("/resume")
def get_resume():
    return RESUME