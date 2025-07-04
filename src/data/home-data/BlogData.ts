import { StaticImageData } from "next/image";

import blog_1 from "@/assets/img/blog/blog_post01.jpg"
import blog_2 from "@/assets/img/blog/blog_post02.jpg"
import blog_3 from "@/assets/img/blog/blog_post03.jpg"
import blog_4 from "@/assets/img/blog/blog_post04.jpg"
import blog_5 from "@/assets/img/blog/h4_blog_post01.jpg"
import blog_6 from "@/assets/img/blog/h4_blog_post02.jpg"
import blog_7 from "@/assets/img/blog/h4_blog_post03.jpg"
import blog_8 from "@/assets/img/blog/h5_blog_post01.jpg"
import blog_9 from "@/assets/img/blog/h5_blog_post02.jpg"
import blog_10 from "@/assets/img/blog/h5_blog_post03.jpg"
import blog_11 from "@/assets/img/blog/h6_blog_post01.jpg"
import blog_12 from "@/assets/img/blog/h6_blog_post02.jpg"
import blog_13 from "@/assets/img/blog/h6_blog_post03.jpg"
import blog_14 from "@/assets/img/blog/h8_blog_post01.jpg"
import blog_15 from "@/assets/img/blog/h8_blog_post02.jpg"
import blog_16 from "@/assets/img/blog/h8_blog_post03.jpg"

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  tag: string;
  date: string;
  title: string;
}[];

const blog_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    thumb: blog_1,
    tag: "Derecho Civil",
    date: "20 de julio de 2024",
    title: "Cómo redactar un contrato legal sólido paso a paso",
  },
  {
    id: 2,
    page: "home_1",
    thumb: blog_2,
    tag: "Familia",
    date: "20 de julio de 2024",
    title: "Divorcio express: qué es y cómo solicitarlo en línea",
  },
  {
    id: 3,
    page: "home_1",
    thumb: blog_3,
    tag: "Derecho Laboral",
    date: "20 de julio de 2024",
    title: "Derechos del trabajador: lo que debes saber en 2024",
  },
  {
    id: 4,
    page: "home_1",
    thumb: blog_4,
    tag: "Derecho Penal",
    date: "20 de julio de 2024",
    title: "Conoce los pasos de un proceso penal desde la denuncia",
  },

  // home_4
  {
    id: 1,
    page: "home_4",
    thumb: blog_5,
    tag: "Empresas",
    date: "20 de julio de 2024",
    title: "Aspectos legales clave para crear una sociedad en 2024",
  },
  {
    id: 2,
    page: "home_4",
    thumb: blog_6,
    tag: "Contratos",
    date: "20 de julio de 2024",
    title: "Errores comunes al redactar un contrato de servicios",
  },
  {
    id: 3,
    page: "home_4",
    thumb: blog_7,
    tag: "Tecnología Legal",
    date: "20 de julio de 2024",
    title: "Cómo la firma electrónica está revolucionando los documentos legales",
  },

  // home_5
  {
    id: 1,
    page: "home_5",
    thumb: blog_8,
    tag: "Propiedad Intelectual",
    date: "20 de julio de 2024",
    title: "Cómo registrar una marca paso a paso en tu país",
  },
  {
    id: 2,
    page: "home_5",
    thumb: blog_9,
    tag: "Juicios",
    date: "20 de julio de 2024",
    title: "Qué esperar durante una audiencia judicial",
  },
  {
    id: 3,
    page: "home_5",
    thumb: blog_10,
    tag: "Testamentos",
    date: "20 de julio de 2024",
    title: "Guía para redactar tu testamento de forma legal y segura",
  },

  // home_6
  {
    id: 1,
    page: "home_6",
    thumb: blog_11,
    tag: "Inmobiliario",
    date: "20 de julio de 2024",
    title: "Claves legales para comprar o vender una propiedad",
  },
  {
    id: 2,
    page: "home_6",
    thumb: blog_12,
    tag: "Migración",
    date: "20 de julio de 2024",
    title: "Tipos de visas y requisitos legales para inmigrar",
  },
  {
    id: 3,
    page: "home_6",
    thumb: blog_13,
    tag: "Consumidor",
    date: "20 de julio de 2024",
    title: "Conoce tus derechos como consumidor y cómo reclamarlos",
  },

  // home_8
  {
    id: 1,
    page: "home_8",
    thumb: blog_14,
    tag: "Empresarial",
    date: "20 de julio de 2024",
    title: "Legalidad en el comercio electrónico: lo que debes cumplir",
  },
  {
    id: 2,
    page: "home_8",
    thumb: blog_15,
    tag: "Protección de Datos",
    date: "20 de julio de 2024",
    title: "Cómo cumplir con la ley de protección de datos personales",
  },
  {
    id: 3,
    page: "home_8",
    thumb: blog_16,
    tag: "Justicia",
    date: "20 de julio de 2024",
    title: "Acceso a la justicia: herramientas legales gratuitas",
  },
];

export default blog_data;
