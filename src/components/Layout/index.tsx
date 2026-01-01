import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { BodyContent, Container, Content, NavbarContent } from "./styles"

export const Layout = () => {
    return (
        <Container>
            <Content>
                <NavbarContent>
                    <Navbar />
                </NavbarContent>

                <BodyContent>
                    <Outlet />
                </BodyContent>
            </Content>
        </Container>
    )
}