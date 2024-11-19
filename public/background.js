// 팝업 버튼 클릭 시 새로운 창을 열어 landing.html과 ChatGPT 탭을 띄움
// 활성화된 탭의 정보를 바탕으로 사이드 패널을 열고 관리함

// 전역 변수 선언
let homeAndGptWindow = null; // 생성된 "홈페이지 및 ChatGPT" 윈도우를 저장
let currentWindowId = null; // 현재 활성화된 윈도우의 ID
let currentTabId = null; // 현재 활성화된 탭의 ID
let landingTabId = null; // landing.html 탭의 ID
let gptTabId = null; // ChatGPT 탭의 ID
let gptTab = null; // ChatGPT 탭 객체

// 현재 활성화된 탭과 윈도우 정보를 설정하는 함수
function setActiveTabAndWindow(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const currentTab = tabs[0]; // 활성화된 첫 번째 탭 선택
      currentTabId = currentTab.id; // 활성화된 탭의 ID 저장
      currentWindowId = currentTab.windowId; // 활성화된 윈도우의 ID 저장
      callback();
    } else {
      console.log("활성화된 탭을 찾을 수 없습니다.");
    }
  });
}

// 사이드 패널을 열고 설정하는 함수
function openSidePanel() {
  chrome.sidePanel.setOptions({ enabled: true, tabId: currentTabId });
  chrome.sidePanel.open({ windowId: currentWindowId });
}

// 새로운 ChatGPT 및 landing.html 윈도우를 생성하는 함수
async function createHomeAndGptWindow() {
  homeAndGptWindow = await chrome.windows.create({
    url: ["landing.html", "https://chat.openai.com"],
    type: "normal",
    width: 1200,
    height: 800,
    focused: false, // 포커스가 옮겨지지 않도록 설정
  });

  // 각 탭의 ID 저장
  landingTabId = homeAndGptWindow.tabs[0].id;
  gptTabId = homeAndGptWindow.tabs[1].id;
  gptTab = homeAndGptWindow.tabs[1];

  console.log("Open chatgpt tab and landing.html tab to squeeze!");
}

// ChatGPT 탭을 생성하는 함수
async function createGptTab() {
  gptTab = await chrome.tabs.create({
    url: "https://chat.openai.com",
    windowId: homeAndGptWindow.id,
  });
  gptTabId = gptTab.id;
}

function extractHtml() {
  let extractedContent = "";

  // 핵심 태그만 추출
  const title = document.querySelector("title")
    ? document.querySelector("title").innerText
    : "";
  const h1 = document.querySelector("h1")
    ? document.querySelector("h1").innerText
    : "";
  const h2 = document.querySelector("h2")
    ? document.querySelector("h2").innerText
    : "";
  const metaDescription = document.querySelector("meta[name='description']")
    ? document.querySelector("meta[name='description']").getAttribute("content")
    : "";

  // p와 li 태그는 최대 5개씩만 추출
  const pTags = Array.from(document.querySelectorAll("p"))
    .slice(0, 30)
    .map((el) => el.innerText);

  // 최종 콘텐츠 조합
  const contentArray = [title, h1, h2, metaDescription, ...pTags];
  const finalContent = contentArray.join("\n");

  return finalContent;
}

// 팝업의 버튼이 눌렸을 때의 preview.jsx/onSqueeze()의 메시지를 수신하기 위한 이벤트 리스너 등록
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSqueeze") {
    (async function () {
      try {
        await fetch(`http://13.124.143.64/api/squeeze/${request.payload.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token 57fdf5d9b6c6c2e959f6dee73e0db162d1bc065c",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            sendResponse({ success: true, data: data });
          })
          .catch((error) => {
            sendResponse({ success: false, error: error.message });
          });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    })();
    return true;
  }
  if (request.action === "getEezy") {
    (async function () {
      try {
        await fetch(`http://13.124.143.64/api/eezy/${request.payload.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token 57fdf5d9b6c6c2e959f6dee73e0db162d1bc065c",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            sendResponse({ success: true, data: data });
          })
          .catch((error) => {
            sendResponse({ success: false, error: error.message });
          });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    })();
    return true;
  }
  if (request.action === "profile") {
    (async function () {
      try {
        await fetch("http://13.124.143.64/api/users/profile/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token 57fdf5d9b6c6c2e959f6dee73e0db162d1bc065c",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            sendResponse({ success: true, data: data });
          })
          .catch((error) => {
            sendResponse({ success: false, error: error.message });
          });
      } catch (e) {
        sendResponse({ success: false, error: e.message });
      }
    })();
    return true;
  }
  if (request.action === "squeezing") {
    (async function () {
      try {
        await fetch("http://13.124.143.64/api/squeeze/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token 57fdf5d9b6c6c2e959f6dee73e0db162d1bc065c",
          },
          body: JSON.stringify({
            tabs: request.payload.tabs,
            image: request.payload.image,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            sendResponse({ success: true, data: data });
          })
          .catch((error) => {
            sendResponse({ success: false, error: error.message });
          });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    })();

    return true;
  }
  if (request.action === "preview") {
    (async function () {
      try {
        await previewTab((previews) => {
          sendResponse(previews);
        });
      } catch (error) {
        sendResponse({});
      }
    })();
    return true;
  }

  if (request.action === "open_sidepanel") {
    try {
      if (request.type) {
        chrome.storage.local.set({ type: request.type });
      }
      currentTab = request.tab;
      chrome.sidePanel.open({ tabId: currentTab.id }); // 사이드바 열기
      sendResponse({ success: true });
      return true; // 성공적으로 사이드 패널을 열었음을 응답
    } catch (error) {
      console.error("Error in open_sidepanel:", error);
      sendResponse({ success: false, error: error.message });
    }
  } else if (request.action === "eezy") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: extractHtml,
          },
          (results) => {
            if (results && results[0]) {
              const extractedContent = results[0].result;

              // Send the extracted content to the API
              fetch("http://13.124.143.64/api/eezy/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Token 57fdf5d9b6c6c2e959f6dee73e0db162d1bc065c",
                },
                body: JSON.stringify({
                  title: tabs[0].title,
                  url: tabs[0].url,
                  script: extractedContent,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  sendResponse({ response: data });
                })
                .catch((error) => {
                  console.error("Error sending data to API:", error);
                  sendResponse({ response: "error" });
                });
            } else {
              console.log("No results from script execution.");
              sendResponse({ response: "no results" });
            }
          }
        );
      } else {
        console.log("활성화된 탭을 찾을 수 없습니다.");
        sendResponse({ response: "no active tab" });
      }
    });
    return true; // 비동기 응답을 허용
  }
  return true;
});

// 현재 탭 상황에서 변화가 생기면 바로 반영해서 TabList 업데이트
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.runtime.sendMessage({ action: "update" });
});

chrome.tabs.onCreated.addListener(() => {
  chrome.runtime.sendMessage({ action: "update" });
});

chrome.tabs.onRemoved.addListener(() => {
  chrome.runtime.sendMessage({ action: "update" });
});

function previewTab(callback) {
  const previews = {
    tabs: [],
    capturedImage: "",
  };
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab, index) => {
      if (index > 0 && index != tab.index) return; // 현재 탭만 허용
      previews.tabs.push({
        title: tab.title,
        url: tab.url,
        favicon: tab.favIconUrl,
      });
    });

    chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
      if (dataUrl) {
        previews.capturedImage = dataUrl;
        callback(previews);
      } else {
        captureTab(previews, 0, tabs, callback); // 캡처 실패 시 모든 탭 재귀형 캡처
      }
    }); // 현재 탭 캡쳐
  });
}

function captureTab(previews, index, tabs, callback) {
  if (index >= tabs.length) {
    callback(previews);
    return;
  }

  const tab = tabs[index];
  chrome.tabs.update(tab.id, { active: true }, () => {
    setTimeout(() => {
      chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
        if (dataUrl) {
          previews.capturedImage = dataUrl; // 캡처 성공
          callback(previews);
        } else {
          captureTab(previews, index + 1, tabs, callback);
        }
      });
    }, 700); // 1초 대기 후 캡처 시도
  });
}
