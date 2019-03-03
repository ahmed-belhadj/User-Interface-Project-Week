import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h2`
	font-weight: bold;
	font-size: 28px;
	color: #222222;
`;

const SubHeader = props => {
    return (
        <StyledHeader>
            {props.content}
        </StyledHeader>
    );
};

export default SubHeader;