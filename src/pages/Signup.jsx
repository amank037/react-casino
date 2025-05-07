import loginImg from '../assets/login.jpeg';

const Signup = () => {
  return (
    <div className=" px-60 bg-gray-600 relative">
      <div className="absolute top-4 right-4 text-sm text-yellow-400 cursor-pointer">
        Contact Online CS
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="flex w-[90%] h-[600px] border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="w-[30%] p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

            <input
              type="text"
              placeholder="User ID (4-15 char, allow number)"
              maxLength={25}
              className="mb-4 p-2 border border-gray-300 rounded w-full lowercase"
              required
            />

            <input
              type="password"
              placeholder="Password (8-20 char)"
              minLength={6}
              maxLength={20}
              className="mb-4 p-2 border border-gray-300 rounded w-full"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              minLength={8}
              className="mb-4 p-2 border border-gray-300 rounded w-full"
              required
            />

            <select
              className="mb-4 p-2 border border-gray-300 rounded w-full"
              required
            >
              <option value="BDT">BDT</option>
            </select>

            <input
              type="text"
              placeholder="Refer Code (optional)"
              minLength={6}
              maxLength={20}
              className="mb-4 p-2 border border-gray-300 rounded w-full"
            />

            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
              Sign Up
            </button>

            <p className="text-sm mt-4">
              Already have an account?{' '}
              <span className="text-blue-600 cursor-pointer">Login</span>
            </p>
          </div>

          <div className="h-full p-6">
            <img
              src={loginImg}
              alt="Signup Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
