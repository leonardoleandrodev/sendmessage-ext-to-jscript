console.log("This prints to the console of the service worker (background script)")
chrome.runtime.onMessage.addListener((msgEnviar) => { 
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, msgEnviar, function(response) {
      console.log(response);
    });
  });
  return true;
});