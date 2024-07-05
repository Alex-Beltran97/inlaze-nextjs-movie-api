import axios from 'axios';

const instance = (URL: string) => axios.create({
    baseURL: URL,
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjNkYzdhOTBhZGM5OWY5MzU5NTVjNGI5NzZkNTVmNCIsIm5iZiI6MTcyMDEwOTY3Mi40OTAyODcsInN1YiI6IjY2ODZjOGIzZDY0YTIxMDQ2OTMzNGI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pzzLUEuoKUMepKvvCcv4eVefH1YbCKFOSHNU8EKKhco`,
      'Content-Type': "application/json"
    }
  });


export default instance;