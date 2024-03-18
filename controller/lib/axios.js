const axios = require('axios');
const MY_Token = '7014791851:AAFPV7O_j-AeLxC4RMF7ftOlbuqJ45GS2qQ';

const BASE_URL = `https://api.telegram.org/bot${MY_Token}`;

function getAxiosInstance() {
      return {
            get(method, params) {
                  return axios.get(`/${method}`, {
                        baseURL: BASE_URL,
                        params,
                  })
            },
            post(method, data) {
                  return axios({
                        method: 'post',
                        baseURL: BASE_URL,
                        url: `${method}`,
                        data,
                  });
            }
      }
};
module.exports = { axiosInstance: getAxiosInstance() }