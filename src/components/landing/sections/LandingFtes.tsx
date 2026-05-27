import Image from "next/image";

const sellingPoints = [
  "2 môn trọng tâm cho kì 1",
  "3 gói giá rõ ràng cho từng nhu cầu",
  "Có mentor, feedback và record thật"
];

export function LandingFtes() {
  return (
    <section className="overflow-hidden px-8 py-24" id="cta">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 rounded-3xl bg-st-primary p-12 text-white md:flex-row">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-full opacity-10">
          <div className="absolute top-0 right-0 -mt-64 -mr-64 h-[500px] w-[500px] rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative z-10 flex-1">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-6 text-4xl font-black">
            Chốt gói phù hợp ngay hôm nay
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-white/80">
            Chúng tôi minh bạch giá, quyền lợi và lộ trình từng gói. Inbox fanpage FTES để được hỗ
            trợ chọn đúng mức cho PRF192 hoặc MAE101.
          </p>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {sellingPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm">
                {point}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#packages"
              className="rounded-full bg-white px-8 py-3 font-bold text-st-primary transition-colors hover:bg-st-surface-container-highest"
            >
              Xem gói học
            </a>
            <a
              href="https://www.facebook.com/ftes.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/30 px-8 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              Đăng ký ngay
            </a>
          </div>
        </div>
        <div className="relative z-10 flex w-full flex-1 justify-center">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <Image
              src="/images/Ftes_logo.jpg"
              alt="FTES logo"
              width={400}
              height={520}
              className="rounded-lg shadow-2xl"
              sizes="(min-width: 768px) 400px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
