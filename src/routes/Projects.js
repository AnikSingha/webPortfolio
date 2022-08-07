import ProjectContainer from '../components/ProjectContainer.js'
import MobileProjectContainer from '../components/MobileProjectContainer.js'
import { useMediaQuery } from '@chakra-ui/react'

export default function Projects() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:1025px)")
    return (
        <div>
            {isNotSmallerScreen ? <ProjectContainer/> : <MobileProjectContainer/>}
        </div>
    )
}