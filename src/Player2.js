import React, { useState } from "react";
import "./Player.scss";
import ReactPlayer from "react-player/youtube";

export const Player2 = () => {
  let musicList = [
    {
      name: "Wake Me Up",
      author: "Avicii",
      img: "https://www.bensound.com/bensound-img/buddy.jpg",
      audio: "https://youtu.be/5y_KJAg8bHI",
      duration: "4:11",
    },
    {
      name: "Royalty",
      author: "Egzod & Maestro Chives Ft. Neoni",
      img: "https://www.bensound.com/bensound-img/sunny.jpg",
      audio:
        "https://www.youtube.com/watch?v=oOi3oJmfz4o&pp=ygUddGhleSdsbCBiZSBjYWxsaW5nIG1lIHJveWFsdHk%3D",
      duration: "3:41",
    },
    {
      name: "Heat Waves",
      author: "Glass Animals",
      img: "https://www.bensound.com/bensound-img/energy.jpg",
      audio: "https://youtu.be/mRD0-GxqHVo",
      duration: "3:55",
    },
  ];

  let initialState = {
    url: null,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    index: 0,
    currentTime: "0:00",
  };
  const [state, setState] = useState(initialState);

  const handleStop = () => {
    setState({ ...state, ...{ playing: false } });
  };

  const playOrPause = () => {
    setState({ ...state, ...{ playing: !state.playing } });
  };

  const handlePlay = () => {
    setState({ ...state, ...{ playing: true } });
  };

  const handlePause = () => {
    setState({ ...state, ...{ playing: false } });
  };

  const clickAudio = (key) => {
    if (state.playing) {
      handleStop();
    }
    setTimeout(() => {
      setState({
        ...state,
        ...{
          url: musicList[key].audio,
          index: key,
          currentTime: musicList[key].duration,
          playing: false,
        },
      });
    }, 100);
  };

  return (
    <div className="card">
      <section className="section">
        <h1>Adelaide's Music</h1>
        <div className="current-song">
          <div className="img-wrap">
            {/* <img src={currentSong.img} /> */}
            {/* <img src="https://www.bensound.com/bensound-img/slowmotion.jpg" /> */}
            <div className="player-wrapper">
              <ReactPlayer
                //   ref={ref}
                className="react-player"
                width="100%"
                height="100%"
                // url={url}
                url={state.url}
                //   pip={pip}
                // playing={playing}
                playing={state.playing}
                //   controls={controls}
                //   light={light}
                //   loop={loop}
                //   playbackRate={playbackRate}
                //   volume={volume}
                //   muted={muted}
                //   onReady={() => console.log('onReady')}
                //   onStart={() => console.log('onStart')}
                onPlay={handlePlay}
                //   onEnablePIP={this.handleEnablePIP}
                //   onDisablePIP={this.handleDisablePIP}
                onPause={handlePause}
                //   onBuffer={() => console.log('onBuffer')}
                //   onPlaybackRateChange={this.handleOnPlaybackRateChange}
                //   onSeek={e => console.log('onSeek', e)}
                //   onEnded={this.handleEnded}
                //   onError={e => console.log('onError', e)}
                //   onProgress={this.handleProgress}
                //   onDuration={this.handleDuration}
                //   onPlaybackQualityChange={e => console.log('onPlaybackQualityChange', e)}
              />
            </div>
          </div>
          <span className="song-name">{musicList[state.index].name}</span>
          <span className="song-autor">{musicList[state.index].author}</span>
          <button onClick={playOrPause} className="play current-btn">
            {!state.playing ? (
              <i className="fas fa-play">Play</i>
            ) : (
              <i className="fas fa-pause">Pause</i>
            )}
          </button>
        </div>

        <div className="play-list">
          {musicList.map((music, key = 0) => (
            <div
              key={key}
              onClick={() => clickAudio(key)}
              className={
                "track " +
                (state.index === key && !state.playing ? "current-audio" : "") +
                (state.index === key && state.playing ? "play-now" : "")
              }
            >
              {/* <img className="track-img" src={music.img} /> */}
              <img
                className="track-img"
                src="https://www.bensound.com/bensound-img/sunny.jpg"
                alt=""
              />
              <div className="track-discr">
                <span className="track-name">{music.name}</span>
                <span className="track-author">{music.author}</span>
              </div>
              <span className="track-duration">
                {state.index === key ? state.currentTime : music.duration}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
