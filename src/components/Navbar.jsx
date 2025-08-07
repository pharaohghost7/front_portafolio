import { Link, useLocation } from "react-router-dom"

export const Navbar = () => {
    const location = useLocation();
  return (
    <header className="bg-[#10433B] text-[#E47A5D] p-4">
      <nav className="flex flex-col md:flex-row justify-around"> 
        <Link to="/front_portafolio" className="text-2xl font-bold mb-4 md:mb-0">
          Fuindein 
        </Link>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li>
                <Link to="/front_portafolio" className={location.pathname === '/front_portafolio'?'text-[#ECBD47]':'text-[#E47A5D]'}>Inicio</Link>
            </li>
            <li>
                <Link to="/about" className={location.pathname === '/about'? 'text-[#ECBD47]':'text-[#E47A5D]'}>Sobre mí</Link>
            </li>
            <li>
                <Link to="/projects" className={location.pathname === '/projects'? 'text-[#ECBD47]':'text-[#E47A5D]'}>Proyectos</Link>
            </li>
        </ul>
        </nav>
        </header>
  )
}
