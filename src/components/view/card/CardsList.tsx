import styled from "styled-components";
import { Post } from "../../../types/Post";
import { Posts } from "../../../types/Posts";
import { Footer } from "../../footer/Footer";
import { CardSensedia } from "./CardSensedia";

const CardListWrapper = styled.div`    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 30px;
`;

export const CardsList = ({ posts }:Posts) => {

    return (
        <>
            <CardListWrapper>
                {posts.map(({ id, title, body }:Post) => <CardSensedia id={id} key={id} title={title} body={body} />)}
            </CardListWrapper>
            <Footer />
        </>
    )
}