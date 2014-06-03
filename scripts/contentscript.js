'use strict';

// Block the community bulletin block
if ( document.getElementsByClassName('community-bulletin').length > 0 ){
    var commieBulletin = document.getElementsByClassName('community-bulletin')[0];
    commieBulletin.remove();
}

// Block the hot network questions linkbait
// I probably find these so distracting because I am weak of mind 
// #commentasconfession
if ( document.getElementById('hot-network-questions') !== null ){
    var buzzfeed = document.getElementById('hot-network-questions');
    buzzfeed.remove();
}

// Block the chat box
if ( document.getElementById('chat-feature') !== null ){
    var chatty = document.getElementById('chat-feature');
    chatty.remove();
}
