import React from 'react'
import {
  Box,
  Button,
  CloseButton,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import ToggleTheme from './ToggleTheme'

function MobileNav({ links }: { links: any }): JSX.Element {
  const mobileNav = useDisclosure()
  return (
    <Box display={{ md: `none` }}>
      <ToggleTheme />

      <IconButton
        aria-label='toggle menu'
        icon={
          mobileNav.isOpen ? (
            <CloseButton style={{ zIndex: 20 }} aria-label='Close menu' />
          ) : (
            <AiOutlineMenu size='1.5em' />
          )
        }
        variant='ghost'
        onClick={mobileNav.isOpen ? mobileNav.onClose : mobileNav.onOpen}
      />

      <VStack
        pos='absolute'
        top={0}
        left={0}
        width='100vw'
        height='100vh'
        css={{
          backdropFilter: `saturate(180%) blur(5px)`,
          backgroundColor: useColorModeValue(`rgba(255, 255, 255, 0.9)`, `rgba(26, 32, 44, 0.9)`),
        }}
        display={mobileNav.isOpen ? `flex` : `none`}
        flexDirection='column'
        spacing={3}
        rounded='sm'
        shadow='sm'
      >
        <Link as={NextLink} href='/' passHref>
          <Button w='full' mt={16} variant='ghost'>
            Home
          </Button>
        </Link>

        {links.map((link: any, index: number) => {
          if (link.type === `dropdown`) {
            return link.links.map((item: any, i: number) => (
              <Link  key={`${i.toString()}link`} as={NextLink} href={item.link} passHref>
                <Button key={i.toString()} w='full' variant='ghost'>
                  {item.name}
                </Button>
              </Link>
            ))
          }
          return (
            <Link href={link.link} key={`${index.toString()}link`} as={NextLink} variant='ghost' passHref>
              <Button key={index.toString()} w='full' variant='ghost'>
                {link.name}
              </Button>
            </Link>
          )
        })}
      </VStack>
    </Box>
  )
}

export default MobileNav
