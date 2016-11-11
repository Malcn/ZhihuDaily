module.exports = {
    datetimef(value) {
        var t = new Date()
        var today = t.getFullYear() + (t.getMonth() + 1 + '') + t.getDate();
        let year = value.substr(0, 4)
        let month = parseInt(value.substr(4, 2)) - 1
        let day = value.substr(6, 2)
        var date = new Date(year, month, day)
        let index = date.getDay()
        let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][index]
        return today == value ? '今日热闻' : `${month}月${day}日 ${week}`
    }
}

