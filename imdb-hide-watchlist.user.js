// ==UserScript==
// @name        imdb-hide-watchlist
// @namespace   https://github.com/slavsan/greesemonkey-scripts
// @description Hides all titles which are in are marked as "in watchlist"
// @include     http://www.imdb.com/*
// @version     1
// @grant       none
// ==/UserScript==
setTimeout(function() {
    "use strict";

    var doc = document;
    var results = doc.querySelector('.results tbody');
    var all = results.children;
    var watched = [];
    var not_watched = [];
    var count = all.length;
    var element;
    var i;

    console.log('count: %i', count);

    for (i = 0; i < count; i += 1) {
        element = all[i];
        var text = element.querySelectorAll('.title > span > a > span:last-child');
        try {
            if (text[0].innerHTML === 'Watchlist') {
                watched.push(element);
            } else { 
                not_watched.push(element); 
            }  
            watched.forEach(function( el ) {
                el.style = 'display: none'; 
            }); 
        } catch (e) { 
            console.log('Error'); 
        } 
    } 

    console.log('%i watched titles', watched.length); 
}, 2000);
