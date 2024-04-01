const axios = require('axios');
const MY_Token = '6531915487:AAHiPTAfly3Fm3aC6nPiVCfdAn2xjp5Jzjg';

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