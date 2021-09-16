// previously tools - change here to make it have selfhosted sites

import React from 'react'
import {
  Flex,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import LineHeading from '@/components/LineHeading'
import ToolGrid from '@/components/ToolGrid'
import { AiFillVideoCamera, AiFillDatabase, AiFillTool, AiFillAppstore } from 'react-icons/ai'
import { FaGamepad } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

function Tools(): React.ReactElement {
  return (
    <>
      <NextSeo title='Selfhost' />
      <Flex direction='column' alignItems='center' width='full' minH='100vh' mx='auto' maxW='6xl'>
        <LineHeading
          mt='28'
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign='center'
        >
          Selfhost
        </LineHeading>
        <Text mt={3}>Some stuff that I selfhost on a docker container at my home :).</Text>
        <Tabs variant='soft-rounded' colorScheme='blue' align='center' w='100%' mt='10' mb='24'>
          <TabList display='flex' flexWrap='wrap'>
            <Tab
              bg={useColorModeValue(`white.100`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `red.800`,
                bg: `red.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiFillAppstore} />
                <Text>All</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `pink.800`,
                bg: `pink.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiFillVideoCamera} />
                <Text>Media</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `purple.800`,
                bg: `purple.100`,
              }}
              mr={2}
              mt={2}
              s
            >
              <HStack spacing={1}>
                <Icon as={AiFillDatabase} />
                <Text>Downloaders</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `teal.800`,
                bg: `teal.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiFillTool} />
                <Text>Tools</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `teal.800`,
                bg: `teal.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={FaGamepad} />
                <Text>Games</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ToolGrid filter='all' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='media' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='downloaders' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='tools' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='games' />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  )
}

export default Tools
