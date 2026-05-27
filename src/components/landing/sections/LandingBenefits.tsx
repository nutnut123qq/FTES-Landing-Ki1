import { MaterialIcon } from "./MaterialIcon";

type PackageTier = {
  name: string;
  price: string;
  discount: string;
  summary: string;
  bullets: string[];
  accent: string;
};

type CoursePackage = {
  code: string;
  title: string;
  intro: string;
  theme: string;
  buyUrl: string;
  packages: PackageTier[];
};

const FTES_COURSE_URLS = {
  PRF192:
    "https://ftes.vn/vi/courses/detail/goi-prf192prf193---nhap-mon-lap-trinh-cc",
  MAE101: "https://ftes.vn/vi/courses/detail/goi-mae101---toan-cao-cap-cho-lap-trinh"
} as const;

const courses: CoursePackage[] = [
  {
    code: "PRF192",
    title: "Nhập môn lập trình C/C++",
    intro: "Dành cho sinh viên muốn học lại từ gốc, làm được bài lab và luyện PE theo dạng thật.",
    theme: "from-orange-500 to-red-500",
    buyUrl: FTES_COURSE_URLS.PRF192,
    packages: [
      {
        name: "Basic",
        price: "239.000 đ",
        discount: "-20%",
        summary: "Khóa học BASIC",
        bullets: [
          "Video record toàn bộ buổi học để xem lại bất cứ lúc nào",
          "Ôn từng dạng bài, bám sát kiến thức nền và bài tập chuẩn",
          "Nhắn mentor khi cần để không bị đứt mạch học"
        ],
        accent: "bg-st-surface-container-low",
      },
      {
        name: "Premium",
        price: "299.000 đ",
        discount: "-15%",
        summary: "Khóa học PREMIUM",
        bullets: [
          "Bao gồm toàn bộ quyền lợi của Basic",
          "Nâng cấp chỗ hiểu sâu bản chất để xử lý bài tự tin hơn",
          "Đồng hành giải thích code, sửa lỗi và tối ưu cách làm"
        ],
        accent: "bg-st-primary-fixed",
      },
      {
        name: "Master",
        price: "369.000 đ",
        discount: "-18%",
        summary: "Khóa học MASTER",
        bullets: [
          "Bao gồm toàn bộ quyền lợi của Premium",
          "Lộ trình học sát mục tiêu điểm cao, có nhịp luyện tập riêng",
          "Phù hợp nếu bạn muốn được kèm sát hơn trong giai đoạn nước rút"
        ],
        accent: "bg-st-surface-container-high",
      }
    ]
  },
  {
    code: "MAE101",
    title: "Mathematics for Engineering",
    intro: "Tập trung đúng dạng bài toán của MAE101: hiểu bản chất, luyện đề và chốt công thức để vào thi tự tin hơn.",
    theme: "from-cyan-600 to-sky-500",
    buyUrl: FTES_COURSE_URLS.MAE101,
    packages: [
      {
        name: "Basic",
        price: "239.000 đ",
        discount: "-20%",
        summary: "Khóa học BASIC",
        bullets: [
          "Video record toàn bộ buổi học để chủ động học lại",
          "Học theo từng buổi, bám sát dạng bài và công thức trọng tâm",
          "Có mentor hỗ trợ khi cần chốt lỗi nhanh"
        ],
        accent: "bg-st-surface-container-low",
      },
      {
        name: "Premium",
        price: "299.000 đ",
        discount: "-15%",
        summary: "Khóa học PREMIUM",
        bullets: [
          "Bao gồm toàn bộ quyền lợi của Basic",
          "Được nâng cấp sâu hơn về kỹ năng xử lý bài và tư duy giải nhanh",
          "Có phần giải thích vì sao sai để tránh lặp lỗi khi thi"
        ],
        accent: "bg-st-primary-fixed",
      },
      {
        name: "Master",
        price: "369.000 đ",
        discount: "-18%",
        summary: "Khóa học MASTER",
        bullets: [
          "Bao gồm toàn bộ quyền lợi của Premium",
          "Luyện đề theo lộ trình riêng, tăng tốc vào giai đoạn cận thi",
          "Phù hợp nếu bạn muốn được mentor theo sát hơn"
        ],
        accent: "bg-st-surface-container-high",
      }
    ]
  }
];

function PackageCard({ tier, buyUrl }: { tier: PackageTier; buyUrl: string }) {
  return (
    <div className={`rounded-[1.75rem] border border-st-outline-variant/15 p-6 shadow-sm ${tier.accent}`}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold tracking-wide text-st-on-surface-variant uppercase">{tier.name}</p>
          <p className="mt-2 text-3xl font-black text-st-on-background">{tier.price}</p>
        </div>
        <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-bold text-rose-500">{tier.discount}</span>
      </div>
      <p className="mb-4 text-sm font-semibold text-st-on-background">{tier.summary}</p>
      <ul className="space-y-3 text-sm leading-relaxed text-st-on-surface-variant">
        {tier.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <MaterialIcon name="check_circle" className="!mt-0.5 !text-base text-emerald-600" filled />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <a
        href={buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-st-surface-container-high px-4 py-3 text-sm font-bold text-st-on-background transition-colors hover:bg-st-surface-container-highest"
      >
        Mua gói này
      </a>
    </div>
  );
}

export function LandingBenefits() {
  return (
    <section className="bg-st-surface-container-low px-8 py-24" id="packages">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
            Chọn gói khóa học
          </h2>
          <p className="text-lg text-st-on-surface-variant">
            Mỗi môn đều có 3 gói. Bạn có thể mua theo nhu cầu học lại, cần mentor sát hơn hoặc muốn
            được nâng cấp lộ trình để đẩy điểm.
          </p>
        </div>

        <div className="space-y-12">
          {courses.map((course) => (
            <div key={course.code} className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 shadow-sm">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className={`inline-flex rounded-full bg-gradient-to-r ${course.theme} px-3 py-1 text-xs font-bold tracking-[0.2em] text-white uppercase`}>
                    {course.code}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mt-3 text-3xl font-black text-st-on-background">
                    {course.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-st-on-surface-variant md:text-right md:text-base">
                  {course.intro}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                {course.packages.map((tier) => (
                  <PackageCard key={tier.name} tier={tier} buyUrl={course.buyUrl} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
