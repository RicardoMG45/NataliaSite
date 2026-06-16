const services = [
  {
    title: "Acompañamiento psicológico individual",
    description:
      "Espacio personalizado para trabajar objetivos emocionales, personales y relacionales.",
  },
  {
    title: "Ansiedad y estrés",
    description:
      "Herramientas para afrontar preocupaciones, presión diaria y agotamiento emocional.",
  },
  {
    title: "Autoestima y crecimiento personal",
    description:
      "Fortalecimiento de la confianza, autoconocimiento y desarrollo emocional.",
  },
  {
    title: "Regulación emocional",
    description:
      "Aprender a identificar, comprender y gestionar emociones de manera saludable.",
  },
  {
    title: "Procesos de cambio",
    description:
      "Acompañamiento durante transiciones y momentos importantes de la vida.",
  },
  {
    title: "Atención en línea",
    description:
      "Sesiones accesibles desde cualquier lugar con la misma calidad profesional.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C98263]">
          Servicios
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3B2F2A]">
          Áreas de acompañamiento
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#3B2F2A]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-[#7A6256]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}