import React, {Fragment, useCallback, useEffect, useState} from 'react'
import styled from 'styled-components';

const Deposit = styled.div<{percent: number}>`
          border: 2px solid ${(props) => props.percent >= 0 ? "green" : "red"};
          color: ${(props) => props.percent >= 0 ? "green" : "red"};
          margin: 10px;
          padding: 10px;
        `;

const Graph = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    align-items: flex-end;
    border: 2px solid white;
  padding: 2px;
`;

const ControlsButton = styled.button`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 24px;
  text-transform: capitalize;
  min-width: 100px;
  width: 100%;

  @media screen and (max-width: 500px) {
    max-width: 300px;
  }
`;

const ControlsWrapper = styled.section`
  display: flex;
  gap: 15px;
  margin: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

function RandomTest() {
    const [percent, setPercent] = useState(0)
    const [deposit, setDeposit] = useState(1000)
    const [maxDeposit, setMaxDeposit] = useState (0)
    const [graph, setGraph] = useState<number[]>([])

    const randomHandler = useCallback(() => {
        const minusOrPlus = Math.floor(Math.random() * 2)
        const result = Math.floor(Math.random() * 50)


        const resultDiposit = Math.floor(deposit + deposit * (percent / 100))
        if (resultDiposit > maxDeposit) {
            setMaxDeposit(resultDiposit)
        }

        if (resultDiposit > 1) {
            setDeposit(resultDiposit)
            setPercent( minusOrPlus ? result : -result)
        }
        
    },[deposit, maxDeposit, percent])

    useEffect(() => {
        graph.push(deposit)
        setGraph(graph)
    }, [deposit])

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
                        const color = graph[index - 1] < el ? 'green' : 'red';
                        return <div style={{width:`${300/graph.length}px`, height:`${(el/maxDeposit) * 300}px`, border: `1px solid ${color}`}}></div>
                    } else return null
                })}
            </Graph>
        </Fragment>
    )
}

export default React.memo(RandomTest)


