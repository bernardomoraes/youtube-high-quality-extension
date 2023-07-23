chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const videoId = tab.url && new URL(tab.url).searchParams.get('v')
  if (changeInfo?.status != 'complete' || !tab?.url?.includes('youtube.com/watch') || !videoId) {
    return
  }
  chrome.tabs.sendMessage(tabId, {
    type: 'UPDATED',
    videoId,
  })
})
