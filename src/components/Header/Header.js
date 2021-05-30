import styled, {css} from 'styled-components'

export const Style = styled.header`

position: absolute;
background-color: #1768AC;
top: 0px;
left: 0px;
width: 1440px;

${props=>props.headerHeight1 && css`
    height: 368px;
`}

${props=>props.headerHeight2 && css`
    height: 272px;
`}

`


