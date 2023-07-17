import React from 'react';
import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';

const StarRating = ({ rating }) => {

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} className="star filled">
            <Image 
            src={`/star-filled.png`}
            alt={`${stars} estrellas`}
            width={16}
            height={16}/>
        </span>);
    } else {
      stars.push(
        <span key={i} className="star">
            <Image 
                src={`/star.png`}
                alt={`${stars} estrellas`}
                width={16}
                height={16}/>
        </span>);
    }
  }

  console.log(stars)

  return <Flex>{stars}</Flex>;
};

export default StarRating;