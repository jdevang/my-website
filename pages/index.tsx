import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  useColorModeValue,
  Skeleton,
  Link,
  // useBreakpoint,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <>
      <NextSeo title='Home' />

      <Box
        minH='100vh'
        height='full'
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW='7xl'
        mx='auto'
        pt={{ base: '28', sm: '14', md: '16', xl: '20' }}
      >
        {/* Im not actually too sure why this needs to be here, but without this additional flex
        the body doesn't begin at the top of the page... */}
        <Flex
          direction='column'
          justifyContent={{ base: 'center', md: 'flex-start' }}
          height='full'
          width='full'
          p={{ base: 0, sm: 16 }}
        >
          <Flex
            direction={{ base: `column`, lg: `row` }}
            alignItems='center'
            mx='auto'
            my={{ xl: '16' }}
          >
            <Image
              flexGrow={3}
              borderRadius='2xl'
              boxSize='250px'
              src='./static/images/profile.jpg'
              objectFit='cover'
              alt='Devang'
              onLoad={() => setImageLoad(true)}
            />
            <Flex
              alignSelf='center'
              direction='column'
              pl={{ base: 0, lg: 10 }}
              my={{ base: 10, lg: 0 }}
              flexGrow={1}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`
                )}, ${useColorModeValue(`teal.600`, `teal.400`)}, ${useColorModeValue(
                  `blue.600`,
                  `blue.300`
                )})`}
                className='moving-grad'
                bgClip='text'
                fontSize={{ base: `5xl`, lg: `7xl` }}
                textAlign={{ base: `center`, lg: `left` }}
              >
                Devang Jayachandran
              </Heading>
              <chakra.p
                maxW='650px'
                textAlign={{ base: `center`, lg: `left` }}
                fontSize='xl'
                mt={2}
              >
                Welcome to my website!
                You can see what{' '}
                <Link as={NextLink} href='/spotify' passHref>
                music
                </Link>{' '}
                I like
                & my github {' '}
                <Link as={NextLink} href='/projects' passHref>
                projects
                </Link>{' '}. Also check out my {' '}
                <Link as={NextLink} href='/portfolio' passHref>
                portfolio
                </Link>{' '}
                or  {' '}
                <Link as={NextLink} href='/about' passHref>
                contact 
                </Link>{' '}
                me to know more.
              </chakra.p>
            </Flex>
            <Image
              flexGrow={3}
              borderRadius='2xl'
              boxSize='250px'
              src='./static/images/profile.gif'
              objectFit='cover'
              alt='Devang'
              onLoad={() => setImageLoad(true)}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
