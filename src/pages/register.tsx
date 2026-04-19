import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router";

function Register() {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card bg-base-100 flex w-96 flex-col gap-y-4 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="username" />
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4">
          <SubmitBtn>Register</SubmitBtn>
        </div>
        <p className="mt-2 text-center">
          Already a member?
          <Link
            to="/login"
            className="link link-hover link-primary ml-2 capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
