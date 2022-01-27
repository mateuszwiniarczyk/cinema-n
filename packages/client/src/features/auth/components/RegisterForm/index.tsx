import { useForm } from 'react-hook-form';
import { useRegister } from 'features/auth/api/register';
import { useAuth } from 'features/auth/hooks/useAuth';
import { memo } from 'react';

export const RegisterForm = memo(() => {
  const { updateUser } = useAuth();
  const registerMutation = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async ({ email, password, confirmPassword }) => {
    if (!(email && password && confirmPassword)) return;

    const { data } = await registerMutation.mutateAsync({ email, password, confirmPassword });
    updateUser(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <p>This field is required</p>}
      </div>
      <div>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <p>This field is required</p>}
      </div>
      <div>
        <input type="password" {...register('confirmPassword', { required: true })} />
        {errors.confirmPassword && <p>This field is required</p>}
      </div>
      <button type="submit" disabled={registerMutation.isLoading}>
        Submit
      </button>
    </form>
  );
});
