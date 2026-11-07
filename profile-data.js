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
    department: "Trung tâm Chuyển đổi số & Khoa CNTT",
    location: "Bình Dương & Tháp Mười, Đồng Tháp, Việt Nam",
    email: "btv.dev03@gmail.com",
    githubUsername: "btvdev03",
    statusBadge: "🟢 Sẵn sàng hợp tác nghiên cứu & chuyển đổi số thực tế",
    bioShort: "Kỹ sư Kỹ thuật Phần mềm & Học viên Cao học Hệ thống Thông tin tại Trường Đại học Thủ Dầu Một (TDMU). Xuất thân từ vùng quê hương sen hồng Tháp Mười (Đồng Tháp), học tập và làm việc tại Bình Dương, đam mê xây dựng những hệ thống phần mềm thực tế, bền bỉ và giải pháp chuyển đổi số hữu ích.",
    bioDetails: [
      "Kết hợp tư duy nghiên cứu học thuật chuẩn mực với năng lực kỹ thuật thực chiến giải quyết trực diện các bài toán vận hành của nhà trường và doanh nghiệp.",
      "Lĩnh vực quan tâm chính: Hệ thống Thông tin (Information Systems), Khai phá dữ liệu khoa học, Semantic Search, Kiến trúc phần mềm và Tự động hóa quy trình Chuyển đổi số."
    ],
    avatarInitials: "VB"
  },

  // --------------------------------------------------------------------------
  // 2. QUÁ TRÌNH HỌC TẬP & CÔNG TÁC THỰC TẾ (TIMELINE: EDUCATION & EXPERIENCE)
  // --------------------------------------------------------------------------
  timeline: [
    // --- 2.1 CÔNG VIỆC THỰC TẾ ĐANG LÀM (PROFESSIONAL EXPERIENCE) ---
    {
      id: "tdmu-dtc-solutions",
      period: "10/2026 - Hiện tại",
      badge: "Ban Chuyên Môn Số",
      type: "work", // "work" (công việc thực chiến) hoặc "academic" (học tập đào tạo)
      title: "Thành viên Ban chuyên môn - Phòng Giải pháp số",
      organization: "Trung tâm Chuyển đổi số - Trường Đại học Thủ Dầu Một (TDMU)",
      location: "Số 06 Trần Văn Ơn, P. Phú Hòa, TP. Thủ Dầu Một, Bình Dương",
      website: "https://dtc.tdmu.edu.vn",
      websiteLabel: "dtc.tdmu.edu.vn",
      description: "Trực tiếp nghiên cứu, phát triển và triển khai các giải pháp công nghệ chuyển đổi số, tự động hóa quy trình nghiệp vụ nội bộ phục vụ công tác điều hành của Nhà trường và hỗ trợ chuyển đổi số cộng đồng.",
      points: [
        "Nghiên cứu, thiết kế kiến trúc và trực tiếp lập trình các ứng dụng phần mềm giải quyết bài toán số hóa quy trình quản lý đại học.",
        "Xây dựng các luồng tự động hóa quy trình nghiệp vụ (Workflow Automation), chuẩn hóa luồng xử lý dữ liệu và tích hợp hệ thống liên thông.",
        "Tham gia hỗ trợ kỹ thuật, chuyển giao giải pháp số và hướng dẫn cán bộ, giảng viên áp dụng công nghệ số vào công việc hàng ngày."
      ],
      tags: ["Chuyển đổi số", "Phòng Giải pháp số", "TDMU DTC", "Tự động hóa", "Kiến trúc Phần mềm"]
    },
    {
      id: "tdmu-dtc-media",
      period: "04/2026 - Hiện tại",
      badge: "Truyền Thông Số",
      type: "work",
      title: "Chuyên viên Truyền thông",
      organization: "Trung tâm Chuyển đổi số - Trường Đại học Thủ Dầu Một (TDMU)",
      location: "Số 06 Trần Văn Ơn, P. Phú Hòa, TP. Thủ Dầu Một, Bình Dương",
      website: "https://dtc.tdmu.edu.vn",
      websiteLabel: "dtc.tdmu.edu.vn",
      description: "Phụ trách nội dung truyền thông số, xây dựng tư liệu hình ảnh, biên soạn tài liệu kỹ thuật và kết nối cộng đồng công nghệ số trong và ngoài trường.",
      points: [
        "Sản xuất nội dung truyền thông số, bài viết chuyên đề công nghệ, biên tập tài liệu hướng dẫn kỹ thuật và cẩm nang số hóa.",
        "Thiết kế ấn phẩm đồ họa số, quản trị hình ảnh thương hiệu và truyền thông các chương trình, hội thảo chuyển đổi số.",
        "Kết nối mạng lưới sinh viên, giảng viên và các đối tác công nghệ, thúc đẩy văn hóa số và chia sẻ tri thức công nghệ trong nhà trường."
      ],
      tags: ["Truyền thông số", "Tài liệu kỹ thuật", "Sáng tạo nội dung", "Kết nối cộng đồng", "TDMU DTC"]
    },
    {
      id: "hoanggiang-solar-it-lead",
      period: "03/2026 - Hiện tại",
      badge: "IT Lead Doanh Nghiệp",
      type: "work",
      title: "Phụ trách Công nghệ Thông tin (IT Lead)",
      organization: "Công ty TNHH TM DV Hoàng Giang Solar",
      location: "Thửa đất 1960, Đ. TC1, KP 6, P. Thới Hòa, TP. Bến Cát, Bình Dương & Chi nhánh TP.HCM",
      website: "https://hoanggiang-solar.com",
      websiteLabel: "hoanggiang-solar.com",
      extraInfo: "Mã số thuế: 3703038002",
      description: "Phụ trách toàn diện công tác quản trị hệ thống hạ tầng CNTT, an toàn thông tin, vận hành phần mềm quản trị doanh nghiệp và số hóa toàn bộ quy trình vận hành chuỗi cung ứng, thi công điện mặt trời.",
      points: [
        "Quản trị hạ tầng mạng máy tính, máy chủ dữ liệu, hệ thống giám sát an ninh và an toàn thông tin tại trụ sở Bến Cát và chi nhánh TP.HCM.",
        "Triển khai các giải pháp phần mềm quản lý kho vật tư thiết bị, quy trình bảo hành tấm pin - inverter và chăm sóc khách hàng doanh nghiệp.",
        "Vận hành và tối ưu hóa website thương mại điện tử hoanggiang-solar.com, ứng dụng công cụ số hỗ trợ tiếp thị và kinh doanh năng lượng sạch."
      ],
      tags: ["IT Lead", "Hoàng Giang Solar", "Quản trị hạ tầng", "Số hóa doanh nghiệp", "Solar Energy"]
    },

    // --- 2.2 HÀNH TRÌNH HỌC TẬP & ĐÀO TẠO (ACADEMIC JOURNEY) ---
    {
      id: "tdmu-msc",
      period: "2026 - 2028 (Dự kiến)",
      badge: "Học Viên Cao Học M.Sc",
      type: "academic",
      title: "Học viên Cao học ngành Hệ thống Thông tin (Information Systems)",
      organization: "Trường Đại học Thủ Dầu Một (TDMU)",
      location: "Số 06 Trần Văn Ơn, P. Phú Hòa, TP. Thủ Dầu Một, Bình Dương",
      website: "https://tdmu.edu.vn",
      websiteLabel: "tdmu.edu.vn",
      description: "Tiếp tục con đường học vấn chuyên sâu với chương trình Thạc sĩ ngành Hệ thống Thông tin. Tập trung nghiên cứu về Semantic Search, Khai phá dữ liệu khoa học, Đồ thị tri thức (Knowledge Graph) và Kiến trúc hệ thống thông tin quy mô lớn.",
      points: [
        "Đang trong quá trình thực hiện nghiên cứu cao học tại TDMU dưới sự hướng dẫn khoa học của quý thầy cô Khoa Công nghệ Thông tin.",
        "Tập trung bài toán trích xuất thực thể, quan hệ ngữ nghĩa trong kho dữ liệu khoa học và mô hình hóa dữ liệu phục vụ chuyển đổi số.",
        "Tích cực tích lũy học liệu, viết báo cáo chuyên đề và chuẩn bị công bố các bài báo khoa học trên các tạp chí và hội nghị chuyên ngành."
      ],
      tags: ["Hệ thống Thông tin", "Information Systems", "M.Sc Candidate", "Semantic Search", "TDMU"]
    },
    {
      id: "tdmu-beng",
      period: "2021 - 2026",
      badge: "Kỹ Sư Tốt Nghiệp Khá",
      type: "academic",
      title: "Kỹ sư Kỹ thuật Phần mềm (Software Engineering)",
      organization: "Trường Đại học Thủ Dầu Một (TDMU)",
      location: "Số 06 Trần Văn Ơn, P. Phú Hòa, TP. Thủ Dầu Một, Bình Dương",
      website: "https://tdmu.edu.vn",
      websiteLabel: "tdmu.edu.vn",
      description: "Tốt nghiệp Kỹ sư Kỹ thuật Phần mềm chính quy (xếp loại Khá). Trong suốt 5 năm đại học, vừa rèn luyện chuyên môn kỹ thuật phần mềm vững vàng, vừa sôi nổi cống hiến cho công tác Đoàn - Hội Sinh viên trường.",
      points: [
        "Từng tham gia Ban Chấp hành, Ban Thư ký Hội Sinh viên Trường Đại học Thủ Dầu Một; cống hiến nhiệt huyết cho phong trào sinh viên và các hoạt động tình nguyện.",
        "Trực tiếp nghiên cứu và lập trình phần mềm quản lý minh chứng phục vụ kiểm định chất lượng đào tạo và hỗ trợ chấm điểm rèn luyện sinh viên.",
        "Trang bị nền tảng chuyên sâu về cấu trúc dữ liệu & giải thuật, kiến trúc phần mềm, phát triển ứng dụng Full-Stack và tư duy hệ thống thực chiến."
      ],
      tags: ["Kỹ sư Phần mềm", "Tốt nghiệp loại Khá", "BCH Hội Sinh viên", "Phần mềm minh chứng", "TDMU"]
    },
    {
      id: "nonglam-bd",
      period: "Lớp 10 - Lớp 12",
      badge: "Song Bằng THPT & Nghề",
      type: "academic",
      title: "Học song song THPT & Trung cấp nghề Tin học Ứng dụng",
      organization: "Trường Trung cấp Nông Lâm nghiệp Bình Dương",
      location: "Số 8, Đường ĐX061, KP 8, P. Định Hòa, TP. Thủ Dầu Một, Bình Dương",
      website: "http://nonglambd.edu.vn/",
      websiteLabel: "nonglambd.edu.vn",
      description: "Chặng đường bản lề với mô hình kép: vừa hoàn thành chương trình văn hóa Trung học Phổ thông vừa học chuyên sâu nghề Tin học Ứng dụng. Nơi rèn luyện đức tính tự lập, cần mẫn và bắt đầu nuôi dưỡng ước mơ trở thành kỹ sư công nghệ.",
      points: [
        "Học chuyên sâu nghề Tin học Ứng dụng: kỹ thuật phần cứng, mạng căn bản, tin học văn phòng nâng cao và các thuật toán lập trình cơ bản.",
        "Rèn luyện kỹ năng thực hành nghề nghiệp thực chiến trong phòng máy tính, đạt chuẩn kỹ năng nghề cấp quốc gia.",
        "Hình thành tính kỷ luật, tự giác học tập và quyết tâm thi đỗ đại học ngành Kỹ thuật Phần mềm."
      ],
      tags: ["Tin học Ứng dụng", "Trung cấp Nghề", "THPT", "Nông Lâm nghiệp Bình Dương"]
    },
    {
      id: "thcs-hoaloi",
      period: "Lớp 6 - Lớp 9",
      badge: "Bậc Trung Học Cơ Sở",
      type: "academic",
      title: "Học sinh Trường THCS Hoà Lợi (nay là THCS Lý Tự Trọng)",
      organization: "Trường THCS Lý Tự Trọng (Tiền thân là THCS Hoà Lợi)",
      location: "Đường DI3, Khu phố 1, P. Thới Hòa, TP. Bến Cát, Bình Dương (Địa chỉ cũ: An Hoà, Hoà Lợi, Bến Cát)",
      website: "https://thcslytutrong.thoihoa.edu.vn",
      websiteLabel: "thcslytutrong.thoihoa.edu.vn",
      description: "Bốn năm đèn sách tuổi niên thiếu gắn với mái trường Hoà Lợi (nay là Trường THCS Lý Tự Trọng) tại Bến Cát. Chăm ngoan, hiếu học, bắt đầu làm quen và say mê chiếc máy tính qua những tiết học Tin học đầu tiên.",
      points: [
        "Chăm chỉ học tập, đạt học lực khá giỏi các năm học cấp 2 dưới sự dìu dắt tận tâm của quý thầy cô.",
        "Đặc biệt yêu thích môn Tin học khi lần đầu tiếp cận với ngôn ngữ lập trình Pascal và tư duy thuật toán cơ bản.",
        "Tích cực tham gia các phong trào thi đua học tốt và hoạt động Đội Thiếu niên Tiền phong Hồ Chí Minh."
      ],
      tags: ["THCS Hoà Lợi", "THCS Lý Tự Trọng", "Bến Cát", "Bình Dương", "Tuổi học trò"]
    },
    {
      id: "th-hoaloi",
      period: "Lớp 2 - Lớp 5",
      badge: "Bậc Tiểu Học (Lớp 2 - 5)",
      type: "academic",
      title: "Học sinh Trường Tiểu học Hoà Lợi",
      organization: "Trường Tiểu học Hoà Lợi",
      location: "Khu phố An Hòa, P. Hòa Lợi, TP. Bến Cát, Bình Dương",
      website: "https://thhoaloi.bencat.edu.vn/",
      websiteLabel: "thhoaloi.bencat.edu.vn",
      description: "Theo gia đình về định cư tại vùng đất Bình Dương và theo học các năm tiểu học tại Hòa Lợi, Bến Cát. Kỷ niệm tuổi thơ êm đềm với bạn bè thầy cô miền đất Đông Nam Bộ kiên cường.",
      points: [
        "Hoàn thành tốt chương trình tiểu học các lớp 2, 3, 4, 5 với tinh thần hiếu học và sự cần cù, chăm chỉ.",
        "Được thầy cô thương mến bởi tính nết ngoan ngoãn, lễ phép, chất phác và luôn hòa đồng giúp đỡ bạn bè.",
        "Tích cực tham gia phong trào Vở sạch chữ đẹp và các hoạt động Sao Nhi đồng rèn luyện chăm ngoan."
      ],
      tags: ["Tiểu học Hoà Lợi", "Hòa Lợi", "Bến Cát", "Bình Dương", "Kỷ niệm tuổi thơ"]
    },
    {
      id: "th-langbien",
      period: "Lớp 1",
      badge: "Nơi Khởi Đầu (Lớp 1)",
      type: "academic",
      title: "Học sinh Trường Tiểu học Láng Biển (nay là TH & THCS Láng Biển)",
      organization: "Trường TH & THCS Láng Biển",
      location: "Ấp 3, xã Láng Biển, huyện Tháp Mười, tỉnh Đồng Tháp",
      website: null,
      websiteLabel: null,
      description: "Gắn liền với quê hương Tháp Mười sen hồng, miền Tây Nam Bộ mộc mạc và nghĩa tình. Nơi cắp sách học những nét chữ đầu đời bên những đầm sen bát ngát và con nước phù sa đỏ nặng tình quê.",
      points: [
        "Bước chân đầu tiên đến trường học chữ tại điểm trường quê hương xứ sen Láng Biển - Tháp Mười.",
        "Ký ức tuổi thơ sâu đậm với ruộng đồng bát ngát, dòng kênh phù sa mát ngọt và tình cảm gia đình, bà con xóm giềng ấm áp.",
        "Cội nguồn nuôi dưỡng tâm hồn chất phác, thật thà, đức tính khiêm tốn và ý chí bền bỉ của người kỹ sư hôm nay."
      ],
      tags: ["Tiểu học Láng Biển", "Tháp Mười", "Đồng Tháp", "Quê hương Miền Tây", "Sen hồng"]
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
      categoryGroup: "cli",
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
      categoryGroup: "cli",
      category: "Browser Extension",
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
      categoryGroup: "research",
      category: "Research Pipeline",
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
      categoryGroup: "web",
      category: "Web & Productivity",
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
      categoryGroup: "web",
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
    statusNotice: "Hiện đang trong quá trình thực hiện nghiên cứu Cao học ngành Hệ thống Thông tin tại Trường Đại học Thủ Dầu Một (TDMU) với các hướng trọng tâm: Semantic Search, Khai phá dữ liệu khoa học, Đồ thị tri thức (Knowledge Graph) và Chuyển đổi số. Toàn bộ các công trình, bài báo và ấn phẩm khoa học sẽ được tự động cập nhật ngay khi có công bố mới.",
    overview: "Các định hướng nghiên cứu chuyên sâu về Hệ thống Thông tin, Khám phá tri thức (Knowledge Discovery), Semantic Search và các công trình đang thực hiện tại Trường Đại học Thủ Dầu Một (TDMU).",
    papers: [
      {
        id: "paper-semantic-retrieval",
        title: "A Semantic Knowledge Discovery and Retrieval Architecture for Scientific Literature in Information Systems",
        titleVi: "Kiến trúc Khám phá Tri thức & Truy xuất Thông tin Ngữ nghĩa cho Tài liệu Khoa học trong Hệ thống Thông tin",
        authors: "Võ Tấn Bản, Giảng viên Hướng dẫn & Nhóm Nghiên cứu TDMU",
        venue: "Information Systems & Intelligent Computing Research Series, TDMU",
        year: 2026,
        status: "Đang Nghiên Cứu Cao Học (TDMU)",
        badge: "Đang Thực Hiện (M.Sc Thesis)",
        metricBadge: "Semantic Search",
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
        bibtex: `@article{vo2026semantic,
  title   = {A Semantic Knowledge Discovery and Retrieval Architecture for Scientific Literature in Information Systems},
  author  = {Vo, Tan Ban},
  journal = {Information Systems & Intelligent Computing Series, Thu Dau Mot University (TDMU)},
  year    = {2026},
  keywords= {Information Systems, Knowledge Graphs, Semantic Search, Information Retrieval}
}`
      },
      {
        id: "paper-modular-dx-sme",
        title: "Architectural Framework for Low-Cost Modular Digital Transformation in Industrial Manufacturing SMEs",
        titleVi: "Khung Kiến trúc Module hóa Chi phí Thấp cho Chuyển đổi số Doanh nghiệp Sản xuất Vừa và Nhỏ (SMEs)",
        authors: "Võ Tấn Bản",
        venue: "Applied Software Engineering & Enterprise Architecture Journal",
        year: 2026,
        status: "Bản Thảo / Chuẩn Bị Công Bố",
        badge: "Thực Nghiệm Thực Tiễn",
        metricBadge: "Modular DX",
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
        bibtex: `@article{vo2026sme,
  title   = {Architectural Framework for Low-Cost Modular Digital Transformation in Industrial Manufacturing SMEs},
  author  = {Vo, Tan Ban},
  journal = {Applied Software Engineering & Enterprise Systems},
  year    = {2026},
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
      date: "10/2026",
      readTime: "7 phút đọc",
      summary: "Chia sẻ về hành trình tiếp nối từ bậc đại học kỹ sư (2021 - 2026) sang nghiên cứu cao học tại TDMU: làm thế nào để dung hòa giữa tư duy học thuật chuẩn mực và yêu cầu thực tế khắt khe.",
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
