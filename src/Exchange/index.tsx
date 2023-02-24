import React, {Fragment, useCallback, useRef, useState} from 'react'
import {Bar, Content, ControlsButton, ControlsWrapper, Deposit, Graph} from "./Exchange.Styled";

function Exchange() {
    const [delta, setDelta] = useState(0)
    const [price, setPrice] = useState(1000)
    const [maxPrice, setMaxPrice] = useState (2000)
    const [graph, setGraph] = useState<number[]>([])
    // const depositRef = useRef(deposit)
    // depositRef.current = deposit

    const randomHandler = useCallback(() => {
            const minusOrPlus = Math.floor(Math.random() * 2)
            const DeltaPrice = Math.floor(Math.random() * 50)
            const resultDeltaPrice = minusOrPlus ? DeltaPrice : -DeltaPrice
            const resultPrice = price + resultDeltaPrice
            setPrice(resultPrice)

        },
        [graph])

    return (
        <Content>
        <div>Биржа</div>
        <ControlsWrapper>
            <ControlsButton onClick={randomHandler}>Попытать счастье!</ControlsButton>
        </ControlsWrapper>
            <Graph>
                {   graph.map((el, index) => {
                    if (el !== 0) {
                        let color = graph[index - 1] < el ? 'green' : 'red'
                        let width = 300/graph.length
                        let height = (el/maxPrice) * 300
                        return <Bar key={index} color={color} width={width} height={height}   ></Bar>
                    } else return null
                })}
            </Graph>
        </Content>
    )
}

export default React.memo(Exchange)


