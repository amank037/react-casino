import loginImg from "../assets/login.jpeg";

const Signup = () => {
  return (
    <div className="p-28 bg-[#4b4b4b] flex items-center justify-center relative">
      <div className="border-4 border-blue-500 p-8 flex justify-between h-[600px] w-[1200px] shadow-xl">
        {/* Left Side - Signup Form */}
        <div className="pr-3 flex flex-auto flex-col justify-between">
          <div>
            <h2 className="text-yellow-400 text-center text-xl font-bold border-b border-yellow-400 pb-2 mb-6">
              Sign Up
            </h2>

            <label className="text-white block mb-1">User ID</label>
            <input
              type="text"
              placeholder="4-15 char; allow number"
              maxLength={25}
              className="w-full p-2 bg-[#3d3d3d] text-white rounded mb-4 lowercase"
              required
            />

            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              placeholder="8-20 char"
              minLength={6}
              maxLength={20}
              className="w-full p-2 bg-[#3d3d3d] text-white rounded mb-4"
              required
            />

            <label className="text-white block mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
              minLength={8}
              className="w-full p-2 bg-[#3d3d3d] text-white rounded mb-4"
              required
            />

            <label className="text-white block mb-1">Currency</label>
            <select
              className="w-full p-2 bg-[#3d3d3d] text-white rounded mb-4"
              required
            >
              <option value="BDT">BDT</option>
            </select>

            <label className="text-white block mb-1">Refer Code <span className="text-gray-400">(optional)</span></label>
            <input
              type="text"
              placeholder="Enter if any"
              minLength={6}
              maxLength={20}
              className="w-full p-2 bg-[#3d3d3d] text-white rounded mb-4"
            />
          </div>

          <div className="flex justify-end">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl pb-1 flex items-center justify-center">→</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="bg-black w-[734px] flex items-center justify-center">
          <img src={loginImg} alt="Signup Visual" className="" />
        </div>
      </div>

      {/* Top Info Text */}
      <p className="absolute top-[-1.875rem] text-white text-sm">
        If you encounter issues, please contact
        <span className="text-red-500 ml-1">Online CS</span>
      </p>
    </div>
  );
};

export default Signup;
