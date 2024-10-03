import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link } from '@chakra-ui/react';
import { Spacer, Heading, HStack, Flex } from '@chakra-ui/layout';
import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from 'react-responsive';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import leetIcon from './images/leet.svg'; // Import your custom LeetCode icon

function NavBar() {
  const isNotSmallerScreen = useMediaQuery({
    query: '(min-width: 800px)'
  });

  return (
    <HStack w="100%">
      <Flex>
        <HStack>
          <Heading size="md" fontWeight='semibold' ml="3">Anik Singha</Heading>
          <a href="https://www.linkedin.com/in/anik-singha/" target='_blank' rel="noreferrer">
            <IconButton 
              icon={<FaLinkedin />} 
              isRound='true' 
              mt='1' 
              bg="transparent" 
              color="blue.300" 
              border="2px" 
              borderColor="blue.300" 
              _hover={{ 
                color: "blue.600", 
                borderColor: "blue.200", 
                transform: "scale(1.1)", 
                transition: "transform 0.2s ease" 
              }} 
              aria-label="LinkedIn"
            />
          </a>
          <a href="https://github.com/AnikSingha" target="_blank" rel="noreferrer">
            <IconButton 
              icon={<FaGithub />} 
              isRound='true' 
              mt='1' 
              bg="transparent" 
              color="indigo.50" 
              border="2px" 
              borderColor="indigo.600" 
              _hover={{ 
                color: "white", 
                borderColor: "white", 
                transform: "scale(1.1)", 
                transition: "transform 0.2s ease" 
              }} 
              aria-label="GitHub"
            />
          </a>
          <a href="https://leetcode.com/u/AnikSingha/" target="_blank" rel="noreferrer">
            <IconButton 
              icon={<img src={leetIcon} alt="LeetCode" style={{ width: '24px', height: '24px' }} />} 
              isRound='true' 
              mt='1' 
              bg="transparent" 
              border="2px" 
              borderColor="orange.400" 
              _hover={{ 
                borderColor: "white", 
                transform: "scale(1.1)", 
                transition: "transform 0.2s ease" 
              }} 
              aria-label="LeetCode"
            />
          </a>
        </HStack>
      </Flex>
      <Spacer />
      {isNotSmallerScreen ? 
        <Breadcrumb spacing='7px' separator=' ' mt={1}>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight='semibold' fontSize="1.1rem" as={ReactLink} to='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink fontWeight='semibold' fontSize="1.1rem" as={ReactLink} to='/projects'>Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem mr={0.5}>
            <BreadcrumbLink fontWeight='semibold' fontSize="1.1rem" as={ReactLink} to='/experience' mr={3}>Experience</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      : 
        <Menu>
          <MenuButton>
            <IconButton mr="1" mt="1" aria-label="Menu">
              <HamburgerIcon />
            </IconButton>
          </MenuButton>
          <MenuList
            bg="gray.800" 
            color="white"
            borderRadius="md"
            boxShadow="lg"
            zIndex="dropdown"
            padding="4"
          >
            <Link as={ReactLink} to='/'>
              <MenuItem 
                _hover={{ bg: "gray.600" }} 
                fontWeight='semibold'
                borderRadius="md"
              >
                Home
              </MenuItem>
            </Link>
            <Link as={ReactLink} to='/projects'>
              <MenuItem 
                _hover={{ bg: "gray.600" }} 
                fontWeight='semibold'
                borderRadius="md"
              >
                Projects
              </MenuItem>
            </Link>
            <Link as={ReactLink} to='/experience'>
              <MenuItem 
                _hover={{ bg: "gray.600" }} 
                fontWeight='semibold'
                borderRadius="md"
              >
                Experience
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      }
    </HStack>
  );
}

export default NavBar;



