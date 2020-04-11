import * as $ from 'jquery';

// Saves options to chrome.storage.sync.
function save_options() {
    const email = $('#email').val();
    chrome.storage.sync.set({
        email: email
    }, function(){
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
          status.textContent = '';
      }, 750);
    });
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
$(restore_options); // document.addEventListener('DOMContentLoaded', restore_options);

