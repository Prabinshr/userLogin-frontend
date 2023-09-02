import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa6";
import { baseUrl } from "../utils/constant";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      
      email,
      password,
    };

    axios
      .post(`${baseUrl}/auth/register`, payload)
      .then((res) => {
        toast.success(
          <div>
            Account Created Successfully <br />
            Please Login
          </div>
        );
        router.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-[1fr,30%]">
      {/* left */}
      <div className="h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="text-accent font-bold text-4xl">Login to your Account</h1>
          <div className="flex items-center gap-8 pt-8 w-fit mx-auto">
            <div className="icon__wrapper">
              <FaFacebookF />
            </div>
            <div className="icon__wrapper">
              <FaGoogle />
            </div>
            <div className="icon__wrapper">
              <FaInstagram />
            </div>
          </div>

          <p className="pt-8 text-[13px] text-gray-400">
            Or user your email account for Login.
          </p>

          <form onSubmit={handleSubmit} className="flex w-[300px] mx-auto flex-col pt-2 gap-2">
            <input
              type="text"
              placeholder="Email"
              className="input__style"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input__style"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="py-4">Forget your password</p>

            <button className="uppercase bg-accent hover:bg-accentDark px-4 py-2">
              Log In
            </button>
          </form>
        </div>
      </div>

      {/* right */}
      <div className="bg-accent h-screen grid place-items-center">
        <div className="text-center w-full text-white space-y-8">
          <h2 className="font-bold text-4xl">Welcome Back!</h2>
          <div className="text-[#eeeeee] w-fit mx-auto">
            <p>Create an Account</p>
            <p>please sign up with your personal info</p>

            <Link href="/signup">
              <button className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
