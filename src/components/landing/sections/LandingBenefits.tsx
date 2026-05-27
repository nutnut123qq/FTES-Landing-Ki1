import { MaterialIcon } from "./MaterialIcon";

type PackageTier = {
  name: string;
  price: string;
  originalPrice: string;
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
    title: "PRF192/PRF193 - Nhập môn lập trình C/C++",
    intro: "Dành cho sinh viên muốn học lại từ gốc, làm được bài lab và luyện PE theo dạng thật.",
    theme: "from-orange-500 to-red-500",
    buyUrl: FTES_COURSE_URLS.PRF192,
    packages: [
      {
        name: "BASIC",
        price: "239.000 đ",
        originalPrice: "300.000 đ",
        discount: "-20%",
        summary: "Khóa học BASIC",
        bullets: [
          "Khóa học này cung cấp toàn bộ video record của chương trình, giúp bạn chủ động học lại bất cứ lúc nào",
          "Đồng thời tích hợp tính năng AI Grading Code giúp chấm bài và phân tích chi tiết lỗi sai một cách tự động, hỗ trợ bạn cải thiện nhanh chóng",
          "Bạn cũng có thể nhắn hỏi mentor AI hoặc mentor của khóa học bất cứ lúc nào khi cần, đảm bảo mọi thắc mắc được giải đáp liên tục 24/7"
        ],
        accent: "bg-st-surface-container-low",
      },
      {
        name: "PREMIUM",
        price: "299.000 đ",
        originalPrice: "350.000 đ",
        discount: "-15%",
        summary: "Khóa học PREMIUM",
        bullets: [
          "Khóa học này bao gồm toàn bộ lợi ích và tính năng của khóa BASIC",
          "Đồng thời được nâng cấp để giúp học viên hiểu sâu bản chất kiến thức, từ đó dễ dàng đạt điểm cao và bứt phá trong học tập",
          "Chương trình tập trung hướng dẫn chiến lược chinh phục danh hiệu sinh viên giỏi và sinh viên xuất sắc",
          "Học viên được ôn tập chi tiết cho cả PE và FE với lộ trình rõ ràng, dễ áp dụng",
          "Ngoài ra còn được luyện tập với hơn 120+ bài coding từ cơ bản đến nâng cao, giúp thành thạo kỹ năng và tự tin bước vào kỳ thi",
          "Đây là lựa chọn phù hợp nếu bạn muốn không chỉ qua môn mà còn vươn lên top đầu"
        ],
        accent: "bg-st-primary-fixed",
      },
      {
        name: "MASTER",
        price: "369.000 đ",
        originalPrice: "450.000 đ",
        discount: "-18%",
        summary: "Khóa học MASTER",
        bullets: [
          "Khóa học này bao gồm toàn bộ tính năng và lợi ích của khóa PREMIUM",
          "Được thiết kế dành riêng cho sinh viên đặt mục tiêu săn học bổng danh giá \"CÓC VÀNG\" với lộ trình học tập rõ ràng và tối ưu kết quả",
          "Nội dung đào sâu giúp bạn nắm chắc kiến thức, nâng cao tư duy và tạo lợi thế cạnh tranh vượt trội",
          "Học viên được ôn tập và phân tích chi tiết 3 đề PE gần nhất, nắm rõ cấu trúc đề và cách giải hiệu quả để tự tin bước vào kỳ thi",
          "Ngoài ra, khóa học còn tặng kèm 2 tuần ôn luyện các giải thuật cốt lõi, hỗ trợ trực tiếp cho môn CSD202, giúp bạn học nhanh hơn, hiểu sâu hơn và tự tin chinh phục điểm số cao"
        ],
        accent: "bg-st-surface-container-high",
      }
    ]
  },
  {
    code: "MAE101",
    title: "MAE101 - Toán Cao Cấp Cho Lập Trình",
    intro: "Tập trung đúng dạng bài toán của MAE101: hiểu bản chất, luyện đề và chốt công thức để vào thi tự tin hơn.",
    theme: "from-cyan-600 to-sky-500",
    buyUrl: FTES_COURSE_URLS.MAE101,
    packages: [
      {
        name: "BASIC",
        price: "239.000 đ",
        originalPrice: "300.000 đ",
        discount: "-20%",
        summary: "Khóa học BASIC",
        bullets: [
          "Khóa học này cung cấp toàn bộ video record giúp bạn học lại không giới hạn, chủ động ôn tập mọi lúc mọi nơi",
          "Học viên được ôn luyện chuyên sâu theo từng dạng bài, kèm hướng dẫn chi tiết và mẹo làm bài giúp tối ưu thời gian và điểm số",
          "Đặc biệt, bạn sẽ được chia sẻ các \"trick Casio\" cực kỳ hiệu quả để xử lý nhanh những dạng bài khó",
          "Ngoài ra, bạn có thể nhắn hỏi mentor AI hoặc mentor của khóa học bất cứ lúc nào khi cần, đảm bảo mọi thắc mắc được giải đáp nhanh chóng 24/7, giúp bạn luôn duy trì tiến độ và tự tin chinh phục kết quả cao"
        ],
        accent: "bg-st-surface-container-low",
      },
      {
        name: "PREMIUM",
        price: "299.000 đ",
        originalPrice: "350.000 đ",
        discount: "-15%",
        summary: "Khóa học PREMIUM",
        bullets: [
          "Khóa học này bao gồm toàn bộ lợi ích và tính năng của khóa BASIC, đồng thời được nâng cấp để giúp học viên hiểu sâu bản chất kiến thức và bứt phá điểm số",
          "Chương trình tập trung vào mục tiêu đạt điểm cao, chinh phục danh hiệu sinh viên giỏi, sinh viên xuất sắc",
          "Học viên được hướng dẫn chi tiết các trick Casio cùng chiến thuật làm bài cấp tốc để đạt từ 8+ trong kỳ thi Final Exam",
          "Ngoài ra, khóa học còn cung cấp lộ trình ôn tập và luyện tập chi tiết cho cả Progress Test và Final Exam, giúp bạn nắm chắc kiến thức và tự tin bước vào kỳ thi"
        ],
        accent: "bg-st-primary-fixed",
      },
      {
        name: "MASTER",
        price: "369.000 đ",
        originalPrice: "450.000 đ",
        discount: "-18%",
        summary: "Khóa học MASTER",
        bullets: [
          "Khóa học này bao gồm toàn bộ tính năng và lợi ích của khóa PREMIUM, được thiết kế dành riêng cho sinh viên đặt mục tiêu săn học bổng danh giá \"CỐC VÀNG\"",
          "Nội dung được nâng cao giúp bạn đào sâu kiến thức, tối ưu tư duy và tạo lợi thế cạnh tranh vượt trội trong học tập",
          "Học viên được ôn luyện các dạng toán nâng cao với lộ trình rõ ràng trong 2 tuần, giúp nắm chắc và xử lý tốt những bài khó",
          "Đồng thời, khóa học còn tập trung luyện đề Final Exam với 3 đề gần nhất, phân tích chi tiết cấu trúc và cách làm bài hiệu quả, giúp bạn tự tin đạt điểm cao"
        ],
        accent: "bg-st-surface-container-high",
      }
    ]
  }
];

function PackageCard({ tier, buyUrl }: { tier: PackageTier; buyUrl: string }) {
  return (
    <div
      className={`flex h-full flex-col rounded-[1.75rem] border border-st-outline-variant/15 p-6 shadow-sm ${tier.accent}`}
    >
      <div className="mb-4">
        <p className="text-sm font-bold tracking-wide text-st-on-surface-variant">{tier.name}</p>
        <p className="mt-2 text-3xl font-black text-st-on-background">{tier.price}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm text-st-on-surface-variant line-through">{tier.originalPrice}</span>
          <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-bold text-rose-500">
            {tier.discount}
          </span>
        </div>
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
        className="mt-auto inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-st-surface-container-high px-4 py-3 pt-6 text-sm font-bold text-st-on-background transition-colors hover:bg-st-surface-container-highest"
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
              <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
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
