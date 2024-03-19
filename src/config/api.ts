import axios from "axios";
import { baseURL } from "../utils/constants/index";

export const $api = axios.create({
  baseURL,
});
