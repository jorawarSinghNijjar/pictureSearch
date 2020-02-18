import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 848f5a422de71e2a6ce593d874bb5f4d4f22fdbc841f821855da2a5bed97d778"
      }
});