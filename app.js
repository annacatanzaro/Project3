// This function will run when the page is loaded
async function runTensorFlowDemo() {
const imgElement = document.getElementById('cat-image');
const predictionElement = document.getElementById('prediction');
try {
// Load the MobileNet model
console.log('Loading MobileNet model...');
const model = await mobilenet.load();
console.log('Model loaded successfully!');
// Classify the image
const predictions = await model.classify(imgElement);
console.log('Predictions:', predictions);
// Display the top prediction
const topPrediction = predictions[0];
predictionElement.textContent = `${topPrediction.className} (Probability:
${(topPrediction.probability * 100).toFixed(2)}%)`;
} catch (error) {
console.error('Error running TensorFlow demo:', error);
predictionElement.textContent = 'Failed to load or run model.';
}
}
// Run the demo
runTensorFlowDemo();
