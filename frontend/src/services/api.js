import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Location services
export const searchLocations = async (query, limit = 10, offset = 0) => {
  try {
    const response = await api.get('/locations/search', {
      params: { query, limit, offset }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching locations:', error);
    throw error;
  }
};

export const getLocationById = async (locationId) => {
  try {
    const response = await api.get(`/locations/${locationId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting location:', error);
    throw error;
  }
};

export const getLocationsByRegion = async (region, limit = 100) => {
  try {
    const response = await api.get(`/locations/region/${region}`, {
      params: { limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting locations by region:', error);
    throw error;
  }
};

export const createLocation = async (locationData) => {
  try {
    const response = await api.post('/locations', locationData);
    return response.data;
  } catch (error) {
    console.error('Error creating location:', error);
    throw error;
  }
};

// Bookmark services
export const getBookmarks = async (limit = 100) => {
  try {
    const response = await api.get('/bookmarks', {
      params: { limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    throw error;
  }
};

export const getBookmarksByCategory = async (category) => {
  try {
    const response = await api.get(`/bookmarks/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error getting bookmarks by category:', error);
    throw error;
  }
};

export const createBookmark = async (bookmarkData) => {
  try {
    const response = await api.post('/bookmarks', bookmarkData);
    return response.data;
  } catch (error) {
    console.error('Error creating bookmark:', error);
    throw error;
  }
};

export const deleteBookmark = async (bookmarkId) => {
  try {
    const response = await api.delete(`/bookmarks/${bookmarkId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting bookmark:', error);
    throw error;
  }
};

// Route services
export const calculateRoute = async (routeRequest) => {
  try {
    const response = await api.post('/routes/calculate', routeRequest);
    return response.data;
  } catch (error) {
    console.error('Error calculating route:', error);
    throw error;
  }
};

export const getRoute = async (routeId) => {
  try {
    const response = await api.get(`/routes/${routeId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting route:', error);
    throw error;
  }
};

// Offline area services
export const getOfflineAreas = async (limit = 100) => {
  try {
    const response = await api.get('/offline-areas', {
      params: { limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting offline areas:', error);
    throw error;
  }
};

export const getOfflineAreasByRegion = async (region) => {
  try {
    const response = await api.get(`/offline-areas/region/${region}`);
    return response.data;
  } catch (error) {
    console.error('Error getting offline areas by region:', error);
    throw error;
  }
};

export const createOfflineArea = async (areaData) => {
  try {
    const response = await api.post('/offline-areas', areaData);
    return response.data;
  } catch (error) {
    console.error('Error creating offline area:', error);
    throw error;
  }
};

export const downloadOfflineArea = async (areaId) => {
  try {
    const response = await api.post(`/offline-areas/${areaId}/download`);
    return response.data;
  } catch (error) {
    console.error('Error downloading offline area:', error);
    throw error;
  }
};

export const deleteOfflineArea = async (areaId) => {
  try {
    const response = await api.delete(`/offline-areas/${areaId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting offline area:', error);
    throw error;
  }
};

// POI services
export const searchPOIs = async (query, poiType, region, city, limit = 10, offset = 0) => {
  try {
    const params = { limit, offset };
    if (query) params.query = query;
    if (poiType) params.poi_type = poiType;
    if (region) params.region = region;
    if (city) params.city = city;

    const response = await api.get('/pois/search', { params });
    return response.data;
  } catch (error) {
    console.error('Error searching POIs:', error);
    throw error;
  }
};

export const getPOIsByType = async (poiType, limit = 50) => {
  try {
    const response = await api.get(`/pois/type/${poiType}`, {
      params: { limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting POIs by type:', error);
    throw error;
  }
};

export const createPOI = async (poiData) => {
  try {
    const response = await api.post('/pois', poiData);
    return response.data;
  } catch (error) {
    console.error('Error creating POI:', error);
    throw error;
  }
};

// Helper functions
export const testConnection = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error testing connection:', error);
    throw error;
  }
};

export default api;