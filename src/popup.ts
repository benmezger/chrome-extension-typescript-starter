import * as psl from 'psl';

export function splitEmail(email: string): string[]{
  return email.split("@");

}

document.addEventListener("DOMContentLoaded", function () {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, tabs => {
    const url = new URL(tabs[0].url);
    chrome.storage.sync.get(["email"], result => {
      const userEmail: string[] = splitEmail(result.email).splice(1)
      const emailElem: HTMLElement = document.getElementById('email');
      setTimeout(function () {
        const tag: psl.ParsedDomain | psl.ParseError = psl.parse(url.host);
        if (tag.error){
            console.log(tag.error);
            emailElem.textContent = "undefined";
        }
        else {
            emailElem.textContent = tag['sld'] + "@" + userEmail.join("");
        }
      }, 750);
    });
  });
});

