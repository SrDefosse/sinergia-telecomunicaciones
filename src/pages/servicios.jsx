import React from "react";
import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import { TextParallaxContent } from "@/components/features/services/TextParallaxContent";

const ServicesPage = () => {
  return (
    <MaxWidthWrapper className="py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h1>

      {/* Servicio 1 */}
      <TextParallaxContent
        id="energia-solar"
        imgUrl="/images/servicios/energia-solar.jpg"
        subheading="Energía Solar"
        heading="Sistemas de Energía Solar"
        description="Nuestros sistemas de energía solar están diseñados para maximizar la eficiencia energética y reducir costos operativos. Instalamos paneles solares de última generación que no solo optimizan el consumo energético, sino que también contribuyen a la sostenibilidad ambiental. Ofrecemos soluciones personalizadas para hogares y empresas, adaptándonos a sus necesidades energéticas. Además, brindamos servicios de monitoreo remoto, asegurando que los sistemas funcionen al máximo rendimiento en todo momento."
        extraContent={
          <ul>
            <li>✔ Instalación de paneles solares de alta eficiencia.</li>
            <li>✔ Monitoreo remoto y mantenimiento continuo.</li>
            <li>✔ Reducción de costos eléctricos a largo plazo.</li>
          </ul>
        }
      />

      {/* Servicio 2 */}
      <TextParallaxContent
        id="climatizacion"
        imgUrl="/images/servicios/climatizacion.jpg"
        subheading="Climatización"
        heading="Climatización y Enfriamiento"
        description="Proveemos sistemas de climatización avanzados que garantizan confort y ahorro energético en cualquier espacio. Desde sistemas de aire acondicionado residenciales hasta soluciones comerciales más grandes, nuestros servicios están diseñados para mejorar la calidad del ambiente mientras se optimiza el consumo energético. Incorporamos tecnologías de última generación que permiten monitoreo y control remoto, adaptándose a las condiciones climáticas de cada temporada."
        extraContent={
          <ul>
            <li>✔ Instalación de sistemas de climatización eficientes.</li>
            <li>✔ Soluciones para espacios residenciales y comerciales.</li>
            <li>✔ Mantenimiento y soporte técnico especializado.</li>
          </ul>
        }
      />

      {/* Servicio 3 */}
      <TextParallaxContent
        id="plantas-emergencia"
        imgUrl="/images/servicios/plantas-emergencia.jpg"
        subheading="Plantas de Emergencia"
        heading="Soluciones de Energía de Respaldo"
        description="Nuestras plantas de emergencia están diseñadas para garantizar la continuidad energética en situaciones críticas. Proveemos generadores de diversas capacidades que aseguran el funcionamiento ininterrumpido de equipos esenciales, como hospitales, centros de datos y fábricas. Nuestro equipo se encarga de la instalación, configuración y mantenimiento, asegurando que el sistema esté siempre listo para operar cuando más se necesita."
        extraContent={
          <ul>
            <li>✔ Generadores eléctricos de alta capacidad.</li>
            <li>✔ Instalación y configuración profesional.</li>
            <li>✔ Asesoría y soporte técnico 24/7.</li>
          </ul>
        }
      />

      {/* Servicio 4 */}
      <TextParallaxContent
        id="fibra-optica"
        imgUrl="/images/servicios/fibra-optica.jpg"
        subheading="Fibra Óptica"
        heading="Conectividad Avanzada"
        description="Ofrecemos soluciones de fibra óptica para garantizar una conectividad rápida y confiable. Nuestro equipo se especializa en la instalación de redes ópticas para empresas y hogares, mejorando la transferencia de datos y eliminando problemas de latencia. Estas soluciones son ideales para entornos que demandan alta velocidad y estabilidad, como oficinas, centros educativos y viviendas tecnológicas."
        extraContent={
          <ul>
            <li>✔ Instalación de redes ópticas certificadas.</li>
            <li>✔ Configuración avanzada para optimizar el rendimiento.</li>
            <li>✔ Soluciones para entornos empresariales y residenciales.</li>
          </ul>
        }
      />

      {/* Servicio 5 */}
      <TextParallaxContent
        id="cctv-seguridad"
        imgUrl="/images/servicios/cctv-seguridad.jpg"
        subheading="CCTV y Seguridad"
        heading="Sistemas de Videovigilancia"
        description="Garantizamos la seguridad de tus instalaciones mediante sistemas de videovigilancia modernos. Nuestras soluciones incluyen cámaras de alta definición, configuraciones de monitoreo remoto y opciones de grabación inteligente que permiten acceder a las imágenes desde cualquier lugar. Ofrecemos sistemas escalables, ideales para hogares, oficinas y entornos industriales, asegurando tranquilidad y protección."
        extraContent={
          <ul>
            <li>✔ Cámaras de alta resolución con visión nocturna.</li>
            <li>✔ Integración con sistemas de control de acceso.</li>
            <li>✔ Configuración de alertas y monitoreo remoto.</li>
          </ul>
        }
      />

      {/* Servicio 6 */}
      <TextParallaxContent
        id="telefonia"
        imgUrl="/images/servicios/telefonia.jpg"
        subheading="Telefonía"
        heading="Soluciones de Telefonía"
        description="Proveemos soluciones modernas de telefonía que garantizan comunicaciones eficientes y confiables para empresas y hogares. Desde sistemas VoIP hasta líneas tradicionales, nuestros servicios incluyen configuración avanzada, integración con redes existentes y mantenimiento constante. Las soluciones están diseñadas para adaptarse a las necesidades de comunicación actuales."
        extraContent={
          <ul>
            <li>✔ Sistemas VoIP para llamadas económicas y de alta calidad.</li>
            <li>✔ Configuración de centrales telefónicas empresariales.</li>
            <li>✔ Mantenimiento y soporte técnico permanente.</li>
          </ul>
        }
      />

      {/* Servicio 7 */}
      <TextParallaxContent
        id="torres-telecomunicaciones"
        imgUrl="/images/servicios/torres-telecomunicaciones.jpg"
        subheading="Torres de Telecomunicaciones"
        heading="Infraestructura de Comunicación"
        description="Somos especialistas en el diseño, construcción y mantenimiento de torres de telecomunicaciones. Estas infraestructuras garantizan una conectividad estable y confiable, soportando redes móviles y estaciones de transmisión. Nuestro equipo se asegura de cumplir con todas las regulaciones técnicas y de seguridad, proporcionando soluciones robustas y duraderas."
        extraContent={
          <ul>
            <li>✔ Diseño estructural y construcción de torres.</li>
            <li>✔ Configuración de antenas y estaciones base.</li>
            <li>✔ Mantenimiento preventivo y correctivo continuo.</li>
          </ul>
        }
      />

      {/* Servicio 8 */}
      <TextParallaxContent
        id="ups"
        imgUrl="/images/servicios/ups.jpg"
        subheading="UPS"
        heading="Sistemas de Alimentación Ininterrumpida"
        description="Nuestros sistemas UPS (Uninterruptible Power Supply) están diseñados para proteger tus dispositivos contra apagones y fluctuaciones de voltaje. Estos sistemas son esenciales para mantener la continuidad operativa de empresas, hospitales y centros de datos, evitando pérdidas de datos y fallos críticos en tus equipos."
        extraContent={
          <ul>
            <li>✔ Sistemas adaptados a pequeñas y grandes empresas.</li>
            <li>✔ Protección contra fallos eléctricos inesperados.</li>
            <li>✔ Mantenimiento y monitoreo continuo del sistema.</li>
          </ul>
        }
      />

      {/* Servicio 9 */}
      <TextParallaxContent
        id="control-acceso"
        imgUrl="/images/servicios/control-acceso.jpg"
        subheading="Control de Acceso"
        heading="Seguridad Inteligente"
        description="Garantizamos la seguridad en tus instalaciones mediante sistemas avanzados de control de acceso. Desde tarjetas de proximidad hasta tecnología biométrica, nuestras soluciones están diseñadas para proteger entradas y salidas, registrando y controlando el acceso de personas en tiempo real."
        extraContent={
          <ul>
            <li>✔ Sistemas biométricos de última generación.</li>
            <li>✔ Integración con cámaras y alarmas de seguridad.</li>
            <li>✔ Instalación profesional y soporte técnico continuo.</li>
          </ul>
        }
      />

            {/* Servicio 10 */}
            <TextParallaxContent
        id="equipo-activo"
        imgUrl="/images/servicios/equipo-activo.jpg"
        subheading="Equipo Activo"
        heading="Soluciones de Hardware"
        description="Instalamos y configuramos equipos activos como switches, routers y servidores, esenciales para mantener la infraestructura tecnológica de tu negocio en óptimas condiciones. Nuestro enfoque asegura una integración fluida con tu red existente y una operación eficiente bajo cualquier carga de trabajo."
        extraContent={
          <ul>
            <li>✔ Configuración de routers y switches avanzados.</li>
            <li>✔ Instalación de servidores para aplicaciones críticas.</li>
            <li>✔ Soporte y mantenimiento técnico continuo.</li>
          </ul>
        }
      />

      {/* Servicio 11 */}
      <TextParallaxContent
        id="redes-voz-datos"
        imgUrl="/images/servicios/redes-voz-datos.jpg"
        subheading="Redes de Voz y Datos"
        heading="Comunicación Eficiente"
        description="Diseñamos e implementamos redes de voz y datos certificadas para garantizar la comunicación fluida y confiable en cualquier entorno. Nuestras soluciones están orientadas a optimizar la transferencia de información y facilitar las operaciones empresariales mediante una infraestructura robusta."
        extraContent={
          <ul>
            <li>✔ Instalación de redes certificadas de alta calidad.</li>
            <li>✔ Soluciones para entornos residenciales y empresariales.</li>
            <li>✔ Configuración para videollamadas y transmisión de datos.</li>
          </ul>
        }
      />

      {/* Servicio 12 */}
      <TextParallaxContent
        id="deteccion-incendio"
        imgUrl="/images/servicios/deteccion-incendio.jpg"
        subheading="Detección de Incendios"
        heading="Protección y Seguridad"
        description="Nuestros sistemas de detección de incendios están diseñados para proteger vidas y propiedades mediante tecnología avanzada que detecta humo, calor y gases peligrosos. Ofrecemos soluciones confiables que cumplen con las normativas de seguridad, asegurando una respuesta rápida ante cualquier eventualidad."
        extraContent={
          <ul>
            <li>✔ Detectores de humo, calor y gases tóxicos.</li>
            <li>✔ Alarmas acústicas y visuales para respuesta inmediata.</li>
            <li>✔ Configuración y mantenimiento profesional del sistema.</li>
          </ul>
        }
      />

      {/* Servicio 13 */}
      <TextParallaxContent
        id="tierras-fisicas"
        imgUrl="/images/servicios/tierras-fisicas.jpg"
        subheading="Tierras Físicas"
        heading="Protección contra Sobrecargas"
        description="Instalamos sistemas de tierras físicas y pararrayos para proteger tus instalaciones contra descargas eléctricas y sobrecargas. Estas soluciones son esenciales para garantizar la seguridad de equipos críticos y prevenir daños causados por tormentas eléctricas."
        extraContent={
          <ul>
            <li>✔ Instalación de sistemas de puesta a tierra certificados.</li>
            <li>✔ Diseño de sistemas de pararrayos efectivos.</li>
            <li>✔ Protección completa contra sobrecargas y rayos.</li>
          </ul>
        }
      />

      {/* Servicio 14 */}
      <TextParallaxContent
        id="internet-cosas"
        imgUrl="/images/servicios/internet-cosas.jpg"
        subheading="Internet de las Cosas"
        heading="Conexión Inteligente"
        description="Conectamos tus dispositivos mediante soluciones de Internet de las Cosas (IoT), permitiéndote automatizar y monitorear procesos en tiempo real. Desde sensores inteligentes hasta control remoto, optimizamos la eficiencia y el control de tus operaciones."
        extraContent={
          <ul>
            <li>✔ Sensores inteligentes y dispositivos conectados.</li>
            <li>✔ Integración con sistemas existentes.</li>
            <li>✔ Monitoreo remoto y análisis en tiempo real.</li>
          </ul>
        }
      />

      {/* Servicio 15 */}
      <TextParallaxContent
        id="wifi-publico"
        imgUrl="/images/servicios/wifi.jpg"
        subheading="Wi-Fi"
        heading="Conectividad para Todos"
        description="Ofrecemos soluciones de Wi-Fi público para garantizar conectividad confiable en parques, plazas y otros espacios comunitarios. Implementamos infraestructura robusta que asegura alta velocidad y cobertura amplia para todos los usuarios."
        extraContent={
          <ul>
            <li>✔ Redes públicas con cobertura extendida.</li>
            <li>✔ Configuración para múltiples usuarios simultáneos.</li>
            <li>✔ Monitoreo y soporte técnico especializado.</li>
          </ul>
        }
      />

    </MaxWidthWrapper>
  );
};

export default ServicesPage;
