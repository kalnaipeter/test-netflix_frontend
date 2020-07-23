import React from "react";
import styled from "styled-components";

const Recommendation = (props) => {
    return (
        <React.Fragment>
            {props.recommendations.map((recommendation)=>(
                <div>
                    <br/>
                    <RecommendationDiv key={recommendation.id}>
                        <p>Comment: {recommendation.comment}</p>
                        <p>Rating: {recommendation.rating}/5</p>
                    </RecommendationDiv>
                </div>
            ))}
        </React.Fragment>
    );
}

const RecommendationDiv = styled.div`
    border-style: solid;
    border-color: orange;
`

export default Recommendation;