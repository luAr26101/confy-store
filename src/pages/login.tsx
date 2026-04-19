import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router";
function Login() {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card bg-base-100 flex w-96 flex-col gap-y-4 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          label="Email"
          name="identifier"
          type="email"
          defaultValue="test@test.com"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn>Login</SubmitBtn>
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          Guest user
        </button>
        <p className="mt-2 text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="link link-hover link-primary ml-2 capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
