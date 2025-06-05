import os
import requests

PIAPI_KEY = os.environ["PIAPI_KEY"]


def generate_video(prompt: str, personagem: str, background: str, audio: str) -> dict:
    """Generate a video with Kling using PIAPI."""
    url = "https://api.piapi.ai/kling/videogen"
    payload = {
        "model": "kling",
        "task_type": "video_generation",
        "input": {
            "prompt": prompt,
            "mode": "professional",
            "duration": 5,
            "image_url": personagem,
            "background_url": background,
            "audio_url": audio,
            "lip_sync": True,
        },
    }
    headers = {"x-api-key": PIAPI_KEY}

    response = requests.post(url, json=payload, headers=headers, timeout=30)
    response.raise_for_status()
    return response.json()
