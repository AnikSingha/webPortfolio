import {Text} from '@chakra-ui/layout'
import './css/Skills.css'

export default function Skills() {
  return (
    <div style={{marginTop: 50}} className='project'>
        <section className='section skills' id='skills'>
        <Text fontSize="5xl" fontWeight="bold" ml="0">Skills</Text>
        <ul className='skills__list'>
            <li className='skills__list-item btn btn--plain'>
                AWS
            </li>
            <li className='skills__list-item btn btn--plain'>
                Full-Stack Development
            </li>
            <li className='skills__list-item btn btn--plain'>
                Devops
            </li>
            <li className='skills__list-item btn btn--plain'>
                CI/CD
            </li>
            <li className='skills__list-item btn btn--plain'>
                Python
            </li>
            <li className='skills__list-item btn btn--plain'>
                Javascript
            </li>
            <li className='skills__list-item btn btn--plain'>
                Golang
            </li>
            <li className='skills__list-item btn btn--plain'>
                Node.js
            </li>
            <li className='skills__list-item btn btn--plain'>
                React
            </li>
            <li className='skills__list-item btn btn--plain'>
                Flask
            </li>
            <li className='skills__list-item btn btn--plain'>
                FastAPI
            </li>
            <li className='skills__list-item btn btn--plain'>
                PostgreSQL
            </li>
            <li className='skills__list-item btn btn--plain'>
                MongoDB
            </li>
            <li className='skills__list-item btn btn--plain'>
                Docker
            </li>
        </ul>
        </section>
    </div>
  )
}
