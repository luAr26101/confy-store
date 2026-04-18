import { FormInput } from "../components";
function Login() {
  return (
    <div>
      <h1 className="text-4xl">Login page</h1>
      <FormInput name="name" label="Name" />
    </div>
  );
}

export default Login;
