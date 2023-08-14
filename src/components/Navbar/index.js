import './Navbar.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div className="Container">
            <div className='Navbar'>
                <a className='logo'><img src="https://nidcap.org/wp-content/uploads/2021/03/book.png" alt="Book list"/></a>
                <div>
                    <Router>
                        <ul className='menu'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                        </ul>

                        <Routes>
                            <Route exat path='/'>
                                
                            </Route>
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Navbar