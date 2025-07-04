"use client";
import { useState } from "react";
import styles from "./contactForm.module.css";
import {
  FaPhoneAlt,
  FaPaperPlane,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { handleOpenLink } from "@/utils/utils";
import BlueButton from "@/components/buttons/blueButton";
import Swal from "sweetalert2";
import { validEmail } from "@/utils/utils";
import { ClipLoader } from "react-spinners";
import Title from "@/components/title/title";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos.",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!validEmail(formData.email)) {
      Swal.fire({
        title: "Info!",
        text: "Por favor poner un email valido.",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoading(true);
      try {
        const res = await fetch("/api/nodemailer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
          Swal.fire({
            title: "Éxito!",
            text: data.message || "Email enviado correctamente.",
            icon: "success",
            confirmButtonText: "Ok",
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          throw new Error(data.message || "Error al enviar el email.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al enviar el email. Por favor intentá de nuevo.",
          icon: "error",
          confirmButtonText: "Ok",
        });
        setLoading(false);
      }
    }
  };

  return (
    <section className={`${styles.body} padding`}>
      <div className={`${styles.container} width`}>
        <div className={styles.subContainer}>
          <Title value="contactanos" />

          <h1 className="mainTitle">Mantente conectado</h1>
          <p className="mainText" style={{ maxWidth: "400px" }}>
            Completá el formulario o escribinos directamente. Nos pondremos en
            contacto lo antes posible.
          </p>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FaPhoneAlt />
            </div>

            <div className={styles.columnContainer}>
              <h2 className="mainSubTitle">Telefono</h2>
              <p className="mainText">+54 9 11 5038-1626</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FaPaperPlane />
            </div>

            <div className={styles.columnContainer}>
              <h2 className="mainSubTitle">Email</h2>
              <p className="mainText" style={{ wordBreak: "break-all" }}>
                easy.english.online101@gmail.com
              </p>
            </div>
          </div>

          <div className={styles.flexContainer}>
            <div className={styles.socialNetworks}>
              <FaFacebook
                onClick={() =>
                  handleOpenLink("https://www.facebook.com/share/14E6E5Epxdi/")
                }
              />
            </div>

            <div className={styles.socialNetworks}>
              <FaInstagram
                onClick={() =>
                  handleOpenLink(
                    "https://www.instagram.com/easy.english.101?igsh=Mnl6OWppbnZ1enNl"
                  )
                }
              />
            </div>

            <div className={styles.socialNetworks}>
              <FaWhatsapp
                onClick={() => handleOpenLink("https://wa.me/5491150381626")}
              />
            </div>

            <div className={styles.socialNetworks}>
              <FaLinkedin
                onClick={() =>
                  handleOpenLink(
                    "https://www.linkedin.com/in/agustina-sartori-956b6b26b/"
                  )
                }
              />
            </div>
          </div>
        </div>

        <form className={styles.subContainer}>
          <h1 className="mainTitle">Dejanos tu mensaje</h1>

          <div className={styles.inputContainer}>
            <input
              placeholder="Nombre"
              className={styles.input}
              value={formData.name}
              name="name"
              onChange={onChangeFormData}
            />
            <input
              placeholder="Email"
              className={styles.input}
              value={formData.email}
              name="email"
              onChange={onChangeFormData}
            />
            <input
              placeholder="Telefono"
              className={styles.input}
              type="number"
              value={formData.phone}
              name="phone"
              onChange={onChangeFormData}
            />
            <textarea
              placeholder="Mensaje..."
              className={styles.input}
              style={{ height: "150px" }}
              value={formData.message}
              name="message"
              onChange={onChangeFormData}
            />
          </div>

          <BlueButton
            value={
              loading ? <ClipLoader color="#ffffff" size={25} /> : "Enviar"
            }
            onClick={(e) => onSubmit(e)}
          />
        </form>
      </div>
    </section>
  );
}
