import { motion } from 'framer-motion';
import { useLoginPage } from './hooks/useLoginPage';

export default function LoginPage() {
  const { register, errors, handleSubmit, onSubmit, loginMutation } = useLoginPage()

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <motion.div
        className="w-full max-w-md rounded-lg bg-gray-50 p-8 shadow-2xl inset-shadow-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-semibold text-gray-800">
            Acesse sua Conta
          </h1>
          <p className="text-gray-500 text-sm">
            Entre com seu e-mail e senha para continuar.
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register('email', { required: 'O e-mail é obrigatório' })}
              type="email"
              placeholder="E-mail"
              className="block w-full border-b border-gray-400 px-4 py-3 text-gray-700 bg-gray-50 rounded-lg focus:outline-none"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <input
              {...register('password', { required: 'A senha é obrigatória' })}
              type="password"
              placeholder="Senha"
              className="block w-full border-b border-gray-400 px-4 py-3 text-gray-700 bg-gray-50 rounded-lg focus:outline-none"
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 transition"
            >
              {loginMutation.isPending ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}