import {validateEmail} from "./email";

import * as $ from 'jquery';

function setStatus(msg: string){
  const status = document.getElementById('status');
  status.textContent = msg;
  setTimeout(function() {
      status.textContent = '';
  }, 750);
}

// Saves options to chrome.storage.sync.
function save_options() {
  const email = $('#email').val().toString();
  if (!validateEmail(email)){
    setStatus("Please enter your email.");
  }
  else {
    chrome.storage.sync.set({
        email: email
    }, function(){
      setStatus("option saved.");
    });
  }
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    email: null,
  }, function(items: {email: string}) {
    $('#email').val(items.email);
  });
}

$('#save').click(save_options);
$(restore_options);

