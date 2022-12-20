import React from 'react'
import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Link,
} from '@chakra-ui/react'
import colors from 'simple-color-functions';
import NextLink from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ToggleTheme from './ToggleTheme'

function DesktopNav({ links }: { links: any }): JSX.Element {
  const { colorMode } = useColorMode()

  return (
    <HStack spacing={8} display={{ base: `none`, md: `flex` }}>
      {links.map((linkItem: any, index: number) => {
        if (linkItem.type !== `dropdown`) {
          return (
              <Link as={ NextLink } passHref
                href={linkItem.link}
                key={index.toString()}
                color={colorMode === 'light' ? `gray.800` : `white`}
                fontSize='lg'
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
                }}
              >
                {linkItem.name}
              </Link>
          )
        }
        if (linkItem.type === `dropdown`) {
          return (
            <Menu key={index.toString()}>
              <MenuButton
                key={index.toString()}
                color={colorMode === 'light' ? `gray.800` : `white`}
                fontSize='lg'
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
                    width: `75%`,
                  },
                  color: colorMode === 'light' ? `gray.800` : `white`,
                }}
              >
                {linkItem.name}
                <Icon as={ChevronDownIcon} />
              </MenuButton>
              <MenuList>
                {linkItem.links.map((item: any, i: number) => (
                    <MenuItem as={NextLink} href={item.link} sx={{ cursor: `pointer` }} key={i.toString()} passHref>
                      {item.name}
                    </MenuItem>
                ))}
              </MenuList>
            </Menu>
          )
        }
        return null
      })}
      <HStack spacing={2}>
        <ToggleTheme />
      </HStack>
    </HStack>
  )
}

export default DesktopNav
