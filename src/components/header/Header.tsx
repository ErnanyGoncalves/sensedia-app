import { AppBar, Container } from "@mui/material"
import { purple } from "@mui/material/colors"
import styled from "styled-components"

const ImageWrapper = styled.div`
    padding: 0.5rem 0;
    img{
        height: 3rem;
    }
`

export const Header = () => {
    return (
        <AppBar sx={{backgroundColor:purple[900]}}>
            <Container maxWidth="xl">
                <ImageWrapper>
                    <img src="src/assets/logos/sensedia_white_logo.svg" alt="Sensedia Logo (White)" />
                </ImageWrapper>
            </Container>
        </AppBar>
    )
}