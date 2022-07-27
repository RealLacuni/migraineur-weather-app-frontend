import styled from "styled-components"

export const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    flex: 1;
    max-width:90%;
    gap: 5vw;
    margin-left: 5rem;
    margin-right: 5rem;

    @media (max-width:480px) {
        max-width:90%;
        flex-direction:column;
        justify-content: center;
    }
`