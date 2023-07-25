import React from 'react';
import { useState } from 'react';
import { supabase } from "../client.js";

const AddCreator = () => {

    const addCreator = async (event) => {
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
        
        await supabase
        .from('creators')
        .insert(creator)
        .select();

        alert("Your Content Creator has been successfully created")
        window.location = "/"
    }

    return (
        <div className='add-creator'>
            <form action="">
                <label className='label' htmlFor="name">Name</label> <br />
                <input className='text' type="text" id="name" name="name" /> <br />
                <label className='label' htmlFor="image">Image</label> <br />
                <p className='mini-text'><em>Provide a link to an image of your creator. Be sure to include the http://</em></p>
                <input className='text' type="text" id="image" name="image" /> <br />
                <label className='label' htmlFor="description">Description</label> <br />
                <p className='mini-text'><em>Provide a description of the creator. Who are they? What makes them interesting?</em></p>
                <textarea className='max-text' name="description" id="description" cols="60" rows="10" ></textarea> <br />
                <h4 className='social-media'><strong>SOCIAL MEDIA LINKS</strong></h4>
                <p className='mini-text'><em>Provide at least one of the creator's social media links</em></p>
                <label className='label' htmlFor="youtube">YouTube</label> <br />
                <p className='mini-text'><em>The creator's YouTube handle (without the @)</em></p>
                <input className='text' type="text" id="youtube" name="youtube" /> <br />
                <label className='label' htmlFor="twitter">Twitter</label> <br />
                <p className='mini-text'><em>The creator's Twitter handle (without the @)</em></p>
                <input className='text' type="text" id="twitter" name="twitter" /> <br />
                <label className='label' htmlFor="instagram">Instagram</label> <br />
                <p className='mini-text'><em>The creator's Instagram handle (without the @)</em></p>
                <input className='text' type="text" id="instagram" name="instagram" /> <br />
            </form>
            <button className='btn create-btn' onClick={addCreator}>SUBMIT</button>
        </div>
    )
}

export default AddCreator;