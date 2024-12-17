import { useForm } from "react-hook-form";

export function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstname")} />
      {errors.firstname && (
        <span className="text-red-400">This field is required</span>
      )}
      <input {...register("lastname", { required: true })} />
      {errors.lastname && (
        <span className="text-red-400">This field is required</span>
      )}
      <input {...register("email", { required: true })} />
      <p>
        {errors.email && (
          <span className="text-red-400">Email is not valid</span>
        )}
      </p>

      <input type="submit" />
    </form>
  );
}
