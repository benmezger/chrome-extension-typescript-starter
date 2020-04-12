import 'bootstrap';
import './scss/popup.scss';

import {splitEmail, createEmailTag} from "./email";
import {IEmailAddress, IURL} from "./interfaces";

import * as clipboard from 'clipboard';


function writeEmailElement(text: string, elementId: string){
  const emailElem: HTMLElement = document.getElementById(elementId);
  setTimeout(() => {
    emailElem.textContent = text
  }, 10);
}
      

function setEmailElement(address: IEmailAddress, url: IURL){
  const userEmail: string[] = splitEmail(address).splice(1)
  url.sld = createEmailTag(url);
  writeEmailElement(url.sld + "@" + userEmail.join(""), "result");
}

function copyOnClick(){
  const clip = new clipboard("#result", {
    text: function (trigger){
      return trigger.textContent;
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, tabs => {
    const host = {url: new URL(tabs[0].url).host, sld: null};

    chrome.storage.sync.get(["email"], result => {
      if (result.email == ""){
        writeEmailElement("Missing email", "result");
      }
      else {
        setEmailElement({email: result.email, host: null}, host);
      }
    });
  });

  document.getElementById("btn-result").addEventListener("click", copyOnClick);
});


