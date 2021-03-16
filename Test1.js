'use strict';
var Audios = /** @class */ (function () {
    function Audios(name) {
        this.params = new Audio();
        this.params.src = name;
    }
    Audios.prototype.start = function () {
        this.params.play();
    };
    Audios.prototype.stop = function () {
        this.params.pause();
    };
    Audios.prototype.up = function () {
        this.params.volume += 0.1;
    };
    Audios.prototype.down = function () {
        this.params.volume -= 0.1;
    };
    Audios.prototype.loop = function () {
        var bool = !this.params.loop;
        this.params.loop = bool;
        if(bool){
            document.getElementById('loop').innerHTML = "loop on";
        }else{
            document.getElementById('loop').innerHTML = "loop off";
        }
    };
    return Audios;
}());
const audios = new Audios("よいまちカンターレ.mp3");
/** 
function start(){
    audios.start();
}
function stop(){
    audios.stop()
}*/