import logo from "../assets/images/logo.svg";

const Loginuser = () => {
  return (
    <div className="min-h-screen sm:bg-gradient-to-bl from-white to-green-50 via-slate-50">
      <div className="max-w-3xl font-rubik mx-auto flex flex-col justify-center pt-10 items-center gap-4 max-sm:mx-3">
        <img src={logo} alt="logo" width={230} />
        <div>
          <h2 className="text-center font-medium text-slate-800 text-2xl">
            For Employee
          </h2>
          <p className="text-center mt-2 text-md max-w-md text-slate-600">
            Practice coding, prepare for interviews, and get hired.
          </p>
        </div>
      </div>
      <div className="flex max-w-3xl mx-auto max-sm:mt-8 mt-16 mb-4 h-auto font-rubik shadow-2xl max-[800px]:flex-col max-[800px]:mx-8">
        <div className="flex flex-col bg-[#002333] w-[35%]  justify-center px-7 gap-4 max-[800px]:w-full max-[800px]:py-6 max-[800px]:gap-5">
          <h2 className="text-white text-[26px] font-medium">
            Welcome Back to SkillFlow
          </h2>
          <div className="bg-[#00FF84] max-w-24 rounded-full h-2"></div>
          <h3 className="text-white text-[18px]">
            Sign in to continue to your account.
          </h3>
        </div>
        <div className="flex-1 px-8 font-rubik py-8">
          <h2 className="text-center  text-xl font-medium">
            Sign In to SkillFlow
          </h2>
          <div className="mt-10">
            <label htmlFor="empID" className="block text-lg">
              Employee ID
            </label>
            <input
              placeholder="Employee ID"
              type="text"
              className="py-2 w-full border-[1px] px-2 border-slate-500 outline-none mt-4 rounded-lg focus:border-coral-green"
              id="empID"
            />
            <label htmlFor="password" className="block mt-6 text-lg">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="py-2 w-full border-[1px] px-2 border-slate-500 outline-none rounded-lg mt-4 focus:border-coral-green"
              id="password"
            />
          </div>
          <div className="mt-4">
            <a className="text-slate-700 cursor-pointer hover:underline">
              Forgot password?
            </a>
          </div>
          <div>
            <button className="bg-coral-green font-medium hover:rounded-full text-white px-4 py-2 rounded-sm w-full mt-8">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginuser;