import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import ThemeSwitch from './ThemeSwitch'
import { Spacer, Heading, HStack } from '@chakra-ui/layout'
import { IconButton } from "@chakra-ui/button";
import { FaGithub, FaLinkedin } from 'react-icons/fa'


//ADD ROUTING LATER

function NavBar() {
  return (
    <HStack w="97%">
      <HStack mr="1000" mt="1.5">
        <Heading size="md" fontWeight='semibold'>Anik Singha</Heading>
        <a href="https://www.linkedin.com/in/anik-singha/" target='_blank' rel="noreferrer">
          <IconButton icon={<FaLinkedin />} isRound='true' ></IconButton>
        </a>
        <a href="https://github.com/AnikSingha" target="_blank" rel="noreferrer">
          <IconButton icon={<FaGithub />} isRound='true' href=""></IconButton>
        </a>
      </HStack>
      <Spacer/>
      <Breadcrumb spacing='7px' separator=' ' mt={1}ml={1125}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' fontWeight='semibold'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#' fontWeight='semibold'>Projects</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#' fontWeight='semibold'>Contact</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
      <Spacer/>
      </HStack>
  )
};

export default NavBar