import api from "../api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await api
      .post("/user/login", data)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error(
          err.response?.data?.message || "Login failed. Please try again."
        );
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#264653] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-[#264653]">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#264653] mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                {...register("email")}
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-[#264653] rounded-md focus:outline-none focus:ring-[#2a9d8f] focus:border-[#2a9d8f] focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#264653] mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                {...register("password")}
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-[#264653] rounded-md focus:outline-none focus:ring-[#2a9d8f] focus:border-[#2a9d8f] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#2a9d8f] focus:ring-[#2a9d8f] border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-[#264653]"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#2a9d8f] hover:text-[#21867a]"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2a9d8f] hover:bg-[#21867a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a9d8f]"
            >
              Sign in
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-[#264653]">Don't have an account? </span>
            <Link
              to="/register"
              className="font-medium text-[#2a9d8f] hover:text-[#21867a]"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
