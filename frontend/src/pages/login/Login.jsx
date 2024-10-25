const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-purple-300"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
            />
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-purple-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 btn-secondary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE FOR THE LOGIN

// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-gray-100">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login
//             <span className="text-purple-300"> ChatApp</span>
//           </h1>

//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter username"
//                 className="input input-bordered w-full h-10"
//               />
//             </div>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter username"
//                 className="input input-bordered w-full h-10"
//               />
//             </div>

//             <a href="#" className="text-sm hover:underline hover:text-purple-500 mt-2 inline-block">
//               {"Don't"} have an account?
//             </a>

//             <div>
//             <button className="btn btn-block btn-sm mt-2 btn-secondary">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
