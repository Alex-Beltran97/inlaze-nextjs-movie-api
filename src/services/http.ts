import axios from 'axios';

const instance = (URL: string) => axios.create({
    baseURL: URL,
    headers: {
      'Authorization': `Bearer ${ process.env.MOVIES_TOKEN }`,
      'Content-Type': "application/json"
    }
  });


export default instance;