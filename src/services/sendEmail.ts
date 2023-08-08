import emailjs from '@emailjs/browser'

const SERVICE_ID = "service_2jn3sv9"
const TEMPLATE_ID = "template_5t6l75o"
const PUBLIC_KEY = "foFB0QUgaNyya6wjM"

type EmailContent = {
  from_name: string;
  email: string;
  message: string;
}

export const sendEmail = (content: EmailContent) => {
  emailjs.send(SERVICE_ID as string, TEMPLATE_ID as string, content, PUBLIC_KEY as string)
    .then((response) => console.log("E-mail enviado!", response.status))
    .catch((response) => console.log(response))
}