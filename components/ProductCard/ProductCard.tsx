"use client"

import React, { useState, useRef } from "react"
import { Flex, Box, Badge, Text } from "@chakra-ui/layout"
import Image from "next/image"
import { Button } from "@chakra-ui/button"
import GetSize from "../../hooks/GetSize/GetSize"

export default function ProductCard( product ) {

    const isOnDiscount = product.attributes.listPrice != null
    const hasInstallments = product.attributes.installments.length > 0
    const [isShow, setIsShow] = useState(false);
    const isMobile = GetSize();

    return (
        <Flex w={[`50%`,`23%`]} my={`10px`} flexDir={`column`} justifyContent={`center`} alignItems={`center`}>
            <Box position={`relative`} w={`100%`}>
                {isOnDiscount ? 
                    <Box position={`absolute`} right={0} w={0} h={0} borderStyle={`solid`} borderWidth={`0 70px 70px 0`} borderColor={`transparent #F8475F transparent transparent`}>
                        <Text position={`absolute`} right={`-65px`} top={`10px`} color={`#ffffff`} fontWeight={`bold`}>OFF</Text>
                    </Box> :
                    `` }
                <Image 
                    src={product.attributes.imageUrl}
                    alt={product.attributes.productName}
                    width={216}
                    height={200}
                    style={{margin: `0 auto`}}
                />
            </Box>
            <Box 
                onMouseEnter={() => setIsShow(true)}
                onMouseLeave={() => setIsShow(false)}
                _hover={{backgroundColor: `#eee`}}
                width={`100%`}
                height={`170px`}
                display={`flex`}
                flexDir={`column`}
                flexWrap={`wrap`}
                alignItems={`center`}
                justifyContent={[`space-between`,`unset`]}
                position={`relative`}>
                <Text
                    w={`fit-content`}
                    color={`#7A7A7A`}
                    py={`10px`}
                    fontSize={[`10px`, `12px`]}
                    textAlign={`center`}>
                        {product.attributes.productName}
                </Text>
                <Box h={`20px`}>
                    {isOnDiscount &&
                        <Text
                            as='del'
                            color={`#7A7A7A`}
                            fontSize={`11px`}
                            marginBottom={`10px`}>
                                De: ${product.attributes.listPrice}
                        </Text>}
                </Box>
                <Box mt={`10px`}>
                    <Text fontWeight={`bold`} fontSize={`18px`}>Por: ${product.attributes.price}</Text>
                </Box>
                <Box>
                    {hasInstallments && <Text p={0} fontSize={`11px`} color={`#7A7A7A`}>O en {product.attributes.installments[0].quantity}x de ${product.attributes.installments[0].value}</Text>}
                </Box>
                {isMobile.width < 797 && 
                    <Button 
                        bg={`#000`} 
                        borderRadius={`5px`}
                        color={`#fff`}
                        fontWeight={`bold`}
                        alignItems={`center`}>
                            COMPRAR
                    </Button>}
                {isShow && 
                    <Button 
                        bg={`#000`}
                        borderRadius={`5px`}
                        color={`#fff`}
                        fontWeight={`bold`}
                        alignItems={`center`}
                        _hover={{backgroundColor:`#000`, color:`#fff`}}
                        position={`absolute`}
                        bottom={0}
                        marginBottom={`10px`}>
                        COMPRAR
                    </Button>}
            </Box>
        </Flex>
    )
}
