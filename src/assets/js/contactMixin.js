import emailjs from "emailjs-com";

export const contactMixin = {
    mail_service_id: "service_gqsxkkh",
    mail_template_id: "template_s4nr60e",
    mail_user_id: "user_eeVYemHTnHjSJqpAxC8wh",
    methods: {
        sendWhatsapp(destinationNumber) {
            const basicNumber = this.cleanNumber(destinationNumber)
            const to = `54911${basicNumber}`
            window.open("https://wa.me/" + to);
        },
        sendEMail() {
            emailjs
                .send(this.mail_service_id, this.mail_template_id, {
                    // client_name: this.mail.nombre,
                    // institution_name: this.mail.nombreInstitucion,
                    // unit_name: this.mail.nombreUnidad,
                    // contact_email: this.mail.mailContacto,
                    // contact_phone: this.mail.telefonoContacto,
                    // message: this.mail.consulta,
                })
                .then((response) => {
                    submitButton.innerHTML = "Enviar consulta";
                    alert("Mail Enviado correctamente!");
                })
                .catch((err) => {
                    submitButton.innerHTML = "Enviar consulta";
                    console.log(err);
                    alert(err);
                });
        },
        cleanNumber(number) {
            let newNumber = number.replace(/[^\d.]/g, '')
            if (newNumber.startsWith("54911")) {
                newNumber = newNumber.replace("54911", "")
            }
            return newNumber

        }
    }
}