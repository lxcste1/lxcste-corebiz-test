"use client"

import products from '../../app/api/api'
import { Flex, Box } from '@chakra-ui/layout';
import ProductCard from '../ProductCard/ProductCard';

/* En este componente, se encuentra la maquetación de las vitrinas. 
** Se obtienen los datos de los productos de manera dinámica, 
** y por cada producto se renderiza el componente ProductCard. 
*/

export default function Vitrine() {

   const data = products();

    return (
        <Box py={[`1rem`,`2rem`]} px={[`1.5rem`, ``]}>
            <Flex maxW={[`100%`, `75rem`]} m={`auto`} px={[`unset`, 6]} justifyContent={`space-between`} flexWrap={`wrap`}> 
                {data?.map((product)=>{
                    return <ProductCard attributes={product} key={product.productId} />
                })}                
            </Flex>
        </Box>
    )
}
