module.exports.MOCKAPI= {           // 声明服务名为MAPAPI
    // 请求协议与数据格式配置
    protocol: 'http',              // 使用http协议请求
    pack: 'querystring',           // 数据封装为query
    unpack: 'json',                // 约定服务端返回JSON数据
    encoding: 'utf-8',             // 服务器返回utf-8编码
    // 负载均衡与超时重试配置
    balance: 'roundrobin',         // 负载均衡策略
    timeout: 500,                  // 请求最长超时时间500ms
    retry: 1,                      // 请求重试次数
    // HTTP协议特有配置
    method: 'GET',                 // 使用GET请求
    query: {                       // 服务的全局query

    },
    //path: '/place/v2/search',      // API路径
    //path: '',      // API路径
    headers: {                     // 服务的全局headers
        'x-client': 'ral'
    },
    // 后端地址配置
    server: [                      // 可以配置多个后端地址
        {
            //host: 'api.map.baidu.com',
            host: 'rap.taobao.org', //淘宝rap测试数据接口
            port:80
        }
    ]
}