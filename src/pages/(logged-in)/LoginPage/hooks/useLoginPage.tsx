import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import type { ILoginFormProps } from "../../../../@types/Login";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../../services/Auth/auth.service";


export const useLoginPage = () => {
  const navigate = useNavigate();
  const auth = useAuthContext();
  const { register, handleSubmit, setError, formState: { errors } } = useForm<ILoginFormProps>();

  const loginMutation = useMutation({
    mutationFn: authService.loginUser,

    onSuccess: (response) => {
      const { access_token } = response.data;
      auth.login(access_token);
      navigate('/dashboard/home');
    },
    onError: () => {
      setError('root.serverError', {
        type: 'manual',
        message: 'E-mail ou senha inválidos. Tente novamente.',
      });
    },
  });

  const onSubmit = (data: ILoginFormProps) => {
    loginMutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loginMutation
  }
}