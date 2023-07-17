"use client"

import { Flex, Box, Heading } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"

export default function Newsletter() {
    return (
        <Box py={[`1rem`,`2rem`]} px={[`1.5rem`, ``]} bg={`#eee`}>
            <Flex maxW={[`100%`, `75rem`]} m={`auto`} px={[`unset`, `8rem`]} flexDir={`column`}>
                <Box>
                    <Heading
                        fontFamily={`Nunito`}
                        textAlign={[`initial`, `center`]}
                        fontSize={`26px`}>
                            ¡Únete a nuestras novedades y promociones!
                    </Heading>
                </Box>
                <Box my={`5px`}>
                    <Flex flexWrap={`wrap`} alignItems={`center`} justifyContent={`center`}>
                        <Input 
                            placeholder='Ingresa tu nombre'
                            size='md'
                            w={[`100%`, `35%`]}
                            mx={[`unset`,`5px`]}
                            my={[`5px`,`unset`]}
                            bg={`#FFFFFF`} 
                            border={`unset`}
                            fontSize={`13px`}
                            color={`#000`} />
                        <Input 
                            placeholder='Ingresa tu mail'
                            size='md'
                            w={[`100%`, `35%`]}
                            mx={[`unset`,`5px`]}
                            my={[`5px`,`unset`]}
                            bg={`#FFFFFF`}
                            border={`unset`}
                            fontSize={`13px`}
                            color={`#000`} />
                        <Button 
                            w={[`100%`, `fit-content`]}
                            bg={`#000`}
                            borderRadius={`5px`}
                            color={`#fff`}
                            fontWeight={`bold`}
                            alignItems={`center`}
                            _hover={{backgroundColor:`#000`, color:`#fff`}}
                            my={`10px`}
                            mx={[`unset`,`5px`]}>
                                Suscribirme
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
