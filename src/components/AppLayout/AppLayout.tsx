import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Nav from '../NavBar/Nav'
import Footer from '../Footer/Footer'

interface AppLayoutProps {
  children: React.ReactElement
}

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <Nav />
      <Box bg={useColorModeValue(`rgba(255, 255, 255, 0.8)`, `rgba(26, 33, 42, 0.8)`)}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default AppLayout
