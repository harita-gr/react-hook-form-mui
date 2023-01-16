import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}

const BasicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  console.log("errors:", errors);
  console.log("watch variable email:", watch("email"));

  //TIP: You can access formState inside SubmitHandler. Pass "data" param.
  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log("Form Data is:", data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <input
        type="email"
        defaultValue="example@leo.test.com"
        {...register("email")}
      />
      <br /> <br />
      <input
        type="password"
        {...register("password", {
          required: true,
        })}
      />
      <br />
      {errors.password && (
        <span style={{ color: "red" }}>This field is required</span>
      )}
      <br />
      <input type="submit" />
    </form>
  );
};

export default BasicForm;
