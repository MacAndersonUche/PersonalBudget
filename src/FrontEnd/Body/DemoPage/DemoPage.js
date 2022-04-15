import { Container, Text } from "@chakra-ui/react"
import ButtonSelector from "../HomePage/ButtonSelector"

const DemoPage = () => {
    return(
        <Container
        maxW='100%'
        h='100vh'
        centerContent
        fontSize={{ base: "16px", md: "30px", lg: "36px" }}
    >
        <Text>Welcome to the  Demo. Choose your request type</Text>
        <ButtonSelector path1="/demo/get" title1="Get Requests Demo"
            path2="/demp/other" title2="Other Requests Demo"/>
    </Container>
    )
}

export default DemoPage