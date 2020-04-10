export function splitEmail(email: string): string[]{
  return email.split("@");
}

document.addEventListener("DOMContentLoaded", function() {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, tabs => {
    var url = new URL(tabs[0].url);
    chrome.storage.sync.get(["email"], result => {
      const userEmail = splitEmail(result.email).splice(1)
      var emailElem = document.getElementById('email');
      setTimeout(function () {
          emailElem.textContent = url.host + "@" + userEmail.join("");
      }, 750);
    });
  });
});

