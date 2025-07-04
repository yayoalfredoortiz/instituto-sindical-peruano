"use client"
import { toast } from 'react-toastify';
import BtnArrow from "@/svg/BtnArrow"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   nombre: string;
   correo: string;
   mensaje: string;
   sitioWeb: string;
}

const schema = yup
   .object({
      nombre: yup.string().required().label("Nombre"),
      correo: yup.string().required().email().label("Correo electrónico"),
      mensaje: yup.string().required().label("Mensaje"),
      sitioWeb: yup.string().url().required().label("Sitio web"),
   })
   .required();

const BlogForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = () => {
      const notify = () => toast('Comentario enviado correctamente', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <div className="comment-respond">
         <h4 className="comment-reply-title">Publicar un comentario</h4>
         <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
            <p className="comment-notes">
               <span>Su correo electrónico no será publicado. Los campos obligatorios están marcados con *</span>
            </p>
            <div className="comment-field">
               <textarea placeholder="Mensaje" {...register("mensaje")}></textarea>
               <p className="form_error">{errors.mensaje?.message}</p>
            </div>
            <div className="row">
               <div className="col-lg-6">
                  <div className="comment-field">
                     <input type="text" {...register("nombre")} placeholder="Nombre" />
                     <p className="form_error">{errors.nombre?.message}</p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="comment-field">
                     <input type="email" {...register("correo")} placeholder="Correo electrónico" />
                     <p className="form_error">{errors.correo?.message}</p>
                  </div>
               </div>
               {/* <div className="col-lg-4">
                  <div className="comment-field">
                     <input type="url" {...register("sitioWeb")} placeholder="Sitio web" />
                     <p className="form_error">{errors.sitioWeb?.message}</p>
                  </div>
               </div> */}
            </div>
            <div className="comment-field checkbox-grp">
               <input type="checkbox" id="checkbox_two" />
               <label htmlFor="checkbox_two">Guardar mi nombre y correo electrónico en este navegador para la próxima vez que comente.</label>
            </div>
            <p className="form-submit"></p>
            <button className="btn btn-one arrow-btn">Publicar comentario <BtnArrow /></button>
         </form>
      </div>
   )
}

export default BlogForm
