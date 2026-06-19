import axios from "axios";

const API_URL =
  "https://thakkurishivakumar-nextround-ai-backend.hf.space/chat";

export const sendMessage = async (message) => {
  const response = await axios.post(API_URL, {
    message,
  });

  return response.data;
};