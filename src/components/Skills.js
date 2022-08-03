import {Text} from '@chakra-ui/layout'
import './css/Skills.css'

export default function Skills() {
  return (
    <div style={{marginTop: 50}} className='project'>
        <section className='section skills' id='skills'>
        <Text fontSize="5xl" fontWeight="bold" ml="0">Skills</Text>
        <ul className='skills__list'>
            <li className='skills__list-item btn btn--plain'>
                HTML
            </li>
            <li className='skills__list-item btn btn--plain'>
                CSS
            </li>
            <li className='skills__list-item btn btn--plain'>
                JavaScript
            </li
            ><li className='skills__list-item btn btn--plain'>
                Node.js
            </li>
            <li className='skills__list-item btn btn--plain'>
                React
            </li>
            <li className='skills__list-item btn btn--plain'>
                ExpressJS
            </li>
            <li className='skills__list-item btn btn--plain'>
                Python
            </li>
            <li className='skills__list-item btn btn--plain'>
                Flask
            </li>
            <li className='skills__list-item btn btn--plain'>
                PostgreSQL
            </li>
            <li className='skills__list-item btn btn--plain'>
                C++
            </li>
            <li className='skills__list-item btn btn--plain'>
                C#/Net
            </li>
        </ul>
        </section>
    </div>
  )
}
