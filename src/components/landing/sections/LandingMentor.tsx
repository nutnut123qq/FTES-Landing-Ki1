"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

import { MaterialIcon } from "./MaterialIcon";

const prfImages = [
  "/images/prf192-1.jpg",
  "/images/prf192-2.jpg",
  "/images/prf192-3.jpg",
  "/images/prf192-4.jpg",
  "/images/prf192-5.jpg",
  "/images/prf192-6.jpg",
  "/images/prf192-7.jpg",
];

const maeImages = [
  "/images/mae-1.jpg",
  "/images/mae-2.jpg",
  "/images/mae-3.jpg",
  "/images/mae-4.jpg",
  "/images/mae-5.jpg",
  "/images/mae-6.jpg",
  "/images/mae-7.jpg",
];

function ImageCarousel({ images, altPrefix, label }: { images: string[]; altPrefix: string; label?: string }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="group relative w-full overflow-hidden rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest shadow-sm aspect-[3/4]">
      {label && (
        <div className="absolute left-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
          {label}
        </div>
      )}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full w-full flex-shrink-0">
            <Image
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/50 group-hover:opacity-100"
        aria-label="Previous"
      >
        <MaterialIcon name="chevron_left" className="!text-2xl" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/50 group-hover:opacity-100"
        aria-label="Next"
      >
        <MaterialIcon name="chevron_right" className="!text-2xl" />
      </button>
    </div>
  );
}

export function LandingMentor() {
  return (
    <section className="overflow-hidden bg-st-surface-container-low px-8 py-24" id="mentor">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
            Mentor đồng hành và feedback thật
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-st-on-surface-variant">
            Gặp mentor FTES và đọc chia sẻ thật từ học viên đã hoàn thành khóa — để tự tin hơn
            trước khi chọn gói phù hợp.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 text-center shadow-sm lg:col-span-4">
            <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-st-secondary/20 bg-st-secondary-container">
              <Image
                src="/images/mentor.jpg"
                alt="Phan Thanh Huy"
                width={128}
                height={128}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-2 text-2xl font-bold text-st-on-background">
              Phan Thanh Huy
            </h3>
            <p className="mb-4 font-bold text-st-secondary">Mentor đồng hành Kì 1</p>
            <ul className="mb-6 space-y-2 text-left text-sm leading-relaxed text-st-on-surface-variant">
              <li className="flex items-start gap-2">
                <MaterialIcon name="emoji_events" className="!mt-0.5 !text-base text-yellow-600 shrink-0" filled />
                <span>Đồng hành giúp bạn chốt kiến thức đúng trọng tâm thay vì học dàn trải</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon name="emoji_events" className="!mt-0.5 !text-base text-yellow-600 shrink-0" filled />
                <span>Phân tích lỗi sai và chỉ ra cách cải thiện nhanh để vào bài tự tin hơn</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon name="emoji_events" className="!mt-0.5 !text-base text-yellow-600 shrink-0" filled />
                <span>Chữa đề, giải thích từng bước và gợi chiến lược học phù hợp từng mức điểm</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon name="school" className="!mt-0.5 !text-base text-st-secondary shrink-0" filled />
                <span>Hỗ trợ học viên chuẩn bị kỹ trước khi mua gói và trong suốt quá trình học</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon name="history_edu" className="!mt-0.5 !text-base text-st-secondary shrink-0" filled />
                <span>Luôn có feedback và hướng dẫn cụ thể để bạn thấy rõ giá trị của gói mình chọn</span>
              </li>
            </ul>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="rounded-full bg-st-secondary/10 px-3 py-1 text-xs font-bold text-st-secondary">
                Mentor
              </div>
              <div className="rounded-full bg-st-tertiary/10 px-3 py-1 text-xs font-bold text-st-tertiary">
                Feedback
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            <ImageCarousel images={prfImages} altPrefix="PRF192" label="PRF192" />
            <ImageCarousel images={maeImages} altPrefix="MAE101" label="MAE101" />
          </div>
        </div>
      </div>
    </section>
  );
}
