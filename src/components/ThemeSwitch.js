import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { FaSun, FaMoon } from 'react-icons/fa'
import { IconButton } from "@chakra-ui/button";

function ThemeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <IconButton mt={1.5} align='center' mr={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
    )
}

export default ThemeSwitch