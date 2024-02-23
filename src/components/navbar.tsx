import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <NavigationMenu className='my-2 px-32'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to="/" className='flex justify-center items-center'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <img src={logo} className="h-10 w-full" />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover-link`}>
                            Inicio
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover-link`}>
                            Nosotros
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover-link`}>
                            Servicios
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover-link`}>
                            Proyectos
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/">
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover-link`}>
                            Contacto
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>



    )
}

export default Navbar