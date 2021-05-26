import styled, {css} from 'styled-components'

export const Style = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&family=Roboto&display=swap');

   background-color: ${props=> props.BackgroundColor};
   font-size: ${props=> `${props.FontSize}px`};
   color: ${props=> props.FontColor};

   ${props=>props.TitleFont && css`
      font-family: 'Nunito';
   `}

   ${props=>props.BodyFont && css`
      font-family: 'Roboto';
   `}
`