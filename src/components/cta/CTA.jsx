import React, { useState } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";

export const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bodyData = new URLSearchParams();
      bodyData.append("name", formData.name);
      bodyData.append("email", formData.email);
      bodyData.append("message", formData.message);

      const response = await fetch("send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: bodyData.toString(),
      });

      const result = await response.text();

      if (result === "success") {
        setResponseMessage("¡Nos contactaremos contigo pronto!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Ocurrió un error al enviar tu mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("Hubo un problema de conexión. Intenta de nuevo.");
    }
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-zinc-700 bg-gradient-to-b from-zinc-900/30 to-zinc-950 py-32"
    >
      <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center">
        <div className="mb-12 max-w-3xl text-center">
          <h2 className="font-sans mb-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Ponte en Contacto con Nosotros
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-zinc-100">
            Estamos aquí para ayudarte. Llámanos, envíanos un correo o llena el formulario para ponerte en contacto.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-8 items-stretch min-h-[600px]">
          {/* Columna Izquierda */}
          <div className="md:w-1/2 flex flex-col flex-1">
            <ul>
              <li className="mb-6 flex items-start">
                <div className="flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded bg-emerald-500 text-zinc-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-zinc-50">Nuestra Dirección</h3>
                  <p className="text-zinc-100">
                    Blvd. Hermenegildo Bustos No. 1361 Col. Valle del Moral
                    <br />
                    37178 León, Gto. México
                  </p>
                </div>
              </li>
              <li className="mb-6 flex items-start">
                <div className="flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded bg-emerald-500 text-zinc-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5l5 2v4a2 2 0 0 1-2 2a16 16 0 0 1-15-15a2 2 0 0 1 2-2"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-zinc-50">Teléfono</h3>
                  <p className="text-zinc-100">
                    +52 (477) 718-62-81 <br />
                    +52 (477) 248-66-16 <br />
                    +52 (477) 248-66-17
                  </p>
                  <p className="text-zinc-100">rtovar@sinergia-telecomunicaciones.com.mx</p>
                </div>
              </li>
            </ul>

            <div className="flex-1 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.2307816904922!2d-101.67580533037436!3d21.155457349503568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b9601b3ca89ab%3A0x8ac14877ecc1e735!2sSINERGIA%20TELECOMUNICACIONES!5e0!3m2!1ses-419!2smx!4v1729734925328!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                className="w-full h-full rounded-md shadow-md"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Columna Derecha (Formulario) */}
          <div className="md:w-1/2 flex flex-col flex-1">
            <div className="bg-zinc-800 p-6 rounded-md shadow-md flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-zinc-50 mb-6">¿Listo para Empezar?</h2>

              <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                {responseMessage && (
                  <p className="mb-4 text-center text-emerald-400 font-semibold">
                    {responseMessage}
                  </p>
                )}

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-100 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-zinc-700 bg-zinc-800 py-2 px-3 text-zinc-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-100 mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-zinc-700 bg-zinc-800 py-2 px-3 text-zinc-100"
                    />
                  </div>
                </div>

                <div className="flex-grow mt-4 flex flex-col">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-100 mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="flex-grow rounded-md border border-zinc-700 bg-zinc-800 py-2 px-3 text-zinc-100"
                  ></textarea>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-white"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="absolute inset-0 z-0 bg-grid-emerald-700/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 to-zinc-950" />
    </section>
  );
};

export default CTA;
