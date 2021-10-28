import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID XCss92aotcKNtwuypa49mjTpgAZr9gV1agE74UjbogE'
  }
}); 