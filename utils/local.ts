import dotenv from 'dotenv';
dotenv.config();

const test_token = () => {return process.env.USER_TOKEN};
const test_url_get_user = () => {return process.env.GET_USER_URL};

export { test_token, test_url_get_user };