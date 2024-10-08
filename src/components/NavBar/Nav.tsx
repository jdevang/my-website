import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link,
  chakra,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useRouter } from 'next/router';
import colors from 'simple-color-functions';
import styled from '@emotion/styled';

const links = [
  {
    name: `Projects`,
    link: `/projects`,
  },
  {
    name: `Music`,
    link: `/spotify`,
  },
  {
    name: `Research`,
    // link: `https://portfolio.junglesucks.com`,
    link: `/research`
  },
  {
    name: `Résumé`,
    // link: `https://portfolio.junglesucks.com`,
    link: `./static/Devang_Jayachandran_resume.pdf`
  },
  // {
  //   type: `dropdown`,
  //   name: `More`,
  //   links: [
  //     {
  //       name: `Blog`,
  //       link: `https://ghost.jdevang.com`,
  //     },
  //     // {
  //     //   name: 'JGEZ',
  //     //   // link: `https://jgez.junglesucks.com`,
  //     //   link: `/jgez`
  //     // }
  //   ],
  // },
];

function Nav(): JSX.Element {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [width, setWidth] = useState(0);

  return (
    <chakra.header
      width='full'
      position='fixed'
      _before={{
        transition: 'all 0.10s',
        transitionTimingFunction: '1 100 10 10',
        content: '""',
        width: width + '%',
        top: 0,
        left: 0,
        height: '6px',
        bg: useColorModeValue('brand.500', 'brand.300'),
        position: 'absolute',
        zIndex: 9999,
      }}
      top={0}
      left={0}
      zIndex={10}
      bg={useColorModeValue(`rgba(255, 255, 255, 0.8)`, `rgba(26, 33, 41, 0.8)`)}
      sx={{ backdropFilter: `saturate(180%) blur(5px)` }}
    >
      <chakra.nav mx='auto' p={3}>
        <Flex
          margin='auto'
          justifyContent='space-between'
          alignContent='center'
          maxW='7xl'
          width='full'
        >
          <Box display='flex' alignContent='center'>
              {router.asPath === '/' ? (
                <AnimatedTitle />
              ) : (
                <Link as={ NextLink } href='/' passHref
                  fontSize='lg'
                  margin='auto'
                  fontWeight='semibold'
                  position='relative'
                  textTransform='capitalize'
                  _after={{
                    transition: `all 0.25s ease-in-out`,
                    content: `''`,
                    /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                    outline: `1px solid transparent`,
                    width: `0%`,
                    height: `25%`,
                    position: `absolute`,

                    bottom: 1,
                    left: 0,
                    bg:
                      colorMode === 'light'
                        ? colors(`brand.500`).alpha(0.46)
                        : colors(`brand.500`).alpha(0.36),
                    zIndex: -1,
                  }}
                  _hover={{
                    _after: {
                      width: `100%`,
                    },
                    color: colorMode === 'light' ? `gray.900` : `white`,
                  }}
                  color={colorMode === 'light' ? 'gray.900' : 'white'}
                >
                  Devang Jayachandran
                </Link>
              )}
          </Box>
          <MobileNav links={links} />
          <DesktopNav links={links} />
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;

const AnimatedTitle = () => (
  <CustomLink as={ NextLink } href='/' passHref
    color={useColorModeValue('gray.900', 'white')}
    position='relative'
    fontSize='2xl'
    fontWeight='semibold'
    textAlign='center'
  >
    Devang Jayachandran
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <chakra.svg
      className='path-under'
      position='absolute'
      height='27px'
      bottom={'-14px'}
      left={'-15px'}
      transition={'all 0.2s'}
      transitionTimingFunction='spring(1 10 10 10)'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 265 43'
      fill='none'
      stroke={useColorModeValue('brand.600', 'brand.300')}
      strokeWidth='5px'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
    >
      <path
        className='animated-underline'
        d='M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6'
      ></path>
    </chakra.svg>
  </CustomLink>
);

const CustomLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
  &:hover .path-under {
    transform: translateY(6px);
  }
`;
