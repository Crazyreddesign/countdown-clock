//---------------------------------------------------------------------------------
var CountDownTimer = function(date, updateFn) {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.expired = false;
    this.date = date;
    this.update = updateFn;
    this.init();
    this.tick();
}
    
CountDownTimer.prototype = {
    init: function() {
        var self = this;
        this.interval = window.setInterval(function() { self.tick(); }, 1000);
    },
    hasExpired: function() {
        return this.expired;
    },
    getDays: function() { return this.days; },
    getHours: function() { return this.hours; },
    getMinutes: function() { return this.minutes; },
    getSeconds: function() { return this.seconds; },
    tick: function() {
        var now = (new Date()).getTime();
        var end = this.date.getTime();
        var delta = Math.ceil((end - now)/1000);
    
        if (now >= end) {
            this.expired = true;
        } else {
            this.expired = false;
            this.days = Math.floor(delta/86400);
            delta = delta - 86400 * this.days;
            this.hours = Math.floor(delta/3600);
            delta = delta - 3600 * this.hours;
            this.minutes = Math.floor(delta/60);
            delta = delta - 60 * this.minutes;
            this.seconds = delta;
        }
    
        this.update();
    },
}
//---------------------------------------------------------------------------------

var timer = null;
    
var update = function() {
    // Make sure the timer is not null
    if (timer) {
        document.getElementById("days").innerText = timer.getDays();
        document.getElementById("hours").innerText = timer.getHours();
        document.getElementById("minutes").innerText = timer.getMinutes();
        document.getElementById("seconds").innerText = timer.getSeconds();
    }
};

  document.addEventListener('DOMContentLoaded', function() {
            timer = new CountDownTimer(new Date(2015,3,12,10,00,00), update);
        },false);
            
            window.addEventListener('load', function() {
            timer = new CountDownTimer(new Date(2015,3,12,10,00,00), update);
        },false);
