import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-bold text-center">Hello 😚</h1>
      <p className="text-center text-gray-500">To use the app you need to sign up</p>
      <SignUp
        appearance={{
          elements: {
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            footerAction: "hidden",
          }
        }}
        afterSignOutUrl="/"   
      />
    </div>
  )
  
}