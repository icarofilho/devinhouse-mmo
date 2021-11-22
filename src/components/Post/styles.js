import styled from "styled-components";


export const PostContainer = styled.section`
    margin-top: 20px;
    width: 600px;

    display: flex;
    flex-direction: row;
    margin: 10px 0px;
    justify-content: space-between;
    h3,
    p {
        margin: 5px 15px;
    }

    /* border-bottom: 1px solid #ccc; */
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const TextArea = styled.div`
    margin: 0px;
    padding: 0px;

    display: flex;
    flex-direction: column;
`;

export const ScoreArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-weight: bold;

    .VscTriangleDown{
        width: 20px;
        color: red;
        cursor: pointer;
    }
    .VscTriangleGreen{
        width: 20px;
        color: green;
        cursor: pointer;
    }

    .red {
        color: red;
    }

    .green {
        color: green;
    }
`;

