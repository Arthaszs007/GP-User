"use client";
import RegisterForm from "@/components/login/registerForm";
import SigninForm from "@/components/login/signinForm";
import { setErrorToast } from "@/redux/feathers/errorToast_slice";
import { AppDispatch } from "@/redux/store";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  // get dispatch from redux store
  const dispatch = useDispatch<AppDispatch>();
  //get router
  const router = useRouter();
  //get session
  const { data: session } = useSession();

  //execute the submit with third-party authorized
  const handleSubmitThirdParty = async (provider: string) => {
    const result = await signIn(provider, { redirect: false });
    if (result?.error) {
      console.error(`${name} authorized is failed`);
      return;
    }
  };

  //minitor session,if exist, auto to push to main page
  useEffect(() => {
    // set the error toast config
    if (session) {
      dispatch(
        setErrorToast({
          isActive: true,
          content: "Sign in successsfully",
          color: "alert-success",
        })
      );

      router.push("/pages/main");
    }
  }, [session]);

  return (
    <div className="h-screen flex justify-center ">
      <div className=" w-[70rem] h-full bg-base-200 flex flex-col">
        <Link className="link mt-8 ml-10" href="/pages/main">
          &lt; Take me back to the main page
        </Link>
        <div className="flex flex-row w-full h-[42rem] space-x-[10rem] items-center justify-center mb-20">
          <div className="w-[22rem] h-[32rem] flex flex-col ">
            <RegisterForm />
            <div className="mt-auto flex flex-col items-center space-y-2">
              <div className="flex flex-row justify-between w-[20rem]">
                <p>or continue with</p>
              </div>
              <button
                className="btn btn-info w-[20rem]"
                onClick={() => handleSubmitThirdParty("github")}
              >
                Github
              </button>
            </div>
          </div>
          <div className="w-[22rem] h-[32rem] flex flex-col">
            <SigninForm />
            <div className="mt-auto flex flex-col items-center space-y-2">
              <div className="flex flex-row justify-between w-[20rem]">
                <p>or continue with</p>
              </div>
              <button
                className="btn btn-info w-[20rem]"
                onClick={() => handleSubmitThirdParty("github")}
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
