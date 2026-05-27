"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const items = [
  {
    q: "Tôi có thể mua từng môn riêng không?",
    a: "Có. Bạn có thể đăng ký từng môn riêng, rồi chọn gói Basic, Premium hoặc Master theo nhu cầu học tập."
  },
  {
    q: "Basic, Premium và Master khác nhau chỗ nào?",
    a: "Basic thiên về tự học có record; Premium có thêm mức hỗ trợ sâu hơn; Master dành cho bạn muốn được mentor kèm sát hơn."
  },
  {
    q: "Tôi mất gốc thì có theo được không?",
    a: "Có. Nội dung được viết lại để đi từ nền tảng trước, sau đó mới nâng lên dạng bài thực hành và luyện đề."
  },
  {
    q: "Tôi có được xem feedback thật trước khi mua không?",
    a: "Có. Bạn có thể xem mentor và feedback ngay trên trang này trước khi quyết định đăng ký."
  },
  {
    q: "Nếu muốn học cả 2 môn thì sao?",
    a: "Bạn có thể tham khảo cả hai gói PRF192 và MAE101 rồi chọn mức hỗ trợ phù hợp cho từng môn."
  }
];

export function LandingFaq() {
  return (
    <section className="bg-st-surface-container-low px-8 py-24" id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
            Câu hỏi thường gặp
          </h2>
        </div>
        <Accordion defaultValue={["faq-0"]} className="w-full space-y-4">
          {items.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest px-6 py-2 shadow-sm border-b-0"
            >
              <AccordionTrigger className="font-[family-name:var(--font-heading),ui-sans-serif] text-left text-lg font-bold text-st-on-background hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-st-on-surface-variant">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
