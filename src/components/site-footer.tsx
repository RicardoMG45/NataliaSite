export function SiteFooter() {
  return (
    <footer className="border-t border-[#3B2F2A]/10 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="font-semibold text-[#3B2F2A]">
              Natalia Armenta Centeno
            </p>

            <p className="text-sm text-[#7A6256]">
              Licenciada en Psicología
            </p>
          </div>

          <p className="text-sm text-[#7A6256]">
            © {new Date().getFullYear()} Natalia Armenta Centeno. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}