import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

const FormValidationWithYup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

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
      <input type="password" {...register("password")} />
      <br />
      {errors.password && errors.password?.message && (
        <span>{errors.password.message}</span>
      )}
      <br />
      <input type="submit" />
    </form>
  );
};

export default FormValidationWithYup;
