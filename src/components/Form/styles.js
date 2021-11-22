import styled from "styled-components";

import { Form as FM } from "formik";

export const Form = styled(FM)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 700px;

    .header-form {
        display: flex;

        gap: 10px;
        
        input {
            width: 100%;
            height: 30px;
        }
    }

    textarea {
        padding: 0;
        border: none;
        resize: none;
        width: 700px;
        height: 100px;
    }
    
`;

export const FormContainer = styled.form`
    div.container {
        display: flex;
        flex-direction: column;
    }
`;

