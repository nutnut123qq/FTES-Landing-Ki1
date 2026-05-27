import { MaterialIcon } from "./MaterialIcon";

const cards = [
  {
    icon: "rocket_launch",
    bg: "bg-st-primary-fixed text-st-primary",
    title: "Mất gốc cần học lại",
    body: "Muốn có lộ trình rõ ràng, học lại từ đầu nhưng vẫn bám đúng trọng tâm của môn."
  },
  {
    icon: "reviews",
    bg: "bg-st-tertiary-fixed text-st-tertiary",
    title: "Muốn xem feedback thật",
    body: "Cần xem kết quả, ảnh feedback và mentor profile trước khi chốt gói."
  },
  {
    icon: "ads_click",
    bg: "bg-st-secondary-fixed text-st-secondary",
    title: "Cần chọn gói phù hợp",
    body: "Muốn bắt đầu với Basic, lên Premium hoặc chọn Master nếu muốn được kèm sát hơn."
  },
  {
    icon: "verified",
    bg: "bg-st-surface-container-high text-st-secondary",
    title: "Muốn chốt điểm nhanh hơn",
    body: "Đang nhắm mục tiêu qua môn chắc tay hoặc đẩy lên nhóm điểm cao hơn trong kỳ này."
  }
];

export function LandingAudience() {
  return (
    <section className="bg-st-surface-container-low px-8 py-24" id="benefits">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-12 text-center shadow-sm">
        <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-8 text-3xl font-black text-st-on-background">
          Gói này dành cho ai?
        </h2>
        <div className="mb-10 grid grid-cols-1 gap-8 text-left md:grid-cols-2 xl:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="space-y-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${c.bg}`}
              >
                <MaterialIcon name={c.icon} className="!text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-st-on-background">{c.title}</h4>
              <p className="text-st-on-surface-variant">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="inline-block rounded-full bg-st-surface-container px-8 py-4">
          <p className="font-bold text-st-primary">
            Nếu bạn đang phân vân giữa PRF192 và MAE101 hoặc giữa 3 gói, nhắn fanpage FTES để được hỗ trợ chọn gói.
          </p>
        </div>
      </div>
    </section>
  );
}
