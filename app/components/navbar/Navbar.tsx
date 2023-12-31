'use client'
// import { User } from "@prisma/client" replaced with SafeUser
import Logo from "../navbar/Logo"
import Container from "../Container"
import Search from "../navbar/Search"
import UserMenu from "../navbar/UserMenu"
import { SafeUser } from "@/app/types/index"
import Categories from "./Categories"

interface NavbarProps {
    currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) =>{
    return(
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div
            className="
            py-4
            border-b-[1px]
            "
            >
                <Container>
                    <div
                        className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                        "
                    >
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    )
}

export default Navbar