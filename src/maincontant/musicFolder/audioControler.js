import React ,{Component} from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Song2 from './musics/kgfdeera.mp3';
import Song3 from './musics/kgfk.mp3';
import Song4 from './musics/kuruvi.mp3';
import Song5 from './musics/ilay1.mp3';
import Song6 from './musics/ilaya2.mp3';
import Song7 from './musics/ilaya3.mp3';
import Song8 from './musics/ilaya4.mp3';
import Song9 from './musics/ilaya5.mp3';
import Song10 from './musics/ilaya6.mp3';
import Song11 from './musics/ilaya7.mp3';

const songArray = [Song2 , Song4 , Song5 , Song6 , Song7, Song8 , Song9 , Song10 , Song11  ];
const endpoint = 6;
const audi =document.getElementById("audio");
class Audiocontroller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
            playcount:0,
            playlist:songArray[1],
            imagsorce:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-photo.png",
        }
        this.playbtnclick=this.playbtnclick.bind(this);
    }
     shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    //   componentDidMount() {
    //    this.playbtnclick()
    // console.log('nm')
    //  }
     playbtnclick =(e)=> {
         //debugger;
        // e.preventDefault();
        this.interval = setInterval(()=> {
            this.setState(prestate =>({
                counter:parseInt(prestate.counter)+1,              
            }))
        },1000);
       
    }
    clearInterval=()=> {
        clearInterval(this.interval)
    }
     
    componentDidUpdate() {
        this.shuffle(songArray);
       
        if(this.state.counter===endpoint) {
            this.clearInterval();
            this.setState({
                counter:0,
                playlist:songArray[0],
                
            })
            toast('Next Song Ready To Play ', {
                position : 'top-center',
                autoClose:3000,
                
            });
        toast('Click Play Button for Next Song', {
            position : 'top-center',
                autoClose:4000,
                type:"success",
                transition:Zoom,
        })
        }
    }
    click1=(e)=> {
        this.clearInterval();
        this.setState({
            playlist:Song5,
            counter:0,
            imagsorce:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-a1.png",
        })
        e.preventDefault();
    }
    click2=(e)=> {
        this.clearInterval();
        this.setState({
            playlist:Song2,
            counter:0,
            imagsorce:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-a2.png",
        })
        e.preventDefault();
    }
    click3=(e)=> {
        this.clearInterval();
        this.setState({
            playlist:Song6,
            counter:0,
            imagsorce:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-a3.png"
        })
        e.preventDefault();
    }
    click4=(e)=> {
        this.clearInterval();
        this.setState({
            playlist:Song4,
            counter:0,
            imagsorce:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-a4.png"
        })
        e.preventDefault();
    }
    render() {
        const {counter, playlist, imagsorce} = this.state;
        //debugger;
       // var plyasong = <audio id='audio' autoPlay  src={playlist} controls />
            
    
        return(
            <div>
                <div class="main-current">
                    <div class="current-keyvisual">
                        <img src={imagsorce} />
                    </div>
                    <div class="current-info">
                        <h1>Blame</h1>
                        <p>KYLE</p>
                    </div>
                </div>
                <ToastContainer />
                <h4>counter : {counter}</h4>
                {/* <button onClick={()=>this.playbtnclick()}>count</button> */}

                <audio id="audio"  onPlay={(e)=>this.playbtnclick(e)}   src={playlist} controls />

                <div>
                    <ul class="player-list">
                        <li onClick={(e)=>this.click1(e)}>
                        <img 
                            class="list-cover"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-a1.png"
                        />
                        <div class="list-info">
                            <div class="info-title">One Step At A Time</div>
                            
                        </div>
                        </li>
                        <li onClick={(e)=>this.click2(e)}>
                        <img 
                            class="list-cover"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-a2.png"
                        />
                        <div class="list-info">
                            <div class="info-title">Sunset Lover</div>
                           
                        </div>
                        </li>
                        <li onClick={(e)=> this.click3(e)}>
                        <img 
                            class="list-cover"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-a3.png"
                        />
                        <div class="list-info">
                            <div class="info-title">Youth</div>
                        </div>
                        </li>
                        <li onClick={(e)=>this.click4(e)}>
                        <img 
                            class="list-cover"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/music-player-freebie-a4.png"
                        />
                        <div class="list-info">
                            <div class="info-title">Working Girl</div>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        )
    }
}
export default Audiocontroller;
