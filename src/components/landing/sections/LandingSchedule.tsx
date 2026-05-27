import { MaterialIcon } from "./MaterialIcon";

const scheduleItems = [
  {
    icon: "video_library",
    title: "Record đầy đủ:",
    text: "Học xong vẫn xem lại từng buổi để tự ôn trước kỳ thi."
  },
  {
    icon: "timer",
    title: "Lộ trình rõ:",
    text: "Mỗi môn được chia theo nhịp học dễ theo dõi và dễ chốt bài."
  },
  {
    icon: "construction",
    title: "Feedback thật:",
    text: "Ảnh feedback, kết quả và mentor profile đều được đưa lên để bạn xem trước."
  },
  {
    icon: "groups_2",
    title: "Hỗ trợ sau mua:",
    text: "Có người kèm để chốt lựa chọn gói, giải đáp và định hướng học tiếp."
  }
];

export function LandingSchedule() {
  return (
    <section className="bg-st-surface px-8 py-24" id="schedule">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-8 text-4xl font-black text-st-on-background">
            Mua gói xong bạn nhận được gì?
          </h2>
          <ul className="space-y-6">
            {scheduleItems.map((row) => (
              <li key={row.title} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-st-surface-container-high">
                  <MaterialIcon name={row.icon} className="!text-xl text-st-primary" />
                </div>
                <div className="text-left">
                  <strong className="block text-lg text-st-on-background">{row.title}</strong>
                  <span className="text-st-on-surface-variant">{row.text}</span>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
