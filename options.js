const autoCorrectToggle = document.getElementById('autoCorrectToggle');
const statusMessage = document.getElementById('statusMessage');

function loadSettings() {
  chrome.storage.sync.get(['autoCorrectEnabled'], (result) => {
    if (result.autoCorrectEnabled !== undefined) {
      autoCorrectToggle.checked = result.autoCorrectEnabled;
    }
  });
}

function saveSettings() {
  const settings = {
    autoCorrectEnabled: autoCorrectToggle.checked
  };

  chrome.storage.sync.set(settings, () => {
    showStatusMessage();
  });
}

function showStatusMessage() {
  statusMessage.classList.add('show');
  
  setTimeout(() => {
    statusMessage.classList.remove('show');
  }, 2000);
}

function init() {
  loadSettings();

  autoCorrectToggle.addEventListener('change', saveSettings);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
