'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  email: string;
  date: string;
  time: string;
  service: string;
}

const GetAppointment = () => {
  const schema = yup.object({
    name: yup.string().required('El nombre es obligatorio'),
    email: yup.string().email('Debe ser un correo válido').required('El correo es obligatorio'),
    date: yup.string().required('Selecciona una fecha'),
    time: yup.string().required('Selecciona una hora'),
    service: yup.string().required('Selecciona un servicio'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    toast.success('Cita agendada correctamente', { position: 'top-center' });
    reset();
  };

  return (
    <section className="singUp-area section-py-120 bg-appointment">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="singUp-wrap">
              <h2 className="title text-center mb-3">Agendar una cita</h2>
              <p className="mb-4">
                Completa los datos para programar tu consulta con nuestros especialistas legales.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="instructor__profile-form">
                <div className="form-grp">
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    placeholder="Nombres"
                  />
                  <p className="form_error">{errors.name?.message}</p>
                </div>

                <div className="form-grp">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    placeholder="Correo electrónico"
                  />
                  <p className="form_error">{errors.email?.message}</p>
                </div>

                <div className="form-grp">
                  <label htmlFor="date">Fecha</label>
                  <input
                    type="date"
                    id="date"
                    {...register('date')}
                  />
                  <p className="form_error">{errors.date?.message}</p>
                </div>

                <div className="form-grp">
                  <label htmlFor="time">Hora</label>
                  <input
                    type="time"
                    id="time"
                    {...register('time')}
                  />
                  <p className="form_error">{errors.time?.message}</p>
                </div>

                <div className="form-grp">
                  <label htmlFor="service">Servicio</label>
                  <select id="service" {...register('service')}>
                    <option value="">Seleccionar un servicio</option>
                    <option value="1">Servicio 1</option>
                    <option value="2">Servicio 2</option>
                    <option value="3">Servicio 3</option>
                  </select>
                  <p className="form_error">{errors.service?.message}</p>
                </div>

                {/* <button type="submit" className="btn btn-one arrow-btn w-100">
                  Agendar cita
                </button> */}
                 <div className="submit-btn mt-25 mx-auto">
                  <button type="submit" className="d-block mx-auto btn btn-one arrow-btn w-100">
                     Agendar cita
                  </button>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAppointment;
