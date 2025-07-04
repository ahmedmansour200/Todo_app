import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
<div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
  <div className="w-full max-w-md flex flex-col justify-center items-center bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10 border border-gray-200 dark:border-gray-700">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
        Welcome Back!
      </h1>
      <p className="text-gray-500 dark:text-gray-300 text-base">
        Sign in to your Todo App account
      </p>
    </div>
    <div className="flex flex-col gap-6">
      <SignIn
        appearance={{
          elements: {
            card: "shadow-none bg-black p-20  dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700",
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-4",
            formFieldInput: "border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white",
            footerAction: "text-sm text-gray-500 dark:text-gray-400 mt-6",
          },
        }}
        afterSignOutUrl="/"
      />
    </div>
  </div>
</div>

  ) 
  
}