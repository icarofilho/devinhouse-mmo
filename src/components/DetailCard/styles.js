import styled from "styled-components";

export const DescriptionArea = styled.section`
margin-bottom: 20px;
    width: 100%;
    .row {
        display: flex;
        gap: 50px;
        padding: 0px;
        margin: 0px;
    }
    
    .req {
        border: 1px solid #000;
        border-radius: 5px;
        width: 100%;
        background: ${(props) => props.theme.colors.cardBackground};
        font-size: 14px;
        
    }
    .sys {
        margin-left: 15px;
    }
    .fix {
        font-weight: bold;
    }
    p {
        margin: 5px;
        text-align: justify;
        text-justify: inter-word;
    }
`;