"use client"
import { Flex, Box } from "@chakra-ui/layout"
import { Text, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import Image from "next/image"

export default function MenuDesktop() {
    return (
        <Box py={`0.5rem`}>
            <Flex maxW={`75rem`} m={`auto`} py={2} px={6} justifyContent={`space-between`} alignItems={`center`}>
                <Box pr={`2rem`}>
                    <Image 
                        src={`/corebiz-logo.png`}
                        alt={`Logo de Corebiz`}
                        width={142}
                        height={32}
                    />
                </Box>
                <Box width={`650px`}>
                <InputGroup>
                    <Input placeholder={`¿Qué estás buscando?`} p={`unset`} fontSize={`13px`} border={`unset`} borderRadius={`unset`} borderBottom={`solid 2px grey`}/>
                    <InputRightElement>
                        <SearchIcon w={6} h={6} />
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Box>
                <Flex alignItems={`center`}>
                    <Box>
                        <Image 
                            src={`/user-icon.png`}
                            alt={`Icono de Mi cuenta`}
                            width={24}
                            height={24}
                        />
                    </Box>
                    <Box>
                        <Text color={`grey`} fontSize={`12px`} pl={`3px`}>
                            Mi Cuenta
                        </Text>
                    </Box>
                </Flex>

            </Box>
            <Box>
                <Flex alignItems={`center`}>
                    <Box>
                        <Image 
                            src={`/mini-cart.png`}
                            alt={`Icono del mini-cart`}
                            width={24}
                            height={24}
                        />
                    </Box>
                    <Box>
                        <Text
                            color={`#FFFFFF`}
                            backgroundColor={`#F8475F`}
                            borderRadius={`50%`}
                            textAlign={`center`}
                            pl={`4px`}
                            pr={`5px`}
                            fontSize={`11px`}
                            m={`5px`}
                            lineHeight={`1.5`}
                        >
                            0
                        </Text>     
                    </Box>
                </Flex>
            </Box>
            </Flex>            
        </Box>

    )
}
