import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Spacer, Heading, HStack } from '@chakra-ui/layout'
import { IconButton } from "@chakra-ui/button";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ThemeSwitch from './ThemeSwitch.js'


function NavBar() {
  return (
    <HStack w="98%">
      <HStack mr="1000" mt="1.5" >
        <Heading size="md" fontWeight='semibold'>Anik Singha</Heading>
        <a href="https://www.linkedin.com/in/anik-singha/" target='_blank' rel="noreferrer">
          <IconButton icon={<FaLinkedin />} isRound='true' mt='1'></IconButton>
        </a>
        <a href="https://github.com/AnikSingha" target="_blank" rel="noreferrer">
          <IconButton icon={<FaGithub />} isRound='true' mt='1'></IconButton>
        </a>
      </HStack>
      <Spacer/>
      <Breadcrumb spacing='7px' separator=' ' mt={1} ml={1150}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontWeight='semibold' as={Link} to='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink fontWeight='semibold' as={Link} to='/projects'>Projects</BreadcrumbLink>
        </BreadcrumbItem>


      </Breadcrumb>
      <ThemeSwitch />
      </HStack>
  )
};

export default NavBar