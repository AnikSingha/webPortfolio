import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link } from '@chakra-ui/react'
import { Spacer, Heading, HStack, Flex } from '@chakra-ui/layout'
import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from 'react-responsive'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link as ReactLink} from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function NavBar() {
  const isNotSmallerScreen = useMediaQuery({
    query: '(min-width: 800px)'
  })
  return (
    <HStack w="100%">
      <Flex>
        <HStack>
          <Heading size="md" fontWeight='semibold' ml="3">Anik Singha</Heading>
          <a href="https://www.linkedin.com/in/anik-singha/" target='_blank' rel="noreferrer">
            <IconButton icon={<FaLinkedin />} isRound='true' mt='1'></IconButton>
          </a>
          <a href="https://github.com/AnikSingha" target="_blank" rel="noreferrer">
            <IconButton icon={<FaGithub />} isRound='true' mt='1'></IconButton>
          </a>
        </HStack>
      </Flex>
      <Spacer/>
      {isNotSmallerScreen ? 
      <Breadcrumb spacing='7px' separator=' ' mt={1}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontWeight='semibold' as={ReactLink} to='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink fontWeight='semibold' as={ReactLink} to='/projects' mr={3}>Projects</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
      : 
      <Menu>
        <MenuButton>
          <IconButton mr="1" mt="1">
            <HamburgerIcon/>
          </IconButton>
        </MenuButton>
        <MenuList>
          <Link as={ReactLink} to='/'><MenuItem>Home</MenuItem></Link>
          <Link as={ReactLink} to='/projects'><MenuItem>Projects</MenuItem></Link>
        </MenuList>
      </Menu>
      }
      </HStack>
  )
};

export default NavBar
