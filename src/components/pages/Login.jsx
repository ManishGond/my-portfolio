import Section from "../common/Section";
import Button from "../common/Button";
import { gradient } from "../../assets";
import { BackgroundCircles } from "../design/Hero";

const Login = () => {
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
      <div className="container relative z-2">
        <div className="max-w-[26rem] mx-auto">
          <div className="relative bg-n-8 rounded-[2rem] p-[2.4rem] mb-10">
            <h2 className="h4 mb-4 text-center">Welcome Back</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-n-1" htmlFor="email">
                  Email address
                </label>
                <input
                  className="w-full bg-n-6 rounded-lg h-12 px-4 text-n-1 transition-colors focus:outline-none focus:bg-n-5"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2 text-n-1" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full bg-n-6 rounded-lg h-12 px-4 text-n-1 transition-colors focus:outline-none focus:bg-n-5"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-n-3">Remember me</span>
                </label>
                <a href="#" className="text-color-1 hover:text-color-1/80">
                  Forgot password?
                </a>
              </div>
              <Button className="w-full" href="#">
                Sign in
              </Button>
            </form>

            <div className="mt-6 text-center text-n-3">
              Don't have an account?{" "}
              <a href="/signup" className="text-color-1 hover:text-color-1/80">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img
          src={gradient}
          className="absolute top-1/2 left-1/2 w-[82.5rem] h-[82.5rem] -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-color-dodge pointer-events-none"
          width={1320}
          height={1320}
          alt="Gradient"
        />
        <BackgroundCircles />
      </div>
    </Section>
  );
};

export default Login;
