'use strict';

juke.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory) {

  // state
  $scope.currentSong = PlayerFactory.getCurrentSong();
  $scope.currentList = PlayerFactory.currentList;
  $scope.playing =  PlayerFactory.isPlaying;
  $scope.audio = PlayerFactory.audio;
  $scope.start = PlayerFactory.start;
  $scope.pause = PlayerFactory.pause;
  $scope.prev = PlayerFactory.previous;
  $scope.next = PlayerFactory.next;
  $scope.resume = PlayerFactory.resume;
  $scope.getProgress = PlayerFactory.getProgress;


  // initialize audio player (note this kind of DOM stuff is odd for Angular)
  // var audio = document.createElement('audio');
  $scope.audio.addEventListener('ended', $scope.next);
  $scope.audio.addEventListener('timeupdate', function () {
    $scope.progress = 100 * $scope.getProgress();
    $scope.$digest(); // no Angular-aware code is doing this for us here
  });
  


  //main toggle
  $scope.toggle = function (song) {
    if ($scope.playing()) $scope.pause();//$rootScope.$broadcast('pause');
    else $scope.resume();//$rootScope.$broadcast('play', song);
  };

  // incoming events (from Album or toggle)
  // $scope.$on('pause', PlayerFactory.pause);
  // $scope.$on('play', PlayerFactory.start);

  // functionality
  // function pause () {
  //   audio.pause();
  //   $scope.playing = false;
  // }
  // function play (event, song){
  //   // stop existing audio (e.g. other song) in any case
  //   pause();
  //   $scope.playing = true;
  //   // resume current song
  //   if (song === $scope.currentSong) return audio.play();
  //   // enable loading new song
  //   $scope.currentSong = song;
  //   audio.src = song.audioUrl;
  //   audio.load();
  //   audio.play();
  // }

  // outgoing events (to Album… or potentially other characters)
  // $scope.next = function () { pause(); $rootScope.$broadcast('next'); };
  // $scope.prev = function () { pause(); $rootScope.$broadcast('prev'); };

});
