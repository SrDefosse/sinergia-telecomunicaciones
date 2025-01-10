<?php
$to      = "blinksitesweb@gmail.com"; // O cualquier correo de prueba
$subject = "Prueba de envío de correo desde mi hosting";
$message = "Hola, esto es un test para verificar el envío de correos usando PHP mail().";
$headers = "From: no-reply@sinergia-telecomunicaciones.com.mx\r\n" .
           "Reply-To: no-reply@sinergia-telecomunicaciones.com.mx\r\n" .
           "Content-Type: text/plain; charset=utf-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "Correo enviado con éxito a $to";
} else {
    echo "Error al enviar el correo";
}
