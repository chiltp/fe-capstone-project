// api.js
export function submitAPI(formData) {
  // This is a mock implementation - replace with real API call
  console.log('Form data submitted:', formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true); // Simulate successful submission
    }, 1000);
  });
}