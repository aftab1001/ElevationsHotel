import React, { Component } from 'react';
class Video extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="video-section bg-img-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/reservation/02.jpg)'}}>
		  <div className="video-play">
		    <a href="https://www.youtube.com/watch?v=NpEaa2P7qZI" className="video-popup"> <i className="fas fa-play" /></a>
		  </div>
		</section>

        }
}

export default Video