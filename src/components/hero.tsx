import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#F4DDD2] blur-3xl opacity-60" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#E8D3BF] blur-3xl opacity-50" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 md:grid-cols-2 md:py-28">
        {/* Texto */}
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#C98263]/25 bg-white/60 px-4 py-2 text-sm text-[#9A6048]">
            Atención presencial en Ciudad Juárez · Modalidad en línea
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#3B2F2A] md:text-6xl">
            Un espacio seguro para escucharte, comprenderte y acompañarte.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#7A6256]">
            La terapia es una oportunidad para detenernos, entender lo que
            estamos viviendo y desarrollar herramientas que nos permitan afrontar
            la vida con mayor claridad, confianza y bienestar emocional.
          </p>

          <div className="mt-8">
            <p className="font-semibold text-[#3B2F2A]">
              Natalia Armenta Centeno
            </p>

            <p className="text-[#C98263]">
              Licenciada en Psicología
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-[#C98263] px-7 py-3 text-center text-sm font-medium text-white transition hover:bg-[#B57257]"
            >
              Solicitar información
            </a>

            <a
              href="#sobre-mi"
              className="rounded-full border border-[#3B2F2A]/15 bg-white/70 px-7 py-3 text-center text-sm font-medium text-[#3B2F2A] transition hover:bg-white"
            >
              Conocer más
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="relative">
          <div className="rounded-[2rem] bg-[#F4DDD2] p-4 shadow-2xl shadow-[#3B2F2A]/10">
            <div className="rounded-[1.5rem] bg-[#E8D3BF] p-6">
              <div className="overflow-hidden rounded-[1rem]">
                <Image
                  src="/natalia-hero.png"
                  alt="Natalia Armenta Centeno"
                  width={800}
                  height={1000}
                  priority
                  className="w-full object-cover"
                />
              </div>

              <div className="pt-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#C98263]">
                  Psicología
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#3B2F2A]">
                  Natalia Armenta Centeno
                </h3>

                <p className="mt-3 leading-7 text-[#7A6256]">
                  Atención psicológica presencial en Ciudad Juárez y modalidad
                  en línea. Un acompañamiento profesional, humano y
                  confidencial enfocado en tu bienestar emocional.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-sm text-[#7A6256]">
                    Presencial
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm text-[#7A6256]">
                    En línea
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm text-[#7A6256]">
                    Ciudad Juárez
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}