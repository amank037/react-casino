import loginImg from '../assets/login.jpeg'

const Login = () => {
  return (
    <div className="px-60 bg-gray-600 relative">
      <div className="absolute top-4 right-4 text-sm text-yellow-400 cursor-pointer">
        Contact Online CS
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="flex w-[90%] h-[600px] border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="w-[30%] p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>

            <input
              type="text"
              placeholder="User ID"
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            />

            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
              Enter
            </button>

            <p className="text-sm mt-4">
              Don’t have an account? <span className="text-blue-600 cursor-pointer">Sign Up</span>
            </p>
            <p className="text-xs text-gray-600 mt-2 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>

          <div className="h-full p-6">
            <img
              src={loginImg}
              alt="Login Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login