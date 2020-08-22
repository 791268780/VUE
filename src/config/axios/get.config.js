let axios_get_config = {
    baseURL:'/api',
    // timeout: 3000,
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
      }],
}

export default axios_get_config;