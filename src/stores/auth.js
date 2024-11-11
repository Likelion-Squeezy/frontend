import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: localStorageEffect } = recoilPersist({
  key: "squeezy",
  storage: chrome.storage.local,
});

export const authInfoState = atom({
  key: "auth-info",
  default: null,
}); // 로그인 정보

export const authTokenState = atom({
  key: "auth-token",
  default: null,
  effects_UNSTABLE: [localStorageEffect], // 새로고침 시에도 유지되도록 설정
}); // 토큰 정보

export const isLoggedState = atom({
  key: "isLoggedState",
  default: chrome.storage.local.get("user-token", (data) => {
    return data.accessToken ? true : false;
  }), // token 유무에 따라 true, false 반환
}); // 로그인 여부
