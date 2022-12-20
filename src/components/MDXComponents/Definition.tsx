import { chakra, Tooltip, useColorModeValue } from '@chakra-ui/react'

import colors from 'simple-color-functions';

// interface DefinitionProps {
//   link?: string;
//   definition: string;
//   term: string;
// }

// export const Definition = ({
//   link,
//   term,
//   definition,
// }: DefinitionProps): React.ReactElement => {
//   if (link) {
//     return (
//       <Link href={link} passHref>
//         <ChakraLink>
//           <DefinitionStyles {...{ term, definition, link }} />
//         </ChakraLink>
//       </Link>
//     );
//   }
//   return <DefinitionStyles {...{ term, definition }} />;
// };

interface DefinitionStylesProps {
  term: string
  definition: string
  link?: string
}

export const Definition = ({ term, definition, link }: DefinitionStylesProps): JSX.Element => {
  return (
    <Tooltip
      placement={'top'}
      label={definition}
      hasArrow
      bg={useColorModeValue('brand.50', '#314044')}
      color={useColorModeValue('brand.900', 'brand.200')}
      fontWeight='semibold'
      fontSize='md'
      py={1}
      px={2}
      borderRadius={'lg'}
    >
      <chakra.a
        lineHeight={3}
        as={link ? 'a' : 'span'}
        href={link ? link : null}
        bg={useColorModeValue('brand.50', colors('brand.200').alpha(0.16))}
        borderRadius={'md'}
        _hover={{ cursor: link ? 'pointer' : 'normal' }}
        px={2}
        pl={'18px'}
        mr={'1px'}
        position='relative'
        verticalAlign='middle'
        color={useColorModeValue('brand.900', 'brand.200')}
        fontWeight='semibold'
      >
        <chakra.span
          position='absolute'
          top={0}
          left={'6px'}
          transform={'translateY(110%)'}
          height='7px'
          width='7px'
          borderRadius='50%'
          display='inline-flex'
          mr={1}
          my={'auto'}
          verticalAlign={'middle'}
          bg={useColorModeValue('brand.800', 'brand.200')}
        />
        {term}
      </chakra.span>
    </Tooltip>
  )
}
