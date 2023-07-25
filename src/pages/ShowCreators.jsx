import React, { useState, useEffect } from 'react';
import { supabase } from "../client.js";
import Card from '../Components/Card.jsx';

const ShowCreators = () => {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const showCreators = async () => {
            const {data, error} = await supabase.from("creators").select();
            setCreators(data)
        } 
        showCreators().catch(console.error)
    }, [supabase]);

    const addCreator = (event) => {
        event.preventDefault();
        window.location = "/AddCreator"
    }
    
    return (
        <div className="creators">
            <div className='Card-container'>
                {
                    creators && creators.length > 0 ?
                    creators.map((creator, index) => 
                    <Card key={creator.id} id={creator.id} name={creator.name} description={creator.description} imageURL={creator.imageURL} youtubeURL={creator.youtubeURL} twitterURL={creator.twitterURL} instagramURL={creator.instagramURL} />
                    ) :
                        <div>
                            <h2>{'No Creator has been added yet'}</h2>
                            <button className='btn' onClick={addCreator}>Add One here!</button>
                        </div>
                }
            </div>
        </div>  
    )
}

export default ShowCreators;