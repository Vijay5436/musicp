import React, {Component} from 'react';
import './mainmusic.css';
import Audiocontroler from './musicFolder/audioControler';

class MusicComponent extends Component {
    render() {
        return(
            <div class="music-player">
  <div class="player-main">
    
    <div class="main-control">
    {/* <audio
        controls
        src="./musicFolder/song1mp3">
    </audio> */}
     <Audiocontroler />




        {/* <audio controls autoPlay="">
            <source src="./musicFolder/song1mp3" type="audio/mpeg"></source>
        </audio> */}
    </div>
  </div>
  
</div>
        )
    }
}
export default MusicComponent;