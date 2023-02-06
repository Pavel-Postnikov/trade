import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    
`

const Test = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Test>
            <ErrorStyle>
                <h1>Ууупс!</h1>
                <p>К сожалению, произошла непредвиденная ошибка.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </ErrorStyle>
        </Test>
    );
}