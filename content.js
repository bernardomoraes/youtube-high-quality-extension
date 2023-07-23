
chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
  if (message.type === 'UPDATED') {
    try {
      let settingsButton = document.querySelector('button.ytp-settings-button')
      if (!settingsButton) throw new Error('Settings button not found')
      settingsButton.click()
      let qualitySettingsButton = document.querySelector('.ytp-menuitem:last-child')
      if (!qualitySettingsButton) throw new Error('Quality settings button not found')
      qualitySettingsButton.click()
      let qualityOption = document.querySelector(
        '.ytp-quality-menu .ytp-panel-menu .ytp-menuitem:first-child',
      )
      qualityOption.click()
    } catch (error) {
      console.error(error)
    }
  }
})