var onOff = true;

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('clickIt');
  var theWow = document.getElementById('theWow');
  checkPageButton.addEventListener('click', function() {
  
    onOff = !onOff
    if (onOff == false) {
      checkPageButton.style.backgroundColor = 'red';
      checkPageButton.style.borderColor = 'red';
      checkPageButton.innerHTML = 'Disabled';
      theWow.innerHTML = 'Click down below to enable blocking';
    } else {
      checkPageButton.style.backgroundColor = 'green';
      checkPageButton.style.borderColor = 'green';
      checkPageButton.innerHTML = 'Enabled';
      theWow.innerHTML = 'Click down below to disable blocking';
    }

    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.reload()
    });
  }, false);
}, false);


//:gay people