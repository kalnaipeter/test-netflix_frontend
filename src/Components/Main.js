import React, {useEffect, useState} from 'react';
import axios from "axios";
import Video from "./Video";

const Main = () => {
    const [videos, setVideo] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8081/video/all")
            .then(response => setVideo(response.data));
    }, [])

    return (
        <div>
            <div>
                {videos ? (
                    videos.map((video,index) => (
                        <Video key={index} video={video}/>
                    ))
                ) :(
                    <p>Nothing here</p>
                )}
            </div>
        </div>
    );
}

export default Main;