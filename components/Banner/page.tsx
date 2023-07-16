"use client"

import Image from 'next/image';
import { Heading, Flex, Box } from '@chakra-ui/layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetSize from '../../hooks/GetSize/GetSize';

export default function Banner() {

    const isMobile = GetSize();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Box w={`100%`} overflow={`hidden`}>
            <Slider {...settings} m={`unset`} w={`100%`}>
                <Flex position={`relative`} w={`100%`}>
                    <Box position={`absolute`} h={`100%`} w={[`100%`, `400px`]} mx={[`unset`, `10rem`]} px={[`1.5rem`, `unset`]} display={`flex`} flexDirection={`column`} justifyContent={`center`}>
                        <Heading color={`#FFFFFF`} fontFamily={`Nunito`} fontSize={`20px`} mb={`1rem`}>
                            ¡Hola! ¿Qué es lo que buscas?
                        </Heading>
                        <Heading color={`#FFFFFF`} fontFamily={`Nunito`} fontWeight={`800`}>
                            Crear o migrar tu comercio electrónico?
                        </Heading>
                    </Box>
                    <Box w={`100%`}>
                        {isMobile.width < 797 ? 
                            <Image 
                                src={`/banner-1_mobile.png`}
                                alt={`Main banner 1`}
                                width={415}
                                height={208}
                            /> :
                            <Image 
                                src={`/banner-1_desktop.png`}
                                alt={`Main banner 1`}
                                width={1600}
                                height={533}
                            /> }                       
                    </Box>
                </Flex>
                <Flex position={`relative`} w={`100%`}>
                    <Box position={`absolute`} h={`100%`} w={[`100%`, `400px`]} mx={[`unset`, `10rem`]} px={[`1.5rem`, `unset`]} display={`flex`} flexDirection={`column`} justifyContent={`center`}>
                        <Heading color={`#FFFFFF`} fontFamily={`Nunito`} fontSize={`20px`} mb={`1rem`}>
                            ¡Hola! ¿Qué es lo que buscas?
                        </Heading>
                        <Heading color={`#FFFFFF`} fontFamily={`Nunito`} fontWeight={`800`}>
                            Crear o migrar tu comercio electrónico?
                        </Heading>
                    </Box>
                    <Box w={`100%`}>
                        {isMobile.width < 797 ? 
                            <Image 
                                src={`/banner-1_mobile.png`}
                                alt={`Main banner 1`}
                                width={415}
                                height={208}
                            /> :
                            <Image 
                                src={`/banner-1_desktop.png`}
                                alt={`Main banner 1`}
                                width={1600}
                                height={533}
                            /> }                       
                    </Box>
                </Flex>
            </Slider>            
        </Box>

    )
}
