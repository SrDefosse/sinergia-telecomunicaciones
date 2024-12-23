import React from "react";
import { Beams } from "@/components/utils/Beams";
import { GradientGrid } from "@/components/hero/GradientGrid";

const PoliticaDePrivacidad = () => {
    return (
        <div className="relative overflow-hidden">
          <GradientGrid />
          <Beams />
          <div className="min-h-screen flex flex-col justify-center relative z-10 bg-gradient-to-b from-zinc-900/30 to-zinc-950 py-20">
            <div className="max-w-5xl mx-auto px-24">
              <h1 className="text-3xl font-bold text-white mb-6">Política de Privacidad</h1>
              <p className="text-justify text-white leading-relaxed">
                Sinergia Telecomunicaciones, suscribe el presente aviso de privacidad en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en lo sucesivo la “Ley”). Los datos personales que usted (en lo sucesivo “el Titular”) ha proporcionado directamente o a través de medios electrónicos a Sinergia Telecomunicaciones (en lo sucesivo “el Responsable”), han sido recabados y serán tratados por Sinergia Telecomunicaciones bajo los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad, de conformidad con lo dispuesto por la Ley.
                Sinergia Telecomunicaciones podrá recabar datos personales sensibles en función del servicio o producto contratado por el Titular. De igual forma, dichos datos personales podrán ser transferidos a terceras personas ya sean físicas o morales, nacionales o extranjeras, con el único propósito de cumplir con los fines señalados en el presente aviso de privacidad.
                Sinergia Telecomunicaciones hace de su conocimiento que los datos personales proporcionados por el Titular serán utilizados para (i) llevar a cabo el proceso y verificación de conflicto de independencia; (ii) integrar su expediente como cliente; (iii) prestar los servicios que pudieran llegar a ser o hayan sido contratados; (iv) así como llevar a cabo la adquisición de los derechos o productos relacionados con los mismos.
                Los datos personales proporcionados a Sinergia Telecomunicaciones, se encontrarán debidamente protegidos a través de medidas de seguridad tecnológicas, físicas y administrativas, previniendo el uso o divulgación indebida de los mismos.
              </p>
            </div>
          </div>
        </div>
      );
    };

export default PoliticaDePrivacidad; 