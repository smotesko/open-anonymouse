function oaOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.create({
    "url": "http://anonymouse.org/cgi-bin/anon-www.cgi/"+info.linkUrl
  });
}

chrome.contextMenus.create({
  "title": "Open anonymouse",
  "contexts": ["link"],
  "onclick": oaOnClick
});
