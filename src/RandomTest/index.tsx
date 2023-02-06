import React, {Fragment, useCallback, useRef, useState} from 'react'
import {Bar, ControlsButton, ControlsWrapper, Deposit, Graph} from "./RandomTestStyled";

function RandomTest() {
    const [percent, setPercent] = useState(0)
    const [deposit, setDeposit] = useState(1000)
    const [maxDeposit, setMaxDeposit] = useState (1000)
    const [graph, setGraph] = useState<number[]>([])
    const depositRef = useRef(deposit)
    depositRef.current = deposit

    const randomHandler = useCallback(() => {
            const minusOrPlus = Math.floor(Math.random() * 2)
            const resultP = Math.floor(Math.random() * 50)
            const resultPercent = minusOrPlus ? resultP : -resultP
            const resultDeposit = Math.floor(depositRef.current + depositRef.current * (resultPercent / 100))

            if (resultDeposit > 1) {
                setDeposit(resultDeposit)
                setPercent(resultPercent)
                if (graph.length > 50) {
                    graph.shift()
                }
                graph.push(resultDeposit)
                setGraph(graph)
                setMaxDeposit(Math.max(...graph))
                setTimeout(randomHandler, 100)
            } else {
                setDeposit(resultDeposit)
                setPercent(resultPercent)
                graph.push(resultDeposit)
                setGraph(graph)
            }

        },
        [deposit, graph])

    return (
        <Fragment>
        <div>{deposit} руб.</div>
        <Deposit percent={percent}>{percent}%</Deposit>
        <ControlsWrapper>
            <ControlsButton onClick={randomHandler}>Попытать счастье!</ControlsButton>
        </ControlsWrapper>
            <Graph>
                {
                    graph.map((el, index) => {
                    if (el !== 0) {
                        let color = graph[index - 1] < el ? 'green' : 'red'
                        let width = 300/graph.length
                        let height = (el/maxDeposit) * 300
                        return <Bar key={index} color={color} width={width} height={height}   ></Bar>
                    } else return null
                })}
            </Graph>
        </Fragment>
    )
}

export default React.memo(RandomTest)


