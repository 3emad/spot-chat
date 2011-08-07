chrome.extension.sendRequest(null, function(response) {
  loaded = true;
  console.log(response.name);
});