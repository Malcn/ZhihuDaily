import * as types from './mutation-types'

export const addnews = ({commit}, news) => {
    commit(types.ADD_NEWS, { news })
}

export const setthemes = ({commit}, themes) => {
    commit(types.SET_THEMES, themes)
}