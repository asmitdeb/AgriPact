import axios from "axios";

const getBaseURL = () => {
  if (import.meta.env.PROD) {
    // Production URL
    return "https://project-backend-ji25.onrender.com/api/v1/";
  } else {
    // Development URL
    return "http://localhost:3000/api/v1/";
  }
};
const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

const offerSearchRoute = "search/offer";
const initOfferRoute = "search/all";
const createOfferRoute = "offer/create";
const negotiationRoute = "negotiation";
const profileRoute = "user/me";
const editProfileRoute = "user/edit";
const notificationsRoute = "myNotifications";

export {
  initOfferRoute,
  offerSearchRoute,
  createOfferRoute,
  negotiationRoute,
  profileRoute,
  editProfileRoute,
  notificationsRoute,
};

export default api;
