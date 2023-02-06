import styled from "styled-components";

export  const Deposit = styled.div<{percent: number}>`
          border: 2px solid ${(props) => props.percent >= 0 ? "green" : "red"};
          color: ${(props) => props.percent >= 0 ? "green" : "red"};
          margin: 10px;
          padding: 10px;
        `

export  const Bar = styled.div<{color: string, width: number, height: number}>`
    border: 1px solid ${(props) => props.color};
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`

// export const Bar = styled.div.attrs<{color: string, width: number, height: number}>(props => ({
//         style: {
//                 border: `1px solid ${props.color}`,
//                 width: `${props.width}`,
//                 height: props.height,
//         },
// }))``

export  const Graph = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    align-items: flex-end;
    border: 2px solid white;
    padding: 2px;
`

export  const ControlsButton = styled.button`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 24px;
  text-transform: capitalize;
  min-width: 100px;
  width: 100%;
  &:hover {
    background: cadetblue;
  }

  @media screen and (max-width: 500px) {
    max-width: 300px;
  }
`

export  const ControlsWrapper = styled.section`
  display: flex;
  gap: 15px;
  margin: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`