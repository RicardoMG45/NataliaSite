const faqs = [
  {
    question: "¿La terapia es confidencial?",
    answer:
      "Sí. La confidencialidad es un principio fundamental del proceso terapéutico.",
  },
  {
    question: "¿Las sesiones pueden ser en línea?",
    answer:
      "Sí. Actualmente se ofrece atención presencial en Ciudad Juárez y modalidad en línea.",
  },
  {
    question: "¿Cómo sé si necesito terapia?",
    answer:
      "No es necesario estar atravesando una crisis para buscar apoyo psicológico. La terapia también puede ayudarte a conocerte mejor y fortalecer tu bienestar emocional.",
  },
  {
    question: "¿Cuánto dura una sesión?",
    answer:
      "Generalmente las sesiones tienen una duración aproximada de 50 minutos.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white/40 py-24">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C98263]">
          Preguntas frecuentes
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3B2F2A]">
          Resolvamos algunas dudas
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#3B2F2A]">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-[#7A6256]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}