import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const schema = yup.object({
    name: yup.string().max(50).required("merci de rentrer votre nom"),
    firstName: yup.string().max(50).required("merci de rentrer votre prénom"),
    mess: yup.string().max(50).required("merci de rentrer votre message")
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
    const templateId = "template_mv8070v";
    const serviceId = "service_pqjkban";
    sendFeedback(serviceId, templateId, {
      name: data.name, 
      firstName: data.firstName,
      mess: data.mess,
      reply_to: r.target.reset(),
    })
  };
  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
    .send(serviceId, templateId, variables, 'oVZRz5qfAOnUdwk5q')
  };

  return (
    <form
      className="contact container contact-content"
      onSubmit={handleSubmit(onSubmit)}
      id="contact"
    >
      <div className="row g-3 d-flex justify-content-center">
        <div className="col-md-12">
          <label htmlFor="inputName" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            {...register("name")}
          />
          {errors.name && <p className="c-yup">{errors.name.message}</p>}
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="inputFirstName" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            name="firstname"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="c-yup">{errors.firstName.message}</p>
          )}
        </div>
      </div>
      <div className="row g-3 d-flex justify-content-center">
        <div className="col-md-12 mb-3">
          <label htmlFor="inputMessage" className="form-label">
            Votre message
          </label>
          <textarea
            cols="45"
            rows="5"
            className="form-control"
            id="inputMessage"
            placeholder="Merci de laisser ici votre message"
            name="mess"
            {...register("mess")}
          />
          {errors.mess && <p className="c-yup">{errors.mess.message}</p>}
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Valider
        </button>
      </div>
    </form>
  );
}
