import React from "react";
import {Content} from "./Home.Styled";
import Counter from "../Slices/counter/counter";


export default function Home() {
    return (
        <Content>
            <Counter></Counter>
        </Content>
    )
}