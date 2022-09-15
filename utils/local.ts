import dotenv from 'dotenv';
dotenv.config();

const test_token = () => {return process.env.USER_TOKEN};
const get_api_url = () => {return process.env.API_URL};

export { test_token, get_api_url };