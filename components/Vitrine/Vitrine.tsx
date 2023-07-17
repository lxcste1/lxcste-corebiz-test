"use client"

import products from '../../app/api/api'
import { Flex, Box } from '@chakra-ui/layout';
import ProductCard from '../ProductCard/ProductCard';

export default function Vitrine() {

   const data = products();

    return (
        <Box py={[`1rem`,`2rem`]} px={[`1.5rem`, ``]}>
            <Flex maxW={[`100%`, `75rem`]} m={`auto`} px={[`unset`, 6]} justifyContent={`space-between`} flexWrap={`wrap`}> 
                {data?.map((product)=>{
                    console.log(product)
                    return <ProductCard attributes={product} key={product.productId} />
                })}                
            </Flex>
        </Box>
    )
}
