import Image from "next/image";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#3B2F2A]/10 bg-[#FFF8EF]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logoNA.png"
            alt="Natalia Armenta Centeno"
            width={120}
            height={120}
            className="h-25 w-25 object-contain"
            priority
          />

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-[#3B2F2A]">
              Natalia Armenta Centeno
            </h2>

            <p className="text-xs uppercase tracking-[0.25em] text-[#C98263]">
              Psicología
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-sm font-medium text-[#7A6256] md:flex">
          <a
            href="#sobre-mi"
            className="transition hover:text-[#C98263]"
          >
            Sobre mí
          </a>

          <a
            href="#servicios"
            className="transition hover:text-[#C98263]"
          >
            Servicios
          </a>

          <a
            href="#faq"
            className="transition hover:text-[#C98263]"
          >
            Preguntas frecuentes
          </a>

          <a
            href="#contacto"
            className="transition hover:text-[#C98263]"
          >
            Contacto
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="rounded-full bg-[#C98263] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#B57257]"
        >
          Agenda disponible próximamente
        </a>
      </nav>
    </header>
  );
}