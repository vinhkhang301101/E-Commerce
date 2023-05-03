import { message } from "antd";

export const handleError = (err) => {
  console.log(err);
  if (err.response?.data?.message) {
    message.error(err.response.data.message);
  }
}