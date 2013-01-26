function oaOnClick(info, tab) {
  chrome.tabs.create({
    "url": "http://anonymouse.org/cgi-bin/anon-www.cgi/"+info.linkUrl
  });
}

chrome.contextMenus.create({
  "title": "Open anonymouse",
  "contexts": ["link"],
  "onclick": oaOnClick
});
