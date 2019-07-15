const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
    user: 'info@yellow-ia.com',
    pass: 'info@yellow' 
    }
    });

    const mailOptions = {
        from: `${formulario.name} <${formulario.email}>`,
        to: 'info@yellow-ia.com', 
        subject: formulario.asunto,
        html: `
        <h4>Ha Recibido un correo</h4>
        <p>La siguiente informacion ha sido enviado desde la website Yellow-ia con la 
        siguiente informacion, recuerda reenviar o redirigir a la persona que 
        pueda atender los requerimientos del cliente.. Gracias.!</p> <br>
        <strong>Nombre:</strong> ${formulario.name} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Mensaje:</strong> ${formulario.mensaje}
        `
        };

    // email sent to the client as response 

    const clientOption = {
        from: 'info@yellow-ia.com',
        to: formulario.email,
        subject: 'Gracias por Contactar Yellow Ingenieros & Arquitectos.',
        html: `
        <table style="width:70%; background-color: #fdfdfd; border-radius: 7px; margin: auto; border-collapse:collapse; border-spacing:0;">
        <tr style=" height: 20px"><th></th></tr>
  <tr style="font-size: 2rem;">
    <th colspan="2" sytle="text-align: center;">
       Yellow Ingenieros & Arquitectos
    </th>
  </tr>
  <tr style="height: 15px;"><td></td></tr>
  <tr>
    <td colspan="2" style="padding: 0 15px; font-size: 16px;">
    Gracias por su interés en Yellow-IA! Nos esforzamos por procesar su inquietud lo más pronto posible (de 12 a 24 horas).
    </td>
  </tr>
  <tr style="height: 10px;"><td></td></tr>
  <tr>
    <td colspan="2" style="padding: 0 15px; margin-top: 2%; font-size: 16px;">
    Mientras espera, puede consultar nuestra página web o llamar a nuestras oficinas administrativas. 
    Le invitamos a seguir nuestras redes sociales y formar parte de nuestro newslletter.
    ¡Se parte de la familia Yellow! Se despide.
    </td>
  </tr>
 <tr style="height: 10px;"><td></td></tr>
  <tr>
    <td>
      <img src="https://yellow-ia.com/assets/yellow-logo/Logo_Yellow%20ingenieros%20y%20arquitectos_logo-horizontal-transparent.png" alt="">
    </td>
    <td>
      <table>
  <tr>
    <th>Yellow-IA | Ingenieros & Arquitectos</th>
  </tr>
  <tr>
    <td style="padding: 0 15px;">C/5A #1, Esq. Ing. Juan Garcia Bonelli, Ens. Julieta Morales</td>
  </tr>
  <tr>
    <td style="padding: 0 15px; font-weight: bold;">phone:  809 683 8400</td>
  </tr>
  <tr>
    <td style="padding: 0 15px; font-weight: bold;">Email: info@yellow-ia.com</td>
  </tr>
  <tr>
    <td style="padding: 0 15px;">Le exhortamos considerar el medio ambiente antes de imprimir este email</td>
  </tr>
  <tr>
    <td></td>
  </tr>
</table>
    </td>
  </tr>
  <tr style="height: 10px;"><td></td></tr>
  
</table>
        `
    }

        transporter.sendMail(mailOptions, function (err, info) {
            if(error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response );
                res.status(200).json( {
                    message: 'successfuly sent!'
                })
            }
            });

            transporter.sendMail(clientOption, function (err, info) {
                if(error) {
                    console.log(error)
                } else {
                    console.log('Email sent: ' + info.response );
                    res.status(200).json( {
                        message: 'successfuly sent!'
                    })
                }
                });

}