import React, {useEffect, useState} from "react";
import axios from "axios";
import Recommendation from "./Recommendation";
import styled from "styled-components";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";

const VideoDetail = (props) => {
    const [details, setDetails] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8081/video/${props.match.params.id}`)
            .then(response => {
                setDetails(response.data)});
    }, [props]);
    return (
            <div>
                {details ? (
                    <DetailsDiv className="card">
                        <ReactPlayer url={details[0].url} />
                        <Recommendation recommendations={details[1]} />
                        <form action={`http://localhost:8081/recommendation/new/${props.match.params.id}`} method={"POST"}>
                            <input name={"comment"} placeholder={"Write a comment"} /><br/>
                            <select name="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br/>
                            <input type={"hidden"} name={"videoId"} value={props.match.params.id} />
                            <button type={"submit"} >Submit</button>
                        </form>
                        <Link to={"/"}>Back</Link>
                    </DetailsDiv>
                ):(
                    <div>
                        <p>Nothing</p>
                        <Link to={"/"}>Back</Link>
                    </div>
                )}
            </div>
    );
}
const DetailsDiv = styled.div`
    top: 1em;
    left: 20em;
    display: inline-block;
    text-align: center;
`

export default VideoDetail;