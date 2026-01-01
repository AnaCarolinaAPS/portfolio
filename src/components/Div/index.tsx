import { DivElement } from "./styles"

type Props = {
    children: React.ReactNode,
    width?: string,
    height?: string,
    display?: string,
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline',
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
    backgroundColor?: string,
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    gap?: string,
    margin?: string,
    padding?: string,
    fontSize?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl',
}

export const DivContainer = ({ children, fontSize, margin='0', padding='0', backgroundColor='transparent', width = '100%', height = 'auto', display = 'flex', alignItems = 'flex-start', justifyContent = 'flex-start', flexDirection='row', gap='' }: Props) => {
    return (
        <DivElement
            $width={width}
            $height={height}
            $display={display}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $flexDirection={flexDirection}
            $backgroundColor={backgroundColor}
            $gap={gap}
            $margin={margin}
            $padding={padding}
            $fontSize={fontSize}
        >
            {children}
        </DivElement>
    )
}