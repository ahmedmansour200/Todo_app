import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className="flex flex-col justify-center items-center gap--2 pt-2">
      <h1 className="text-2xl font-bold text-center">Hello 😚</h1>
      <p className="text-center text-gray-500">To use the app you need to sign in</p>
      <SignIn
        appearance={{
          elements: {
            // card: "bg-blue-50 dark:bg-gray-800 shadow-lg rounded-3xl p-8",
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            // formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-4",
            // formFieldInput: "border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white",
            footerAction: "hidden",
          }
        }}
        afterSignOutUrl="/"
      />
    </div>

  ) 
  
}