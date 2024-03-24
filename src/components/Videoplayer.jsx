import React from 'react'
import ReactPlayer from 'react-player'


function VideoPlayer({url}) {

    return (
        <ReactPlayer url={url} controls={true} width={"360px"} height={"200px"} />
    );
}

export default VideoPlayer;