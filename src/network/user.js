import { request } from "./axios.js";

export function getFacPlayList(uid) {
  return request({
    url: "/user/playlist",
    params: {
      uid,
    },
  });
}
export function getFavorPlayList() {
    return request({
      url: "/recommend/resource",
    });
  }