import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const schema = yup.object({
    name: yup
      .string()
      .max(50)
      .min(2, "coucou")
      .required("merci de rentrer votre nom"),
    firstName: yup.string().max(50).required("merci de rentrer votre prénom"),
    email: yup
      .string()
      .email("merci de saisir un email valide")
      .max(250)
      .required("merci de saisir un email"),
    mess: yup.string().max(50).required("merci de rentrer votre message"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    alert("votre message a bien été envoyé");
    const templateId = "template_08jt1c9";
    const serviceId = "service_y9vzzii";
    sendFeedback(serviceId, templateId, {
      name: data.name,
      firstName: data.firstName,
      email: data.email,
      mess: data.mess,
      reply_to: r.target.reset(),
    });
  };
  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs.send(serviceId, templateId, variables, "RsLQJda0wxFIN0KjI");
  };

  return (
    <>
      <div className="contact container-fluid g-0 mb-3 " id="contact">
        <div className="contact-content row g-0">
          <div className="col-6 side-left ">
            <div className=" d-flex justify-content-center align-items-center flex-column ">
              <div className="d-flex justify-content-start align-items-start">
                <img src="./medias/logo black.png" className="logo" width={90} alt="" />
              </div>
              
              <h4> Contactez moi </h4>
              <form
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                id="contact"
              >
                <div className="row g-3 d-flex justify-content-center">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      name="name"
                      placeholder="Nom"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="c-yup">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      name="firstname"
                      placeholder="Prénom"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="c-yup">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="c-yup">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="row g-3 d-flex justify-content-center">
                  <div className="col-md-12 mb-3 ">
                    <textarea
                      cols="45"
                      rows="5"
                      className="form-control"
                      id="inputMessage"
                      placeholder="Merci de laisser ici votre message"
                      name="mess"
                      {...register("mess")}
                    />
                    {errors.mess && (
                      <p className="c-yup">{errors.mess.message}</p>
                    )}
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Valider
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
