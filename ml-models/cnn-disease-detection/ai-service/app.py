import json
import io
import numpy as np
import tensorflow as tf
import requests

from PIL import Image
from pydantic import BaseModel
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="FermTech AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = tf.keras.models.load_model("model.keras")

with open("class-labels.json", "r") as f:
    class_names = json.load(f)


class ImageUrlRequest(BaseModel):
    imageUrl: str


@app.get("/")
def root():
    return {
        "service": "FermTech AI",
        "status": "running"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()

    image = Image.open(
        io.BytesIO(contents)
    ).convert("RGB")

    image = image.resize((224, 224))

    arr = np.array(image, dtype=np.float32)
    arr = np.expand_dims(arr, axis=0)

    predictions = model.predict(arr, verbose=0)

    class_index = int(np.argmax(predictions))
    confidence = float(predictions[0][class_index])

    return {
        "disease": class_names[class_index],
        "confidence": round(confidence, 4),
        "model": "MobileNetV2"
    }





@app.post("/predict-url")
async def predict_url(data: ImageUrlRequest):

    response = requests.get(data.imageUrl)
    response.raise_for_status()

    image = Image.open(
        io.BytesIO(response.content)
    ).convert("RGB")

    image = image.resize((224, 224))

    arr = np.array(image, dtype=np.float32)
    arr = np.expand_dims(arr, axis=0)

    predictions = model.predict(arr, verbose=0)

    class_index = int(np.argmax(predictions))
    confidence = float(predictions[0][class_index])

    disease = class_names[class_index]

    return {
        "diagnosis": disease,
        "confidence": round(confidence, 2),
        "severity": "medium",
        "isMock": False,
        "treatment": [
            f"Detected disease: {disease}",
            "Remove infected leaves if symptoms are visible.",
            "Monitor crop regularly.",
            "Consult an agriculture expert if infection spreads."
        ]
    }