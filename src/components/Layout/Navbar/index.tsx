import { useState } from "react"
import { useTheme } from "../../../hooks/theme"
import { Container, HamburgerButton, HeaderIcon, Icon, LeftSide, Link, Navigation, NavigationItem, NavigationItemLabel, RightSide, TextoLogo, TextoLogoSecond } from "./styles"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { useLocation } from "react-router-dom"

const menuItems = [
    { label: 'Início', url: '/' },
    { label: 'Sobre', url: '/sobre' },
    { label: 'Projetos', url: '/projetos' },
]

export const Navbar = () => {
    const { handleToggleTheme, theme } = useTheme()    
    const { pathname } = useLocation()
    const [isExpanded, setIsExpanded] = useState(true);
    const handleToggleExpand = () => setIsExpanded(!isExpanded)

    return (
        <Container >
            <LeftSide>
                <TextoLogo to="/">Ana<TextoLogoSecond>.dev</TextoLogoSecond></TextoLogo>
            </LeftSide>

            <RightSide>
                <Navigation $expanded={isExpanded}>
                    {menuItems.map((item, key) => (
                        <Link to={item.url} key={key} onClick={() => setIsExpanded(false)}>
                            <NavigationItem $isActive={pathname == item.url}>
                                <NavigationItemLabel>
                                    {item.label}
                                </NavigationItemLabel>
                            </NavigationItem>
                        </Link>
                    ))}
                </Navigation>

                <Icon onClick={handleToggleTheme}>
                    {theme == 'dark' ?
                        <MdOutlineLightMode />
                        :
                        <MdOutlineDarkMode />
                    }
                </Icon>
                
                <HamburgerButton onClick={handleToggleExpand}>
                    <HeaderIcon />
                </HamburgerButton>
            </RightSide>
        </Container>
    )
}