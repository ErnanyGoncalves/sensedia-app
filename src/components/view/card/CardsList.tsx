import styled from "styled-components";
import { Footer } from "../../footer/Footer";
import { CardSensedia } from "./CardSensedia";

const CardListWrapper = styled.div`    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 30px;
`;

export const CardsList = ({ posts }) => {

    return (
        <>
            <CardListWrapper>
                {posts.map(({ id, title, body }) => <CardSensedia id={id} title={title} body={body} />)}
            </CardListWrapper>
            <Footer />
        </>
    )
}