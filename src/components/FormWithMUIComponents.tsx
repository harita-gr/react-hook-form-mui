import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@mui/material";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

const FormWithMUIComponents = () => {
  const {
    control,
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
      <Controller
        name="email"
        control={control}
        defaultValue="example@leo.test.com"
        render={({ field }) => (
          <TextField
            {...field}
            label="email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ""}
          />
        )}
      />
      <br /> <br />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="email"
            label="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ""}
          />
        )}
      />{" "}
      <br />
      <br />
      <input type="submit" />
    </form>
  );
};

export default FormWithMUIComponents;
