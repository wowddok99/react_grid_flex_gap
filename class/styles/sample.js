import styled from "@emotion/styled";

export const TopWrpper = styled.div`
    font-size: 40px;
`

export const Wrapper = styled.div`
    font-family: "NotoSansKR-Regular";
    display: grid;
    padding: 30px;
    border: 1px solid black;
    /* grid-template-columns: 1fr 2.5fr 0.5fr 0.5fr 0.5fr; */
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(150px,auto);
    grid-gap: 1rem;

    div {
        background-color: whitesmoke;
    }

    .item2 {
        /* grid-column-start: 2;
        grid-column-end: 4;
        
        grid-row-start: 1;
        grid-row-end: 3; */
    
        grid-column: 2 / 4;
        grid-row: 1 / 3;
    }
`
