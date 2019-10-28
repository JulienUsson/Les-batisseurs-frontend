import Axios from "axios";

export const DEFAULT_BACKEND_URL = "http://localhost:3000";

export function setBackendUrl(backendUrl) {
  localStorage.setItem("backend-url", backendUrl);
}

export function getBackendUrl() {
  return localStorage.getItem("backend-url") || DEFAULT_BACKEND_URL;
}

export async function getHealth() {
  try {
    const { status, data } = await Axios.get(`${getBackendUrl()}/health`);
    return status === 200 && data.health && data.health === "ok";
  } catch (e) {
    return false;
  }
}

export function findAllInProgressGame() {
  return Axios.get(`${getBackendUrl()}/games`, { done: true });
}

export function createGame(newGame) {
  return Axios.post(`${getBackendUrl()}/games`, newGame);
}
