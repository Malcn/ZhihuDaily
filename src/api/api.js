//Zhihu http://localhost:3057/zhihu?host=news-at.zhihu.com&url=/api/4/news/latest
var config = {
    site: '127.0.0.1:3057',
    host: 'news-at.zhihu.com'
}

export const API_ROOT = 'http://'.concat(config.site, '/zhihu', '?host=', config.host, '&url=')
