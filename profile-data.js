/**
 * ==============================================================================
 * HỒ SƠ NĂNG LỰC & DỮ LIỆU CÁ NHÂN (PORTFOLIO DATA CONFIG)
 * Kỹ sư Võ Tấn Bản (Ban Vo Tan) - btvdev03
 * Kỹ sư Kỹ thuật Phần mềm & Học viên Cao học Hệ thống Thông tin (TDMU)
 * ==============================================================================
 * 
 * [HƯỚNG DẪN DÀNH CHO BẠN / USER GUIDE]:
 * - File này là nguồn dữ liệu duy nhất cho toàn bộ website btvdev03.github.io.
 * - Bạn chỉ cần chỉnh sửa nội dung văn bản, liên kết, danh sách dự án, bài báo
 *   trong file này. Website sẽ TỰ ĐỘNG cập nhật hiển thị tương ứng.
 * - KHÔNG CẦN chỉnh sửa bất kỳ dòng mã Three.js hay logic dựng hình 3D phức tạp nào!
 * - Sau khi sửa xong, chỉ cần commit & push lên GitHub (hoặc build `npm run build`),
 *   GitHub Actions sẽ tự động deploy bản mới nhất lên GitHub Pages.
 * ==============================================================================
 */

const PROFILE_DATA = {
  // --------------------------------------------------------------------------
  // 1. THÔNG TIN CÁ NHÂN & TIỂU SỬ (PROFILE & BIO)
  // --------------------------------------------------------------------------
  profile: {
    name: "Võ Tấn Bản",
    brandName: "Ban Vo Tan",
    verified: true, // Hiển thị tích xanh Meta chính chủ
    title: "Kỹ sư Phần mềm & Học viên Cao học Hệ thống Thông tin",
    institution: "Trường Đại học Thủ Dầu Một (TDMU)",
    department: "Khoa Công nghệ Thông tin",
    location: "Bình Dương & Miền Tây Nam Bộ, Việt Nam",
    email: "btv.dev03@gmail.com",
    githubUsername: "btvdev03",
    statusBadge: "🟢 Sẵn sàng hợp tác nghiên cứu & phát triển phần mềm",
    bioShort: "Kỹ sư Kỹ thuật Phần mềm & Học viên Cao học HTTT tại Trường Đại học Thủ Dầu Một (TDMU). Xuất thân từ vùng đất phù sa sông nước miền Tây, đam mê xây dựng những hệ thống phần mềm thực tế, bền bỉ và các công cụ mã nguồn mở hữu ích.",
    bioDetails: [
      "Kết hợp tư duy nghiên cứu học thuật chuẩn mực với năng lực kỹ thuật thực chiến giải quyết trực diện các bài toán vận hành.",
      "Lĩnh vực quan tâm chính: Hệ thống Thông tin (Information Systems), Khai phá dữ liệu khoa học, Semantic Search, Kiến trúc phần mềm và Chuyển đổi số doanh nghiệp."
    ],
    avatarInitials: "VB"
  },

  // --------------------------------------------------------------------------
  // 2. QUÁ TRÌNH HỌC TẬP & LÀM VIỆC (TIMELINE: EDUCATION & EXPERIENCE)
  // --------------------------------------------------------------------------
  timeline: [
    {
      id: "tdmu-msc",
      period: "2024 - Hiện tại",
      badge: "M.Sc Candidate",
      type: "academic", // "academic" (học thuật) hoặc "work" (công việc)
      title: "Học viên Cao học ngành Hệ thống Thông tin",
      organization: "Trường Đại học Thủ Dầu Một (TDMU)",
      location: "Bình Dương, Việt Nam",
      description: "Tiếp tục chương trình đào tạo Thạc sĩ Hệ thống Thông tin. Tập trung nghiên cứu Kiến trúc HTTT nâng cao, Khai phá tri thức từ dữ liệu khoa học (Knowledge Discovery), Semantic Search và biểu diễn dữ liệu ngữ nghĩa.",
      points: [
        "Nghiên cứu kiến trúc truy xuất thông tin ngữ nghĩa (Semantic Information Retrieval) ứng dụng trong dữ liệu ấn phẩm khoa học.",
        "Mô hình hóa dữ liệu và đề xuất kiến trúc module hóa chi phí thấp cho chuyển đổi số doanh nghiệp địa phương.",
        "Tham gia sinh hoạt học thuật, báo cáo chuyên đề nghiên cứu tại Khoa Công nghệ Thông tin - TDMU."
      ],
      tags: ["Hệ thống Thông tin", "Nghiên cứu Khoa học", "Semantic Search", "TDMU"]
    },
    {
      id: "dx-engineer",
      period: "2023 - Hiện tại",
      badge: "Kỹ sư Thực chiến",
      type: "work",
      title: "Kỹ sư Giải pháp & Phần mềm Ứng dụng",
      organization: "Dự án Doanh nghiệp & Thực tiễn",
      location: "Bình Dương & TP.HCM",
      description: "Trực tiếp khảo sát hiện trạng, tư vấn giải pháp kỹ thuật và phát triển các hệ sinh thái phần mềm số hóa vận hành nhà xưởng, văn phòng điện tử.",
      points: [
        "Thiết kế và triển khai luồng tự động hóa quy trình nghiệp vụ (Workflow Automation) với State Machine và Audit Trail bất biến.",
        "Tối ưu hóa cơ sở dữ liệu quan hệ và xây dựng pipeline đồng bộ dữ liệu đáp ứng độ trễ thấp.",
        "Phát triển ứng dụng Web giám sát vận hành Offline-First loại bỏ quy trình ghi chép giấy tờ thủ công."
      ],
      tags: ["Kỹ thuật Phần mềm", "Chuyển đổi số", "State Machine", "Full-Stack"]
    },
    {
      id: "tdmu-beng",
      period: "2020 - 2024",
      badge: "Tốt nghiệp Kỹ sư",
      type: "academic",
      title: "Kỹ sư Kỹ thuật Phần mềm (B.Eng)",
      organization: "Trường Đại học Thủ Dầu Một (TDMU)",
      location: "Bình Dương, Việt Nam",
      description: "Tốt nghiệp Kỹ sư Kỹ thuật Phần mềm chính quy. Nắm vững nền tảng khoa học máy tính, cấu trúc dữ liệu, giải thuật, công nghệ web và kiến trúc phần mềm.",
      points: [
        "Đồ án tốt nghiệp và các dự án chuyên ngành đạt kết quả xuất sắc với định hướng ứng dụng thực tiễn cao.",
        "Xây dựng và đóng góp nhiều công cụ mã nguồn mở phục vụ cộng đồng lập trình viên.",
        "Chuyển tiếp học tập trực tiếp lên bậc Cao học ngành Hệ thống Thông tin tại TDMU."
      ],
      tags: ["Kỹ thuật Phần mềm", "Kỹ sư TDMU", "Computer Science", "Open-Source"]
    }
  ],

  // --------------------------------------------------------------------------
  // 3. DỰ ÁN CÁ NHÂN & MÃ NGUỒN MỞ (PERSONAL & OPEN-SOURCE PROJECTS)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "git-roast",
      name: "git-roast",
      badge: "CLI Tool",
      category: "Developer Tools",
      tagline: "CLI phân tích thói quen commit Git và tổng kết phong cách Spotify Wrapped",
      description: "Công cụ dòng lệnh quét sâu Git log cục bộ hoàn toàn offline với tốc độ dưới 500ms: phân tích thói quen commit đêm muộn, tần suất làm việc và xuất thẻ tổng kết cá tính dev hài hước phong cách Spotify Wrapped.",
      features: [
        "Quét toàn bộ Git tree cục bộ tốc độ cực cao, hoạt động 100% offline",
        "Heuristic phân tích commit message và thói quen làm việc ngoài giờ",
        "Tạo thẻ thống kê ASCII / SVG độc đáo kèm báo cáo JSON/Markdown tinh gọn"
      ],
      techStack: ["Node.js", "TypeScript", "Commander.js", "Git Internals"],
      githubUrl: "https://github.com/btvdev03/git-roast",
      demoUrl: null,
      highlightMetric: "< 500ms Local Scan",
      status: "Open Source"
    },
    {
      id: "InstantTranslate",
      name: "InstantTranslate",
      badge: "Chrome Extension",
      category: "Productivity",
      tagline: "Tiện ích Chrome Manifest V3 dịch thuật ngữ chuyên ngành tức thì",
      description: "Tiện ích mở rộng Chrome chuẩn Manifest V3 hỗ trợ tra cứu thuật ngữ học thuật và kỹ thuật ngay khi bôi đen trên arXiv, IEEE, GitHub mà không làm gián đoạn luồng đọc tài liệu.",
      features: [
        "Chuẩn Manifest V3 với Service Worker nền tối ưu hóa tài nguyên trình duyệt",
        "Shadow DOM overlay độc lập, hoàn toàn chống xung đột CSS trang web",
        "Cơ chế Fallback thông minh và phím tắt tiện dụng kèm phát âm chuẩn thuật ngữ"
      ],
      techStack: ["TypeScript", "Chrome MV3", "Shadow DOM", "Web APIs"],
      githubUrl: "https://github.com/btvdev03/InstantTranslate",
      demoUrl: null,
      highlightMetric: "Zero-Latency Overlay",
      status: "Productivity"
    },
    {
      id: "IdeaClaimer",
      name: "IdeaClaimer",
      badge: "Research Tool",
      category: "Automation & Data",
      tagline: "Pipeline tự động thu thập & tổng hợp ý tưởng nghiên cứu từ arXiv",
      description: "Hệ thống tự động theo dõi, thu thập các bài báo mới nhất trên arXiv theo chuyên mục Hệ thống Thông tin & AI, trích xuất metadata, phân cụm chủ đề ngữ nghĩa và gửi bản tin tóm tắt hàng ngày.",
      features: [
        "Crawler tự động định kỳ quét và trích xuất metadata công bố khoa học",
        "Thuật toán phân cụm chủ đề nhóm các ý tưởng tương đồng theo ngữ nghĩa",
        "Xuất bản tin tóm tắt Markdown hàng ngày và REST API tích hợp tra cứu cá nhân"
      ],
      techStack: ["Python", "FastAPI", "arXiv API", "GitHub Actions"],
      githubUrl: "https://github.com/btvdev03/IdeaClaimer",
      demoUrl: null,
      highlightMetric: "Daily Auto-Digest",
      status: "Academic Tool"
    },
    {
      id: "zen-desk-clock",
      name: "zen-desk-clock",
      badge: "Web App",
      category: "Productivity & Zen",
      tagline: "Đồng hồ để bàn tối giản phong cách Zen hỗ trợ làm việc tập trung (Deep Work)",
      description: "Ứng dụng đồng hồ để bàn tương tác phong cách Zen tối giản, tích hợp chu kỳ Pomodoro, âm thanh nền tự nhiên (tiếng mưa, sóng biển) tổng hợp bằng Web Audio API hoàn toàn offline và chế độ Fullscreen tiết kiệm điện.",
      features: [
        "Giao diện Dark Mode tương phản cao với kiểu chữ số học tối giản",
        "Web Audio API tự tổng hợp âm thanh thiên nhiên offline, không tốn băng thông",
        "Tích hợp Screen Wake Lock API chống tắt màn hình khi đang tập trung làm việc"
      ],
      techStack: ["React", "TypeScript", "Web Audio API", "Wake Lock API"],
      githubUrl: "https://github.com/btvdev03/zen-desk-clock",
      demoUrl: "https://btvdev03.github.io/zen-desk-clock/",
      highlightMetric: "OLED Fullscreen",
      status: "Live Web App"
    },
    {
      id: "btvdev03-portfolio",
      name: "btvdev03.github.io",
      badge: "Portfolio & 3D",
      category: "Creative Engineering",
      tagline: "Website cá nhân phong cách Washi-Zen & Sông nước Miền Tây Nam Bộ",
      description: "Portfolio cá nhân kết hợp nghệ thuật đồ họa Three.js thủ công mô phỏng dòng sông phù sa, xuồng ba lá bồng bềnh, đầm sen Đồng Tháp Mười và rặng núi Thất Sơn thanh bình.",
      features: [
        "Shader sông nước phù sa dập dềnh 3D mộc mạc kèm hiệu ứng chu kỳ hoàng hôn/đêm",
        "Kiến trúc dữ liệu độc lập profile-data.js giúp dễ dàng cập nhật thông tin",
        "Thiết kế mộc mạc, đậm chất văn hóa Nam Bộ kết hợp chuẩn học thuật quốc tế"
      ],
      techStack: ["Three.js", "TypeScript", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/btvdev03/btvdev03.github.io",
      demoUrl: "https://btvdev03.github.io/",
      highlightMetric: "Three.js 60 FPS",
      status: "Live Portfolio"
    }
  ],

  // --------------------------------------------------------------------------
  // 4. NGHIÊN CỨU KHOA HỌC & BÀI BÁO (RESEARCH PAPERS & PUBLICATIONS)
  // --------------------------------------------------------------------------
  research: {
    overview: "Các công trình nghiên cứu, báo cáo học thuật và hướng nghiên cứu chính tại Trường Đại học Thủ Dầu Một (TDMU).",
    papers: [
      {
        id: "paper-semantic-retrieval",
        title: "A Semantic Knowledge Discovery and Retrieval Architecture for Scientific Literature in Information Systems",
        titleVi: "Kiến trúc Khám phá Tri thức & Truy xuất Thông tin Ngữ nghĩa cho Tài liệu Khoa học trong Hệ thống Thông tin",
        authors: "Võ Tấn Bản, Giảng viên Hướng dẫn & Nhóm Nghiên cứu TDMU",
        venue: "Information Systems & Intelligent Computing Research Series, TDMU",
        year: 2024,
        status: "Working Paper",
        badge: "Nghiên cứu Cao học",
        metricBadge: "-40% Retrieval Time",
        takeaway: "Kiến trúc lai kết hợp dense vector embeddings và quan hệ knowledge graph giúp thu hẹp khoảng cách ngữ nghĩa, tăng độ chính xác tìm kiếm tài liệu khoa học.",
        abstract: "Trong kỷ nguyên bùng nổ số lượng ấn phẩm khoa học, các phương pháp tìm kiếm từ khóa truyền thống thường bỏ sót các mối liên kết ngữ nghĩa liên ngành. Nghiên cứu này đề xuất một kiến trúc truy xuất lai (hybrid retrieval) kết hợp biểu diễn vector ngữ nghĩa (dense vector embeddings) với trích xuất quan hệ trong đồ thị tri thức (knowledge graphs), giúp các nhà nghiên cứu rút ngắn hơn 40% thời gian tổng quan tài liệu và phát hiện các mối tương quan học thuật tiềm ẩn.",
        keywords: [
          "Information Systems",
          "Knowledge Graphs",
          "Semantic Search",
          "Information Retrieval",
          "Academic Data Mining"
        ],
        pdfUrl: "https://github.com/btvdev03/IdeaClaimer",
        codeUrl: "https://github.com/btvdev03/IdeaClaimer",
        bibtex: `@article{vo2024semantic,
  title   = {A Semantic Knowledge Discovery and Retrieval Architecture for Scientific Literature in Information Systems},
  author  = {Vo, Tan Ban},
  journal = {Information Systems & Intelligent Computing Series, Thu Dau Mot University (TDMU)},
  year    = {2024},
  keywords= {Information Systems, Knowledge Graphs, Semantic Search, Information Retrieval}
}`
      },
      {
        id: "paper-modular-dx-sme",
        title: "Architectural Framework for Low-Cost Modular Digital Transformation in Industrial Manufacturing SMEs",
        titleVi: "Khung Kiến trúc Module hóa Chi phí Thấp cho Chuyển đổi số Doanh nghiệp Sản xuất Vừa và Nhỏ (SMEs)",
        authors: "Võ Tấn Bản",
        venue: "Applied Software Engineering & Enterprise Architecture Journal",
        year: 2024,
        status: "Preprint",
        badge: "Ứng dụng Thực tiễn",
        metricBadge: "-60% Upfront Cost",
        takeaway: "Mô hình kiến trúc module hóa hướng sự kiện chi phí thấp cho phép các doanh nghiệp sản xuất SME chuyển đổi số từng bước mà không cần đầu tư ERP nguyên khối đắt đỏ.",
        abstract: "Các doanh nghiệp sản xuất vừa và nhỏ (SMEs) thường gặp rào cản tài chính rất lớn khi triển khai các hệ thống ERP nguyên khối (monolithic). Nghiên cứu đề xuất khung kiến trúc vi module (micro-modular architecture) ứng dụng luồng xử lý bất đồng bộ dựa trên sự kiện và các dịch vụ độc lập, giúp doanh nghiệp số hóa từng công đoạn với chi phí đầu tư ban đầu giảm hơn 60% trong khi vẫn duy trì tính toàn vẹn và nhất quán của dữ liệu nghiệp vụ.",
        keywords: [
          "Digital Transformation",
          "Enterprise Architecture",
          "Microservices",
          "SME Digitization",
          "Event-Driven"
        ],
        pdfUrl: "#",
        codeUrl: "https://github.com/btvdev03",
        bibtex: `@article{vo2024sme,
  title   = {Architectural Framework for Low-Cost Modular Digital Transformation in Industrial Manufacturing SMEs},
  author  = {Vo, Tan Ban},
  journal = {Applied Software Engineering & Enterprise Systems},
  year    = {2024},
  keywords= {Digital Transformation, Enterprise Architecture, Micro-modular}
}`
      }
    ],
    focusAreas: [
      {
        title: "Hệ thống Thông tin & Khai phá Tri thức",
        desc: "Mô hình hóa dữ liệu quan hệ, đồ thị tri thức (Knowledge Graph) và tìm kiếm thông tin ngữ nghĩa (Semantic Information Retrieval)."
      },
      {
        title: "Kiến trúc Phần mềm Doanh nghiệp Bền bỉ",
        desc: "Thiết kế hệ thống phân tán, máy trạng thái (Finite State Machine), audit trail bất biến và đồng bộ dữ liệu đa chi nhánh."
      },
      {
        title: "Giải pháp Số hóa Mộc mạc & Chi phí Thấp",
        desc: "Xây dựng các công cụ phần mềm phục vụ nông sản, kho vận cảng sông và doanh nghiệp vừa và nhỏ địa phương."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 5. KIẾN THỨC CHIA SẺ & GHI CHÚ KỸ THUẬT (ARTICLES & KNOWLEDGE SHARING)
  // --------------------------------------------------------------------------
  articles: [
    {
      id: "art-git-cli",
      title: "Xây dựng CLI cực nhanh với Node.js và Git Internals",
      category: "Kỹ thuật Lập trình",
      date: "10/2024",
      readTime: "5 phút đọc",
      summary: "Kinh nghiệm bóc tách cấu trúc object và commit tree của Git trực tiếp bằng mã nguồn để xây dựng CLI phân tích log với tốc độ thực thi dưới 500ms mà không phụ thuộc binary ngoài.",
      tags: ["Git", "Node.js", "CLI", "Performance"],
      url: "https://github.com/btvdev03/git-roast"
    },
    {
      id: "art-academic-journey",
      title: "Từ Kỹ sư Phần mềm đến Học viên Cao học HTTT: Góc nhìn Thực tế",
      category: "Học thuật & Định hướng",
      date: "08/2024",
      readTime: "7 phút đọc",
      summary: "Chia sẻ về hành trình tiếp nối từ bậc đại học kỹ sư sang nghiên cứu cao học tại TDMU: làm thế nào để dung hòa giữa tư duy học thuật chuẩn mực và yêu cầu thực tế khắt khe.",
      tags: ["TDMU", "Cao học HTTT", "Kỹ sư", "Academic"],
      url: "#"
    },
    {
      id: "art-offline-first",
      title: "Thiết kế Kiến trúc Offline-First cho ứng dụng Web giám sát nhà xưởng",
      category: "Kiến trúc Hệ thống",
      date: "06/2024",
      readTime: "6 phút đọc",
      summary: "Giải pháp thiết kế lưu trữ cục bộ với IndexedDB và đồng bộ 2 chiều (2-way sync) khi kết nối mạng chập chờn trong môi trường nhà máy, đảm bảo không thất thoát dữ liệu sản xuất.",
      tags: ["Offline-First", "PWA", "IndexedDB", "Architecture"],
      url: "#"
    }
  ],

  // --------------------------------------------------------------------------
  // 6. LIÊN HỆ & MẠNG XÃ HỘI (CONTACT & SOCIALS)
  // --------------------------------------------------------------------------
  socials: [
    {
      name: "GitHub",
      label: "github.com/btvdev03",
      url: "https://github.com/btvdev03",
      icon: "github",
      description: "Mã nguồn các dự án cá nhân & công cụ mã nguồn mở"
    },
    {
      name: "Email",
      label: "btv.dev03@gmail.com",
      url: "mailto:btv.dev03@gmail.com",
      icon: "mail",
      description: "Hòm thư trực tiếp trao đổi học thuật & công việc"
    },
    {
      name: "LinkedIn",
      label: "linkedin.com/in/btvdev03",
      url: "https://www.linkedin.com/in/btvdev03",
      icon: "linkedin",
      description: "Mạng lưới nghề nghiệp và kết nối chuyên môn"
    },
    {
      name: "Facebook",
      label: "facebook.com/btvdev03",
      url: "https://www.facebook.com/btvdev03",
      icon: "facebook",
      description: "Trang cá nhân & chia sẻ đời sống hàng ngày"
    },
    {
      name: "Google Scholar / ResearchGate",
      label: "Google Scholar Profile",
      url: "https://scholar.google.com/",
      icon: "scholar",
      description: "Hồ sơ công bố khoa học & trích dẫn nghiên cứu"
    }
  ]
};

// Đính kèm dữ liệu vào đối tượng window để các script khác truy cập trực tiếp
if (typeof window !== 'undefined') {
  window.PROFILE_DATA = PROFILE_DATA;
}

// Hỗ trợ xuất dữ liệu dạng module cho môi trường Node/ESM khi cần
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROFILE_DATA;
}
