import {
    Wrapper,
    InfoWrapper,
    TitleWrapper,
    ImageWrapper,
    ContentsWrapper,
    YoutubeWrapper,
    LikeFunctionWrapper,
    InfoImageProfile,
    Line,
    Writer,
    CreateAt,
    InfoImage,
    LikeWrapper,
    HateWrapper,
    LikeButton,
    HateButton,
    Youtube
} from "../../../../styles/boardsDetail_gap"

export default function BoardsDetailGapPage(){

    return (
        <Wrapper>
            <div>
                <InfoWrapper>
                    <InfoImageProfile src="/images/profile.png" />
                    <div>
                        <Writer>TEN</Writer>
                        <CreateAt>2024.07.04</CreateAt>
                    </div>
                    <div></div>
                    <InfoImage src="/images/ic_link.png" />
                    <InfoImage src="/images/ic_location.png" />
                </InfoWrapper>
                <Line></Line>
            </div>
            <TitleWrapper>게시글 제목입니다.</TitleWrapper>
            <ImageWrapper></ImageWrapper>
            <ContentsWrapper>test12313213213213123213</ContentsWrapper>
            <YoutubeWrapper>
                <div></div>
                <Youtube></Youtube>
                <div></div>
            </YoutubeWrapper>
            <div></div>
            <LikeFunctionWrapper>
                <div></div>
                <LikeWrapper>
                    <LikeButton src="/images/ic_thumb_up.png"></LikeButton>
                    144
                </LikeWrapper>
                <div></div>
                <HateWrapper>
                    <HateButton src="/images/ic_thumb_down.png"></HateButton>
                    100
                </HateWrapper>
                <div></div>
            </LikeFunctionWrapper>
        </Wrapper>
    )
}