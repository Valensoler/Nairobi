import { click } from '@testing-library/user-event/dist/click'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className = "NavBar" >
            <div> 
                <button onClick = {() => console.log('hice click en remeras')}> Remeras </button>
                <button onClick = {() => console.log('hice click en tops')}> Tops </button>
                <button onClick = {() => console.log('hice click en pantalones')}> Pantalones </button>
                <button onClick = {() => console.log('hice click en shorts')}> Shorts </button>
                <button onClick = {() => console.log('hice click en polleras')}> Polleras </button>
                <button onClick = {() => console.log('hice click en abrigos')}> Buzos y camperas </button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar