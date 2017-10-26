import axios from 'axios';
export const googleAPIKey = 'AIzaSyBuinFicS4HAGfIKW6rRutGFP9GWcReUn4';
export async function reverseGeo(lat: number, lng: number) {
  const result = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleAPIKey}`
  );
  if (result && result.data) {
    return result.data;
  }
  return null;
} 
const translations = {
  en: require('./Translate/en.json'),
  vn: require('./Translate/vn.json')
};
export const getTranslation = (lang: 'en' | 'vn', text: string, type?: 'text' | 'date' | 'currency') => {
  const translateText = translations[lang][text];
  return translateText || text;
};