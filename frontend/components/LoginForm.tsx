const LoginForm: React.FunctionComponent<any> = ({ formik }) => {
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <img src=".././hero.jpg" className="w-1/2 h-full" alt="" />
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex rounded-lg w-1/2 font-latoRegular"
      >
        <div className="flex-1 text-gray-700  p-20">
          <h1 className="text-3xl pb-2 font-latoBold text-center">Login👋</h1>

          <div className="mt-6  px-8">
            {/* Name input field */}
            <div className="pb-4">
              <label
                htmlFor="name"
                className={`block font-latoBold text-sm pb-2  `}
              ></label>
              <p className="text-sm font-latoBold text-red-400 "></p>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                type="text"
                name="email"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <label
                htmlFor="email"
                className={`block font-latoBold text-sm pb-2 `}
              ></label>

              <p></p>
              <input
                className="border-2 w-full border-gray-500 p-2 rounded-md  focus:border-teal-500 focus:ring-teal-500"
                type="password"
                name="password"
                placeholder="Enter your email address"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            {/* Country input field */}

            {/* Terms of service*/}

            <button
              type="submit"
              className="bg-black font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start learning today!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
