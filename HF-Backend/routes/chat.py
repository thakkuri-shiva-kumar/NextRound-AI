from fastapi import APIRouter
from services.groq_services import ask_groq
from prompts.system_prompt import SYSTEM_PROMPT

router = APIRouter()

@router.post("/chat")
async def chat(data: dict):

    message = data.get("message")

    answer = ask_groq(
        message,
        SYSTEM_PROMPT
    )

    return {
        "response": answer
    }