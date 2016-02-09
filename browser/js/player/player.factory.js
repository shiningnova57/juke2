'use strict';

juke.factory('PlayerFactory', function($http){
  // non-UI logic in here
  var audio = document.createElement('audio');
  var playing = false;
  var currentSong =null;
  var currentList;
  	return {
  		playing: playing,
  		currentSong: currentSong,
  		currentList: currentList,
	  	start: function (song,songList) {
		    // stop existing audio (e.g. other song) in any case
		    this.pause();
		    playing = true;
		    // resume current song
		    if (song === currentSong) return audio.play();
		    // enable loading new song
		    currentSong = song;
		    currentList = songList;
		    audio.src = song.audioUrl;
		    audio.load();
		    audio.play();
		},
		pause: function () {
    		audio.pause();
    		playing = false;

  		},
  		resume: function() {
  			audio.play();
  			playing = true;
  		},
  		isPlaying: function() {
  			if (!playing) {
  				return false;
  			}
  			else {return true;}
  		},
  		getCurrentSong: function() {
  			if (currentSong) {
  				return currentSong;
  			}
  			return null;
  		},
  		next: function() {

  			var audioArray = currentList.map(function(each) {
  				return each.audioUrl;
  			})

  			var currentAudio = currentSong.audioUrl;
  			var nextSongIndex = audioArray.indexOf(currentAudio) + 1;
  			
  			if (nextSongIndex === (currentList.length)) {
  				return this.start(currentList[0]);
  			}
  			return this.start(currentList[nextSongIndex]);
  		},

  		previous:function(){
  			var audioArray = currentList.map(function(each) {
  				return each.audioUrl;
  			})

  			var currentAudio = currentSong.audioUrl;
  			var nextSongIndex = audioArray.indexOf(currentAudio) -1;

  			if(nextSongIndex < 0){
  				return this.start(currentList[currentList.length-1])
  			} 

  			return this.start(currentList[nextSongIndex]);

  		},

  		getProgress: function(){
  			if(!playing) return 0;
  			return audio.currentTime / audio.duration;
  		}
	};
});






