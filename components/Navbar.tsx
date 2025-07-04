import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import ModeToggle from "./ModeToggle"

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between p-4  text-white">
        <ModeToggle />
            <SignedIn >
              <UserButton />
            </SignedIn>
        <SignedOut>
              <SignInButton />
            </SignedOut>
    </nav>
  )
}

export default Navbar
