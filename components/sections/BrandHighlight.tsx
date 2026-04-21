import Image from "next/image";

export default function BrandHighlight() {
  return (
    <section className="relative overflow-hidden bg-surface/80 border-t border-hborder/60">
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.16),_transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[36px] border border-gold/15 bg-hbg/90 backdrop-blur-xl p-10 shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="flex items-center justify-center">
              <Image
                src="/logo-paulo-bilek.png"
                alt="Logo Paulo Bilek"
                width={480}
                height={160}
                className="h-36 sm:h-40 md:h-48 w-auto object-contain"
                priority
              />
            </div>
            <div className="h-0.5 w-28 rounded-full bg-gold/60" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
