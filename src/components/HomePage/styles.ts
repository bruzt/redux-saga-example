import styled from 'styled-components';

export const Container = styled.div`

    padding: 10px;

    form > * + * {
        margin-top: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 300px;
        height: 50px;
        padding: 5px;

        font-size: 25px;

        border: 1px solid grey;

        &::placeholder {
            font-size: 16px;
            transform: translateY(-3px);
        }
    }

    button {
        width: 300px;
        height: 30px;
    }
`;
