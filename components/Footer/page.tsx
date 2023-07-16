"use client"
import { Heading, Text, Divider, Flex, Box } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { EmailIcon } from "@chakra-ui/icons"
import Image from "next/image"

export default function Footer() {
    return (
        <Box p={`1.5rem`} bg={`#000000`} color={`#FFFFFF`}>
            <Flex maxW={[`100%`, `75rem`]} m={`auto`} px={[`unset`, 6]} flexWrap={`wrap`} justifyContent={`space-between`} alignItems={`center`}>
                <Box mb={`1rem`}>
                    <Box>
                        <Heading as={`h3`} size={`md`} fontFamily={`Nunito`}>Ubicación</Heading>
                        <Divider width={`43px`} borderWidth={`2px`} borderColor={`#FFFFFF`} opacity={1} my={`15px`} />
                    </Box>
                    <Box>
                        <Text fontSize={`11px`} py={`7px`}>Avenida Andrômeda, 2000. Bloco 6 e 8</Text>
                        <Text fontSize={`11px`} py={`7px`}>Alphavile SP</Text>
                        <Text fontSize={`11px`} py={`7px`}>brasil@corebiz.ag</Text>
                        <Text fontSize={`11px`} py={`7px`}>+55 11 3090 1039</Text>
                    </Box>
                </Box>
                <Box w={[`100%`,`fit-content`]}>
                    <Flex flexWrap={`wrap`} flexDirection={`column`}>
                        <Button
                            w={[`80%`,`200px`]}
                            leftIcon={<EmailIcon fontSize={`15px`} />}
                            fontSize={`10px`}
                            mx={`2rem`} my={`1rem`}>
                            CONTÁCTANOS
                        </Button>
                        <Button
                            w={[`80%`,`200px`]}
                            leftIcon={< Image src={`/headset-icon.png`} alt={`Icono de headset`} width={13} height={7} />}
                            fontSize={`10px`}
                            mx={`2rem`} my={`1rem`}>
                            HABLÁ CON UN CONSULTOR
                        </Button>
                    </Flex>
                </Box>
                <Box w={[`100%`, `fit-content`]} my={`2rem`}>
                    <Flex alignItems={`center`} justifyContent={`space-between`}>
                        <Box px={`1rem`}>
                            <Text fontSize={`9px`}>Desarrollado por</Text>
                            <Image src={`/corebiz-logo-white.png?v=1`} alt={`Logo de Corebiz blanco`} width={80} height={18} />
                        </Box>
                        <Box px={`1rem`}>
                            <Text fontSize={`9px`}>Powered by</Text>
                            <Image src={`/vtex-logo-white.png`} alt={`Logo de VTEX blanco`} width={60} height={22} />
                        </Box>
                    </Flex>
                </Box>       
            </Flex>
        </Box>

    )
}
