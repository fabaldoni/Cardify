"use strict";

var context = (function () {

    var ctx = {

        cardSet:[
            {
                question: "What element has 1 valence electron ?",
                answer: "Hydrogen"
            },
            {
                question: "When was America discovered ?",
                answer: "1492"
            },
            {
                question: "Who was the first president of the United States",
                answer: "George Washington"
            },
            {
                question: "Who invented the asynchronous motor ?",
                answer: "Nicola Tesla"
            }
        ],

        currentIndex: 0,


        next: function () {
            if (this.currentIndex == this.cardSet.length - 1) {
                this.currentIndex = 0;
            }
            else {
                ++this.currentIndex;
            }

            return this.cardSet[this.currentIndex];
        },

        previous: function () {
            if (this.currentIndex == 0) {
                this.currentIndex = this.cardSet.length - 1;
            }
            else {
                --this.currentIndex;
            }

            return this.cardSet[this.currentIndex];
        },

        iterate: function (direction) {
            if (direction > 0) {
                return this.next();
            }
            else if (direction < 0) {
                return this.previous();
            }
        },

        count:function(){ return this.cardSet.length},

        currentItem:function(){ return this.cardSet[this.currentIndex]},

        currentView:function(){
            var currentView = {};
            currentView.question = this.currentItem().question;
            currentView.answer = this.currentItem().answer;
            currentView.footer =  (1 + this.currentIndex) + " of " + this.cardSet.length;
            return currentView;
        }

    }

    return ctx;

})();

