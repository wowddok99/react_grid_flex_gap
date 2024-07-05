import styled from "@emotion/styled";

export const Wrapper = styled.div`
    font-family: "NotoSansKR-Regular";
    width: 1100px;
    height: 1400px;
    margin: 100px;
    display: grid;
    padding: 5rem;
    gap: 2em;
    row-gap: 1rem 2rem 4rem;
    grid-template-rows: 5rem 3rem 35rem 5rem 15rem 2rem 10rem;
    border: none;
    box-shadow: 0px 0px 10px gray;
`

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 15fr 0.5fr 0.5fr;
`

export const InfoImageProfile = styled.img`
  margin-right: 10px;
  width: 46.67px;
  height: 46.67px;
  cursor: pointer;
`

export const InfoImage = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`

export const Line = styled.div`
  border-top: 1px solid #BDBDBD;
  margin-top: 10px;
`

export const Writer = styled.div`
  font-size: 24px;
`

export const CreateAt = styled.div`
  font-size: 16px;
`

export const TitleWrapper = styled.div`
    font-size: 36px;
`

export const ImageWrapper = styled.div`
    background-color: #F2F2F2;
`

export const ContentsWrapper = styled.div`
`

export const YoutubeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`

export const Youtube = styled.div`
    background-color: #F2F2F2;
`

export const LikeFunctionWrapper = styled.div`
    display: grid;
    grid-template-columns: 20fr 1fr 0.5fr 1fr 20fr;
`

export const LikeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const HateWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const LikeButton = styled.img`
`

export const HateButton = styled.img`
`