"use client"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import BtnArrow from "@/svg/BtnArrow";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { toastError, toastSuccess } from "@/utils/toast";

interface FormData {
  email: string;
  password: string;
}

// Usuarios ficticios
const mockUsers = [
  { role: 'student', email: 'cliente@gmail.com', password: '12345678' },
  { role: 'instructor', email: 'instructor@gmail.com', password: '12345678' },
];

const LoginForm = () => {
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().required("El correo electrónico es obligatorio").email("Debe ser un correo válido"),
    password: yup.string().required("La contraseña es obligatoria"),
  }).required();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const user = mockUsers.find(u => u.email === data.email && u.password === data.password);

    if (user) {
      toastSuccess("Inicio de sesión exitoso");
      if (user.role === 'student') {
        router.push('/student-dashboard');
      } else if (user.role === 'instructor') {
        router.push('/instructor-dashboard');
      }
      reset();
    } else {
      toastError("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account__form">
      <div className="form-grp">
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" {...register("email")} type="text" placeholder="correo electrónico" />
        <p className="form_error">{errors.email?.message}</p>
      </div>
      <div className="form-grp">
        <label htmlFor="password">Contraseña</label>
        <input id="password" {...register("password")} type="password" placeholder="contraseña" />
        <p className="form_error">{errors.password?.message}</p>
      </div>
      <div className="account__check">
        <div className="account__check-remember">
          <input type="checkbox" className="form-check-input" value="" id="terms-check" />
          <label htmlFor="terms-check" className="form-check-label">Recuérdame</label>
        </div>
        <div className="account__check-forgot">
          <Link href="/registration">¿Olvidaste tu contraseña?</Link>
        </div>
      </div>
      <button type="submit" className="btn btn-one arrow-btn">
        Iniciar sesión <BtnArrow />
      </button>
    </form>
  );
};

export default LoginForm;
