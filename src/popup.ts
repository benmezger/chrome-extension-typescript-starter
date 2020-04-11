import * as clipboard from 'clipboard';
import {splitEmail, createEmailTag} from "./email";
import {IEmailAddress, IURL} from "./interfaces";

function setEmailElement(address: IEmailAddress, url: IURL){
  const userEmail: string[] = splitEmail(address).splice(1)
  const emailElem: HTMLElement = document.getElementById('email');
  url.sld = createEmailTag(url);

  setTimeout(() => {
    emailElem.setAttribute('value',url.sld + "@" + userEmail.join(""));
  }, 250);
}
  

document.addEventListener("DOMContentLoaded", function () {
  new clipboard('.btn');
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, tabs => {
    const host = {url: new URL(tabs[0].url).host, sld: null};

    chrome.storage.sync.get(["email"], result => {
      setEmailElement({email: result.email, host: null}, host);
    });
  });
});
