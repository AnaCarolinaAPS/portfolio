import { IconElement } from "./styles"

type Props = {
    children: React.ReactNode,
    width?: string,
    gap?: string,
}

export const Icon = ({ children, width = 'auto', gap='' }: Props) => {
    return (
        <IconElement
            $width={width}
            $gap={gap}
        >
            {children}
        </IconElement>
    )
}