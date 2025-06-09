import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import useForm from "../hooks/useForm";
import { validateEmail, validatePassword } from "../utils/validation";

interface LoginFormValues {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {

  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);

  const {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  } = useForm<LoginFormValues>(
    { email: '', password: '' }, // Valores iniciais
    {
      // Regras de validação para cada campo.
      email: validateEmail,
      password: validatePassword,
    }
  );

  const handleLoginSubmit = async (data: LoginFormValues) => {
    setSubmissionMessage(null);

    try {
      console.log('Dados de login sendo enviados:', data);
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (data.email === 'teste@teste.com' && data.password === '123456') {
        setSubmissionMessage('Login realizado com sucesso! Redirecionando...');
        setIsSuccessMessage(true);
        console.log('Login bem-sucedido:', data);
      } else {
        throw new Error('E-mail ou senha inválidos.');
      }
    } catch (error: any) {
      setSubmissionMessage(error.message || 'Erro ao fazer login. Por favor, tente novamente.');
      setIsSuccessMessage(false);
      console.error('Erro de login:', error);
    }
  };


    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Acessar Conta</h2>

                 {submissionMessage && (
                        <div className={`p-3 rounded-md mb-4 text-center ${isSuccessMessage ? 'bg-green-100 text-green-700' : 'bg-red-100 text=red-700'}`}>
                                {submissionMessage}
                        </div>
                    )}

                    <form action="">
                        <Input
                            label="E-mail"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="seu@email.com"
                            value={values.email}
                            onChange={handleChange}
                            error={errors.email}
                            disabled={loading}/>
                        
                        <Input
                            label="Senha"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Sua senha"
                            value={values.password}
                            onChange={handleChange}
                            error={errors.password}
                            disabled={loading} />

                        <Button type="submit" isLoading={loading} className="mt-4">
                            Entrar
                        </Button>
                    </form>
                <p className="text-center text-gray-600 text-sm mt-6">
                    Não tem uma conta? {''}
                    <Link to="/register" className="text-blue-600 hover:underline font-semibold">
                        Clique Aqui
                    </Link>
                </p>                
            </div>
        </div>
    )
};

export default LoginPage;