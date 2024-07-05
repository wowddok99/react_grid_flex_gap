import styled from "@emotion/styled";

export const Wrapper = styled.div`
    font-family: "NotoSansKR-Regular";
    display: grid;
    /* width: 1100px;
    height: 1400px; */
    border: 1px solid black;
    /* grid-template-columns: 1fr 2.5fr 0.5fr 0.5fr 0.5fr; */
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(150px,auto);
    grid-gap: 10px;

    div {
        background-color: whitesmoke;
    }
`
