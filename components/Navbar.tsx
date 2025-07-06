import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import ModeToggle from "./ModeToggle"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4">
        <ModeToggle />
        <div>
           <SignedOut>
            <div className="flex items-center gap-2">
              <SignInButton>
                <Button variant={"secondary"} className="text-xs first-letter:uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button variant={"secondary"} className="text-xs first-letter:uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Sign Up
                </Button>
              </SignUpButton>

            </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar
