import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from "../client.js";

const EditCreator = () => {
    let params = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const readCreators = async () => {
            const {data, error} = await supabase.from("creators").select().eq("id", params.id);
            setPosts(data)
        } 
        readCreators().catch(console.error)
    }, [supabase]);

    const editCreator = async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const image = document.getElementById('image').value;
        const description = document.getElementById('description').value;
        const youtube = document.getElementById('youtube').value;
        const twitter = document.getElementById('twitter').value;
        const instagram = document.getElementById('instagram').value;

        const creator = {
            name: name,
            description: description,
            imageURL: image,
            youtubeURL: youtube,
            twitterURL: twitter,
            instagramURL: instagram
        }

        await supabase.from('creators').update({ name: creator.name, imageURL: creator.imageURL, description: creator.description, youtubeURL: creator.youtubeURL, twitterURL: creator.twitterURL, instagramURL: creator.instagramURL })
        .eq('id', params.id);

        alert("Your Player has been successfully updated")
        window.location = `/ViewCreator/${params.id}`;
    }

    const deleteCreator = async (event) => {
        event.preventDefault();
        await supabase.from('creators').delete().eq('id', params.id);

        alert("Your post has been successfully deleted")
        window.location = "/";
    }

    return (
        <div>
            {posts.length > 0 ? 
                <div className='edit-creator'>
                    <form action="">
                        <label htmlFor="name">Name</label> <br />
                        <input className='text' type="text" id="name" name="name" value={posts[0].name} onChange={(e) => setPosts(posts[0].name = e.target.value)} /> <br />
                        <label htmlFor="image">Image</label> <br />
                        <input className='text' type="text" id="image" name="image" value={posts[0].imageURL} onChange={(e) => setPosts(posts[0].imageURL = e.target.value)} /> <br />
                        <p className='mini-text'><em>Provide a link to an image of your creator. Be sure to include the http://</em></p>
                        <label htmlFor="description">Description</label> <br />
                        <p className='mini-text'><em>Provide a description of the creator. Who are they? What makes them interesting?</em></p>
                        <textarea className='max-text' name="description" id="description" cols="60" rows="10" value={posts[0].description} onChange={(e) => setPosts(posts[0].description = e.target.value)} ></textarea> <br />
                        <h4 className='social-media'><strong>SOCIAL MEDIA LINKS</strong></h4>
                        <p className='mini-text'><em>Provide at least one of the creator's social media links</em></p>
                        <label htmlFor="youtube">YouTube</label> <br />
                        <p className='mini-text'><em>The creator's YouTube handle (without the @)</em></p>
                        <input className='text' type="text" id="youtube" name="youtube" value={posts[0].youtubeURL} onChange={(e) => setPosts(posts[0].youtubeURL = e.target.value)} /> <br />
                        <label htmlFor="twitter">Twitter</label> <br />
                        <p className='mini-text'><em>The creator's Twitter handle (without the @)</em></p>
                        <input className='text' type="text" id="twitter" name="twitter" value={posts[0].twitterURL} onChange={(e) => setPosts(posts[0].twitterURL = e.target.value)} /> <br />
                        <label htmlFor="instagram">Instagram</label> <br />
                        <p className='mini-text'><em>The creator's Instagram handle (without the @)</em></p>
                        <input className='text' type="text" id="instagram" name="instagram" value={posts[0].instagramURL} onChange={(e) => setPosts(posts[0].instagramURL = e.target.value)} /> <br />
                    </form>
                    <button className='btn create-btn' onClick={editCreator}>SUBMIT</button>
                    <button className='btn create-btn delete-btn' onClick={deleteCreator}>DELETE</button>
                </div>
                : null}
        </div>
    )
}

export default EditCreator;