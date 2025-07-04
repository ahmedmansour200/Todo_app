import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import ModeToggle from "./ModeToggle"
import { Button } from "./ui/button"

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
