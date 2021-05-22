import {request} from './axios'

export function getTags() {
    return request({
        url: '/playlist/hot',
    })
}

export function getTagsAbout(id) {
    return request({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}

export function getSearchSuggest(keywords) {
    return request({
        type: 'mobile',
        url: '/search/suggest',
        params: {
            keywords
        }
    })
}

export function getMusicUrl(id) {
    return request({
        type: 'mobile',
        url: '/song/url',
        params: {
            id
        }
    })
}

export function getAlbumImg(id) {
    return request({
        url:  '/album',
        params: {
            id
        }
    })
}

export function getLyrics(id) {
    return request({
        url: '/lyric',
        params: {
            id
        }
    })
}

export function getSearchKey(keywords) {
    return request({
        url: '/search/multimatch',
        params: {
            keywords
        }
    })
}