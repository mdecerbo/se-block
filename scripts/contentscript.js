'use strict';

var classes = [
                'community-bulletin',         // Block the community bulletin block.
                'everyonelovesstackoverflow'  // Block the ads for Stack Overflow
                                              // Careers, despite the fact it got me
                                              // my last job.
                                              // #commentasconfession
              ];

var ids = [
            'hot-network-questions',  // Block the hot network questions linkbait --
                                      // I probably find these so distracting
                                      // because I am weak of mind.
                                      // #commentasconfession
            'chat-feature',           // Block the chat box.
            'newsletter-ad',          // Take out the newsletter ad --
                                      // Inbox zero for life!
            'hireme'                  // Block the ads for Stack Overflow
                                      // Careers, despite the fact it got me
                                      // my last job.
                                      // #commentasconfession
          ];

classes.forEach(function(aClass){
  if ( document.getElementsByClassName(aClass) !== null ){
    var aClasses = document.getElementsByClassName(aClass);
    for ( var i = aClasses.length - 1; 0 <= i; i-- ){
      aClasses[i].remove();
    }
  }  
});

ids.forEach(function(anId){
  if ( document.getElementById(anId) !== null ){
      var thisId = document.getElementById(anId);
      thisId.remove();
  }
});