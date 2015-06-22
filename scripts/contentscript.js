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

// Take out the newsletter ad
// Inbox zero for life!
if ( document.getElementById('newsletter-ad') !== null ){
   var adMan = document.getElementById('newsletter-ad');
   adMan.remove();
}

// Block the ads for Stack Overflow careers, despite the
// fact it got me my last job
// #commentasconfession
if ( document.getElementsByClassName('everyonelovesstackoverflow') !== null ){
  var recruiters = document.getElementsByClassName('everyonelovesstackoverflow');
  for (var i = recruiters.length - 1; 0 <= i; i--){
    recruiters[i].remove();
  }
}

if ( document.getElementById('hireme') !== null ){
  var hire = document.getElementById('hireme');
  hire.remove();
}
