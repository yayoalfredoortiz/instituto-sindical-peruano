"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import BtnArrow from "@/svg/BtnArrow"
import Link from "next/link"

interface FormData {
   fname: string;
   lname: string;
   email: string;
   password: string;
   cpassword: string;
}

const schema = yup
   .object({
      fname: yup.string().required().label("Nombre"),
      lname: yup.string().required().label("Apellido"),
      email: yup.string().required().email().label("Correo electrónico"),
      password: yup.string().required().label("Contraseña"),
      cpassword: yup.string().required().label("Confirmar contraseña"),
   })
   .required();

const RegistrationForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = () => {
      const notify = () => toast('Registro exitoso', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="account__form">
         <div className="row gutter-20">
            <div className="col-md-6">
               <div className="form-grp">
                  <label htmlFor="fast-name">Nombre</label>
                  <input type="text" {...register("fname")} id="fast-name" placeholder="Nombre" />
                  <p className="form_error">{errors.fname?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <label htmlFor="last-name">Apellido</label>
                  <input type="text" {...register("lname")} id="last-name" placeholder="Apellido" />
                  <p className="form_error">{errors.lname?.message}</p>
               </div>
            </div>
         </div>
         <div className="form-grp">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" {...register("email")} id="email" placeholder="Correo electrónico" />
            <p className="form_error">{errors.email?.message}</p>
         </div>
         <div className="form-grp">
            <label htmlFor="password">Contraseña</label>
            <input type="password" {...register("password")} id="password" placeholder="Contraseña" />
            <p className="form_error">{errors.password?.message}</p>
         </div>
         <div className="form-grp">
            <label htmlFor="confirm-password">Confirmar contraseña</label>
            <input type="password" {...register("cpassword")} id="confirm-password" placeholder="Confirmar contraseña" />
            <p className="form_error">{errors.cpassword?.message}</p>
         </div>
         <button type="submit" className="btn btn-one arrow-btn">Registrarse <BtnArrow /></button>
      </form>
   )
}

export default RegistrationForm
