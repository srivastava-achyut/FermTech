import tensorflow as tf

model = tf.keras.models.load_model("model.keras")

test_ds = tf.keras.utils.image_dataset_from_directory(
    "Potato/Test",
    image_size=(224,224),
    batch_size=32,
    shuffle=False
)

loss, acc = model.evaluate(test_ds)

print("Test Accuracy:", acc)
print("Test Loss:", loss)