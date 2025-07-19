import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { setUser, fetchUser } = useAuth();

  const onSubmit = async (data) => {
    if (data.password != data.confirmPassword) {
      toast.error("Password does not match!");
      return;
    }
    try {
      await api.post("/user", data).then((res) => {
        toast.success(res.data.message);
        fetchUser();
        setUser(res.data);
        navigate("/", { replace: true });
      });
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#264653] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-[#264653]">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#264653] mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                name="username"
                {...register("username")}
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-[#264653] rounded-md focus:outline-none focus:ring-[#2a9d8f] focus:border-[#2a9d8f] focus:z-10 sm:text-sm"
                placeholder="Your full name"
              />
            </div>
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
                type="email"
                {...register("email")}
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
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-[#264653] rounded-md focus:outline-none focus:ring-[#2a9d8f] focus:border-[#2a9d8f] focus:z-10 sm:text-sm"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-[#264653] mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                {...register("confirmPassword")}
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-[#264653] rounded-md focus:outline-none focus:ring-[#2a9d8f] focus:border-[#2a9d8f] focus:z-10 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2a9d8f] hover:bg-[#21867a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a9d8f]"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <span className="text-[#264653]">Already have an account? </span>
          <Link
            to={"/login"}
            className="font-medium text-[#2a9d8f] hover:text-[#21867a]"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
