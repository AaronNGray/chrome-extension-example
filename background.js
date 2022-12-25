chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'MenuOption',
    title: 'New Menu Option',
    contexts: ['action'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'MenuOption') {
    chrome.tabs.create({
      url: 'menuoption.html'
    });
  }
});
