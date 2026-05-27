import Image from "next/image";

import { MaterialIcon } from "./MaterialIcon";

const heroStats = [
  { label: "Gói BASIC", value: "239k" },
  { label: "Gói PREMIUM", value: "299k" },
  { label: "Gói MASTER", value: "369k" }
];

export function LandingHero() {
  return (
    <section className="relative overflow-hidden px-8 pt-16 pb-24" id="intro">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-st-primary-fixed px-4 py-2 text-sm font-bold text-st-on-primary-fixed">
            <MaterialIcon name="auto_awesome" className="!text-sm" filled />
            FTES Kì 1 · PRF192 & MAE101
          </div>
          <h1 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-6 text-5xl leading-tight font-black text-st-on-background lg:text-7xl">
            Chọn gói học để <span className="text-st-primary">chốt điểm</span> ngay từ đầu kỳ
          </h1>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-st-on-surface-variant">
            FTES Kì 1 đồng hành bạn ôn PRF192 và MAE101 với lộ trình rõ từng tuần. So sánh 3 gói
            học, làm quen mentor và đọc feedback thật từ các bạn đã học — để chọn gói phù hợp ngay
            từ đầu kỳ.
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            {[
              { icon: "check_circle", label: "3 gói rõ giá" },
              { icon: "group", label: "Mentor thật" },
              { icon: "reviews", label: "Feedback thật" },
              { icon: "map", label: "Lộ trình rõ" }
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-2 rounded-xl border border-st-outline-variant/10 bg-st-surface-container-lowest px-4 py-2 shadow-sm"
              >
                <MaterialIcon name={row.icon} className="!text-xl text-st-primary" />
                <span className="font-medium text-st-on-background">{row.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#packages"
              className="stitch-action-gradient rounded-full px-10 py-4 text-center text-lg font-bold text-white shadow-xl shadow-st-primary/30 transition-transform hover:scale-105"
            >
              Xem gói học
            </a>
            <a
              href="#mentor"
              className="rounded-full bg-st-surface-container-high px-10 py-4 text-center text-lg font-bold text-st-primary transition-colors hover:bg-st-surface-container-highest"
            >
              Xem feedback
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-st-primary/10 to-st-tertiary/10 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold tracking-wide text-st-on-surface-variant uppercase">
                  Gói được mua nhiều nhất
                </p>
                <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] text-3xl font-black text-st-on-background">
                  PRF192 · MAE101
                </h2>
              </div>
              <div className="rounded-full bg-st-primary-fixed px-4 py-2 text-sm font-bold text-st-primary">
                Kì 1
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-st-surface-container-low p-5 text-center">
                  <p className="text-sm font-semibold text-st-on-surface-variant">{item.label}</p>
                  <p className="mt-2 text-3xl font-black text-st-on-background">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 rounded-3xl bg-st-primary p-6 text-white md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-white/75">Bộ quyền lợi</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/90">
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="!text-base text-white" filled />
                    Video record để học lại bất kỳ lúc nào
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="!text-base text-white" filled />
                    Chữa bài, phân tích lỗi và lộ trình rõ ràng
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="!text-base text-white" filled />
                    Mentor đồng hành trong suốt quá trình học
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-white/75">Giá từ</p>
                <p className="mt-2 text-4xl font-black">239k</p>
                <p className="mt-2 text-sm text-white/80">Mua theo từng môn hoặc chọn combo theo nhu cầu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
