"use client"
import { Menu, MenuButton } from '@chakra-ui/menu'
import { Flex, Box } from "@chakra-ui/layout"
import { Text, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import Image from 'next/image'

export default function MenuMobile() {
    return (
        <Flex py={3} px={6} justifyContent={`space-between`} alignItems={`center`} flexWrap={`wrap`}>
            <Box>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label={`Options`}
                        icon={<HamburgerIcon w={10} h={10}/>}
                        colorScheme={`black`}
                        variant={`outline'`}
                        color={`black`}
                        border={0}
                    />
                </Menu>  
            </Box>
            <Box>
                <Image 
                    src={`/corebiz-logo.png`}
                    alt={`Logo de Corebiz`}
                    width={142}
                    height={32}
                />
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
            <Box width={`100%`} pt={`15px`}>
                <InputGroup>
                    <Input placeholder={`¿Qué estás buscando?`} p={`unset`} fontSize={`13px`} border={`unset`} borderRadius={`unset`} borderBottom={`solid 2px grey`}/>
                    <InputRightElement>
                        <SearchIcon w={6} h={6} />
                    </InputRightElement>
                </InputGroup>
            </Box>
          
        </Flex>

    )
}
