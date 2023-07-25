import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) =>  {

  return (
    <div>
        <div className="creator-card" style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imageURL})`, backgroundSize: "cover"}}>
            <div className='creator-name'>
              <h3><strong>{props.name}</strong></h3> 
              {props.youtubeURL ? <a href={`${props.youtubeURL}`} className="social-media-links" target="_blank"><img src="../youtube-logo.png" alt="" width="30px" height="30px" /></a> : null}
              {props.twitterURL ? <a href={`${props.twitterURL}`} className="social-media-links" target="_blank"><span></span></a> : null}
              {props.instagramURL ? <a href={`${props.instagramURL}`} className="social-media-links" target="_blank"><img src="../instagram.png" alt="" width="25px" height="25px" /></a> : null}
            </div>
            <div className='creator-btns'>
              <Link to={`/ViewCreator/${props.id}`}><h2>ℹ️</h2></Link>
              <Link to={`/EditCreator/${props.id}`}><h2>🖋️</h2></Link>
            </div>
            <div className='creator-description'>
              <p>{props.description}</p> 
            </div>
        </div>
    </div>
  );
};

export default Card;