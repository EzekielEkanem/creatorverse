import React from 'react'
import { useState, useEffect, Components } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../client.js'

const ViewCreator = () =>  {
    let params = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const checkCreator = async () => {
            const {data, error} = await supabase.from("creators").select().eq("id", params.id);
            setPosts(data)
        } 
        checkCreator().catch(console.error)
    }, [supabase]);

    const editPost = async (event) => {
      event.preventDefault();
      window.location = `/EditCreator/${params.id}`
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase.from('creators').delete().eq('id', params.id);

        alert("Your post has been successfully deleted")
        window.location = "/";
    }
  
    return ( 
        <div>
            <div className='view-creator'>
                {
                    (posts.length > 0) ? 
                    <div className='details'>
                        <div className='det-img'>
                            { posts[0].imageURL ? <img src={posts[0].imageURL} alt={posts[0].name} width="500px" height="300px" /> : null}
                        </div>
                        <div className='det-content'>
                            <h2>{posts[0].name}</h2>
                            <p >{posts[0].description}</p>
                            { posts[0].youtubeURL ? <Link to={`${posts[0].youtubeURL}`} className='det-social-media'><img src="../youtube-logo.png" alt="" width="30px" height="30px" />@{posts[0].name}</Link> : null}
                            { posts[0].twitterURL ? <Link to={`${posts[0].twitterURL}`} className='det-social-media'><span></span>@{posts[0].name}</Link> : null}
                            { posts[0].instagramURL ? <Link to={`${posts[0].instagramURL}`} className='det-social-media'><img src="../instagram.png" alt="" width="25px" height="25px" />@{posts[0].name}</Link> : null}
                        </div>
                        <div className='edits'>
                            <div className='edit'>
                                <button onClick={editPost} className='btn'> EDIT </button>
                                <button onClick={deletePost} className='btn delete-btn'> DELETE </button>
                            </div>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    );
  };
  
  export default ViewCreator;