var checkPageButton = document.getElementById('clickIt');
var theWow = document.getElementById('theWow');

function getSwitch() {
  chrome.storage.local.get(['mySwitch'], result => {
    checkPageButton.style.backgroundColor = result.mySwitch ? "green" : "red";
    checkPageButton.style.borderColor = result.mySwitch ? "green" : "red";
    checkPageButton.innerHTML = result.mySwitch ? "Enabled" : "Disabled";
    theWow.innerHTML = result.mySwitch ? "Click down below to disable blocking": "Click down below to enable blocking";
  });
}

getSwitch();

document.addEventListener('DOMContentLoaded', function() {
  checkPageButton.addEventListener('click', function() {

    chrome.storage.local.get(['mySwitch'], result => {
      let changeSwitch = !result.mySwitch;
      if (changeSwitch == false) {
        chrome.storage.local.set({mySwitch: false}, () => {
          getSwitch();
        });
      } else {
        chrome.storage.local.set({mySwitch: true}, () => {
          getSwitch();
      });
    }});

  
  }, false);
}, false);
