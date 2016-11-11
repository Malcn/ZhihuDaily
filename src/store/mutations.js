import * as types from './mutation-types'

export const state = {
    news: [],
    themes: []
}

export const mutations = {
    [types.ADD_NEWS](state, {news}) {
        state.news.push(news)
    },
    [types.SET_THEMES](state, themes) {
        state.themes = themes
    }
}