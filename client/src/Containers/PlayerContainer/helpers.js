let helpers = {
  prettyTime: (time) => {
    // Well, if time is the duration on the track, it is a string... NAN
    var minutes = Math.floor(time / 60);
    var seconds = Math.round(time - minutes * 60);
    if (seconds < 10) seconds = "0" + seconds;
    if (!seconds) seconds = this.props.song.duration.slice(-1, 2)
    if(time){
      return minutes + ':' + seconds;
    } else {
      if(time === 0) {
        return '0:0' + time;
      }
      return time;
    }
  }
}
export default helpers;
