import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'


function Navbar() {

    //SETTA UMA FUNÇÃO PARA TODO serClickFunction passando um isClikedValue
    const[isClickedValue, setClickFunction] = useState(false)

    //DEFINE OS CLIQUES DE CADA INTERAÇÃO COM O VALOR DE isClikedValue
    const openMobileMenu = () => {setClickFunction(!isClickedValue)}
    const closeMobileMenu = () => {setClickFunction(false)}

    //  =======================================
    // | PARTE DE RESPONSIVIDADE VIA REACT JS |
    // =======================================
    //DEFINO UMA FUNÇÃO setButton PASSANDO UMA const button
    const[button, setButton] = useState(true) // esse button é o de lá de baixo com o: button &&

    //CRIO UMA FUNÇÃO QUE VAI SABER QUAL O TAMANHO DA JANELA E IRÁ CHAMAR A FUNÇÃO setButton() anteriormente criada passando um valor true ou false
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton()
    }, [])


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <p className="mr-2">Titan Face</p> <i class="fas fa-grin-tongue"></i>
                </Link>
                <div className="menu-icon" onClick={openMobileMenu}>
                    <i className={isClickedValue ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isClickedValue ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/turn-titan' className='nav-links' onClick={closeMobileMenu}>
                            Virar Titan
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/listen-snk' className='nav-links' onClick={closeMobileMenu}>
                            Musicas de SNK
                        </Link>
                    </li>

                    {
                        !button && 
                        <li className='nav-item'>
                            <a className='nav-links' rel="noreferrer" href="https://attackontitan.fandom.com/pt-br/wiki/Attack_on_Titan_Wiki" target="_blank">
                                <Button type="button" onClick={closeMobileMenu} buttonMargin='mt-0' buttonSize='btn--large' buttonStyle="btn--primary">
                                    VER WIKI
                                </Button>
                            </a>
                        </li>
                    }

                </ul>

                {//SE A VARIAVEL BUTTON FOR TRUE VAI APARECER OQ VEM APÓS DOS &&
                    button && 
                    <a rel="noreferrer" href="https://attackontitan.fandom.com/pt-br/wiki/Attack_on_Titan_Wiki" target="_blank">
                        <Button type="button" onClick={closeMobileMenu}>
                            VER WIKI
                        </Button>
                    </a>
                }


            </div>
        </nav>
    )
}

export default Navbar
