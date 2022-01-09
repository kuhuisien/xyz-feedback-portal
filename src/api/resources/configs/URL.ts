// ==========================
// URLs Resource
//
// Contains the URLs to specific API endpoints.
//
// Depending on the environment this application is built from, the
// appropriate URLs are resolved into environment-specific configurations.
// ==========================

// Base URL for APIs
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// URL for feedback APIs
export const FEEDBACK_URL = `${API_BASE_URL}/feedbacks`;
