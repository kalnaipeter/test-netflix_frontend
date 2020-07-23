import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import ReactPlayer from "react-player"

const Video = (props) => {
    return (
        <React.Fragment>
            <StyledCard className="card">
                    <ReactPlayer url={props.video.url} />
                    <StyledLink to={"/video/"+props.video.id}>
                        <p>{props.video.name}</p>
                    </StyledLink>
            </StyledCard>
        </React.Fragment>
    );
}

const StyledCard = styled.div`
    top: 3em;
    left: 2em;
    display: inline-block;
`;

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: black;
  & p{
    text-align: center;
  }
  &:hover {
    transition: 600ms;
    color: orange;
    text-decoration: none;
  }
`

export default Video;