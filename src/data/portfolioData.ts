import {
  PersonalInfo,
  DigitalTransformationCase,
  ResearchPaper,
  EngineeringProject,
  SkillGroup,
  TimelineEntry,
  NavItem,
} from '../types/portfolio'

export const personalInfo: PersonalInfo = {
  name: 'Võ Tấn Bản',
  title: 'Software Engineer & Information Systems Researcher',
  headline: 'Bridging Rigorous Research with High-Impact Practical Engineering',
  email: 'btv.dev03@gmail.com',
  location: 'Bình Dương, Việt Nam',
  github: 'https://github.com/btvdev03',
  githubUsername: 'btvdev03',
  statusBadge: {
    active: true,
    label: 'Open for Research & Digital Transformation Collab',
  },
  bioShort:
    'Kỹ sư Kỹ thuật Phần mềm (B.Eng) & Học viên Cao học Hệ thống Thông tin tại Đại học Thủ Dầu Một (TDMU). Chuyên sâu kiến trúc giải pháp số hóa doanh nghiệp, khai phá dữ liệu khoa học và xây dựng developer tools hiệu năng cao.',
  bioDetailed: [
    'Kết hợp tư duy nghiên cứu học thuật chuẩn mực (Academic Rigor) với năng lực tạo ra sản phẩm thực chiến bền bỉ (Practical Engineering).',
    'Tập trung vào Hệ thống Thông tin thông minh, tự động hóa xử lý tri thức và số hóa vận hành nhà xưởng công nghiệp tại Bình Dương.',
  ],
  coreFocusAreas: [
    {
      title: 'Practical Engineering & Systems',
      description:
        'Kiến trúc phần mềm clean & modular, tối ưu hiệu năng và giải quyết trực diện bài toán vận hành.',
      icon: 'Cpu',
      metric: 'High Throughput',
    },
    {
      title: 'Academic Research & Literature Mining',
      description:
        'Nghiên cứu Information Systems, Semantic Search, Knowledge Graphs và khai phá dữ liệu học thuật.',
      icon: 'BookOpen',
      metric: '-40% Query Time',
    },
    {
      title: 'Enterprise Digital Transformation',
      description:
        'Xóa bỏ silo dữ liệu, tự động hóa luồng phê duyệt và xây dựng audit trail bất biến cho doanh nghiệp.',
      icon: 'Layers',
      metric: '-75% Cycle Time',
    },
  ],
  metrics: [
    {
      value: 'B.Eng',
      label: 'Software Engineering',
      sublabel: 'Tốt nghiệp Kỹ sư chính quy',
    },
    {
      value: 'M.Sc Candidate',
      label: 'Information Systems',
      sublabel: 'Đại học Thủ Dầu Một (TDMU)',
    },
    {
      value: '4+',
      label: 'Open-Source Tools',
      sublabel: 'CLI, Extensions, Aggregators',
    },
    {
      value: '100%',
      label: 'Production-Ready',
      sublabel: 'Giải pháp gắn liền thực tiễn',
    },
  ],
}

export const navigationItems: NavItem[] = [
  { id: 'about', label: 'Về tôi', href: '#about', icon: 'User' },
  { id: 'transformation', label: 'Chuyển đổi số', href: '#transformation', icon: 'Workflow' },
  { id: 'research', label: 'Nghiên cứu & Papers', href: '#research', icon: 'GraduationCap' },
  { id: 'projects', label: 'Dự án Kỹ thuật', href: '#projects', icon: 'FolderGit2' },
  { id: 'skills', label: 'Ma trận Năng lực', href: '#skills', icon: 'Terminal' },
  { id: 'timeline', label: 'Lộ trình', href: '#timeline', icon: 'Milestone' },
  { id: 'contact', label: 'Liên hệ', href: '#contact', icon: 'Mail' },
]

export const digitalTransformationCases: DigitalTransformationCase[] = [
  {
    id: 'dx-enterprise-workflow',
    title: 'Hệ thống Quản lý & Tự động hóa Luồng Nghiệp vụ Doanh nghiệp',
    domain: 'Enterprise Operations & Digital Workplace',
    scope: 'Số hóa văn phòng điện tử & luồng phê duyệt liên phòng ban',
    badge: 'Enterprise Architecture',
    summary:
      'Chuyển đổi luồng phê duyệt giấy tờ truyền thống thành quy trình số khép kín với State Machine, chữ ký điện tử và audit trail thời gian thực.',
    challenge:
      'Quy trình ký duyệt phân tán trên giấy tờ & ứng dụng chat gây thất lạc hồ sơ; thời gian xử lý kéo dài 3-5 ngày/yêu cầu và thiếu khả năng truy vết KPI.',
    architectureSolution:
      'Kiến trúc hướng dịch vụ (SOA) kết hợp máy trạng thái hữu hạn (State Machine) quản lý luồng duyệt; Redis cache giảm độ trễ và phân quyền RBAC đa cấp.',
    pipeline: [
      'Đề xuất số hóa (Dynamic Form)',
      'Event-Driven Workflow Engine',
      'Máy trạng thái (Redis + DB)',
      'Audit Trail Bất biến',
      'Phê duyệt & Xuất KPI tức thì',
    ],
    keyArchitectures: [
      'Event-Driven Workflow Engine với State Machine kiểm soát trạng thái',
      'Audit Trail bất biến ghi nhận mọi thao tác ký duyệt và thời gian xử lý',
      'Tối ưu cơ sở dữ liệu quan hệ kết hợp Redis Cache cho throughput cao',
      'Giao diện tối giản chuẩn Accessibility giúp nhân sự thao tác ngay',
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { metric: '-75%', label: 'Chu kỳ luân chuyển hồ sơ' },
      { metric: '100%', label: 'Hồ sơ có log truy vết số' },
      { metric: '0', label: 'Thất lạc tài liệu nội bộ' },
    ],
    featured: true,
  },
  {
    id: 'dx-data-sync-pipeline',
    title: 'Kiến trúc Đồng bộ Dữ liệu Tập trung & Phân tích Vận hành',
    domain: 'Data Integration & Business Intelligence',
    scope: 'Hợp nhất dữ liệu đa chi nhánh & Báo cáo quản trị thời gian thực',
    badge: 'Data Systems',
    summary:
      'Xây dựng pipeline ETL & CDC thu thập dữ liệu tự động từ các phân hệ kho vận, kinh doanh và kế toán về Data Warehouse tập trung.',
    challenge:
      'Dữ liệu tồn tại trong các file bảng tính độc lập; mất 48 giờ tổng hợp báo cáo tuần và thường xuyên lệch tồn kho giữa các chi nhánh.',
    architectureSolution:
      'Triển khai mô hình CDC streaming kết hợp ETL tự động; chuẩn hóa schema (Star Schema) và xây dựng dashboard phân tích chỉ số tức thời.',
    pipeline: [
      'Dữ liệu kho vận & chi nhánh',
      'CDC Streaming Pipeline',
      'Data Warehouse (Star Schema)',
      'Automated Integrity Check',
      'Báo cáo BI < 2 Phút trễ',
    ],
    keyArchitectures: [
      'CDC & Scheduled ETL Pipeline tự động kiểm tra tính toàn vẹn',
      'Data Warehouse Schema tối ưu cho truy vấn phân tích tổng hợp',
      'Hệ thống cảnh báo tự động khi xuất hiện bất thường tồn kho',
      'Mã hóa đường truyền TLS và phân tầng truy cập theo cấp quản lý',
    ],
    techStack: ['Python', 'PostgreSQL', 'FastAPI', 'Pandas', 'Docker'],
    metrics: [
      { metric: '< 2 phút', label: 'Độ trễ cập nhật số liệu' },
      { metric: '99.9%', label: 'Độ chính xác đối soát' },
      { metric: '10x', label: 'Tốc độ ra quyết định kho' },
    ],
    featured: true,
  },
  {
    id: 'dx-iot-production-monitor',
    title: 'Giải pháp Giám sát Sản xuất & Nhật ký Vận hành Số hóa',
    domain: 'Smart Factory & Industrial IoT',
    scope: 'Số hóa ghi nhận ca kíp và chỉ số thiết bị sản xuất tại xưởng',
    badge: 'Smart Operations',
    summary:
      'Thay thế sổ ghi chép cơ học bằng tablet công nghiệp kết nối cơ sở dữ liệu trung tâm, tự động hóa tính toán OEE (Hiệu suất thiết bị tổng thể).',
    challenge:
      'Ghi chép thủ công cuối ca có sai số cao; sự cố dừng máy bị trễ phản ứng hàng giờ khiến sản lượng dây chuyền sụt giảm nghiêm trọng.',
    architectureSolution:
      'Xây dựng PWA chạy offline-first cho môi trường xưởng, đồng bộ tự động qua WebSocket và bảng cảnh báo Andon board tức thời.',
    pipeline: [
      'Thiết bị xưởng & Ca kíp',
      'Offline-First Tablet (IndexedDB)',
      'WebSocket Gateway (< 100ms)',
      'Thuật toán tính OEE tự động',
      'Andon Board & Cảnh báo tức thì',
    ],
    keyArchitectures: [
      'Offline-First PWA với IndexedDB lưu trữ cục bộ khi mất sóng xưởng',
      'WebSocket gateway truyền nhận trạng thái máy với độ trễ < 100ms',
      'Thuật toán tính OEE tự động phân loại nguyên nhân dừng máy',
      'Giao diện phím lớn, độ tương phản cao thao tác găng tay bảo hộ',
    ],
    techStack: ['React', 'TypeScript', 'WebSockets', 'IndexedDB', 'Go/Node.js'],
    metrics: [
      { metric: '+18%', label: 'Tối ưu thời gian chạy máy' },
      { metric: '< 100ms', label: 'Độ trễ cảnh báo sự cố' },
      { metric: '100%', label: 'Loại bỏ báo cáo giấy' },
    ],
    featured: false,
  },
]

export const researchPapers: ResearchPaper[] = [
  {
    id: 'paper-semantic-knowledge-discovery',
    title:
      'A Semantic Knowledge Discovery and Retrieval Architecture for Scientific Literature in Information Systems',
    authors: ['Võ Tấn Bản', 'Advisor & Research Lab at TDMU'],
    venue: 'Information Systems & Intelligent Computing Research Series, TDMU',
    year: 2024,
    status: 'Working Paper',
    metricBadge: '-40% Retrieval Time',
    takeaway:
      'Kiến trúc lai kết hợp dense vector embeddings và quan hệ knowledge graph giúp thu hẹp khoảng cách ngữ nghĩa, tăng độ chính xác tìm kiếm tài liệu khoa học.',
    abstract:
      'In an era of exponential growth in academic publications, traditional keyword search fails to capture interdisciplinary semantic correlations. This study proposes a hybrid retrieval architecture combining dense vector embeddings with knowledge graph relation extraction, reducing exploratory synthesis time by over 40% for researchers.',
    keywords: [
      'Information Systems',
      'Knowledge Graphs',
      'Semantic Search',
      'Information Retrieval',
      'Academic Data Mining',
    ],
    topics: ['Hệ thống Thông tin', 'Khai phá Dữ liệu Khoa học', 'NLP & Vector Embeddings'],
    bibtex: `@article{vo2024semantic,
  title   = {A Semantic Knowledge Discovery and Retrieval Architecture for Scientific Literature in Information Systems},
  author  = {Vo, Tan Ban},
  journal = {Information Systems & Intelligent Computing Series, Thu Dau Mot University (TDMU)},
  year    = {2024},
  keywords= {Information Systems, Knowledge Graphs, Semantic Search, Information Retrieval}
}`,
    pdfUrl: '#',
    codeUrl: 'https://github.com/btvdev03/IdeaClaimer',
  },
  {
    id: 'paper-digital-transformation-sme',
    title:
      'Architectural Framework for Low-Cost Modular Digital Transformation in Industrial Manufacturing SMEs',
    authors: ['Võ Tấn Bản'],
    venue: 'Applied Software Engineering & Enterprise Architecture Journal',
    year: 2024,
    status: 'Preprint',
    metricBadge: '-60% Initial Cost',
    takeaway:
      'Mô hình kiến trúc module hóa hướng sự kiện chi phí thấp cho phép các doanh nghiệp sản xuất SME chuyển đổi số từng bước mà không cần đầu tư ERP nguyên khối đắt đỏ.',
    abstract:
      'SMEs face critical budget constraints when adopting monolithic ERP platforms. This research presents a micro-modular architectural blueprint leveraging lightweight asynchronous message brokers and decoupled headless services, cutting upfront implementation cost by 60% while maintaining 99.9% data consistency.',
    keywords: [
      'Digital Transformation',
      'Enterprise Architecture',
      'Microservices',
      'SME Digitization',
      'Cost-Effective Software Systems',
    ],
    topics: ['Kiến trúc Doanh nghiệp', 'Chuyển đổi số', 'Software Engineering'],
    bibtex: `@inproceedings{vo2024modular,
  title     = {Architectural Framework for Low-Cost Modular Digital Transformation in Industrial Manufacturing SMEs},
  author    = {Vo, Tan Ban},
  booktitle = {Proceedings of Applied Software Engineering & Enterprise Systems},
  year      = {2024},
  pages     = {1--12}
}`,
    pdfUrl: '#',
  },
]

export const engineeringProjects: EngineeringProject[] = [
  {
    id: 'git-roast',
    name: 'git-roast',
    tagline: 'CLI phân tích thói quen commit & tổng kết cá tính dev phong cách Spotify Wrapped',
    badge: 'CLI Tool',
    category: 'Developer Tools',
    metric: '< 500ms Local Scan',
    description:
      'Công cụ dòng lệnh cực nhanh quét sâu Git log cục bộ: tần suất commit đêm muộn, thói quen đặt message và xuất thẻ tổng kết cá tính dev hài hước.',
    keyFeatures: [
      'Quét toàn bộ Git tree cục bộ với tốc độ cao, hoàn toàn offline',
      'Heuristic phân tích commit message và thói quen overtime',
      'Tạo thẻ thống kê ASCII / SVG phong cách Spotify Wrapped',
      'Xuất báo cáo định dạng JSON hoặc Markdown tinh gọn',
    ],
    techStack: ['Node.js', 'TypeScript', 'Commander.js', 'Git Internals'],
    githubUrl: 'https://github.com/btvdev03/git-roast',
    terminalSnippet: 'npx git-roast --repo . --roast-level brutal',
    starredCount: 'Open-Source',
  },
  {
    id: 'InstantTranslate',
    name: 'InstantTranslate',
    tagline: 'Chrome Extension MV3 tra cứu & dịch thuật ngữ chuyên ngành tức thì',
    badge: 'Chrome Extension',
    category: 'Web Extension',
    metric: 'Zero-Latency Overlay',
    description:
      'Tiện ích mở rộng Chrome Manifest V3 hỗ trợ tra cứu thuật ngữ học thuật và kỹ thuật ngay khi bôi đen trên arXiv, IEEE, GitHub mà không làm gián đoạn luồng đọc.',
    keyFeatures: [
      'Chuẩn Manifest V3 với Service Worker nền tối ưu tài nguyên',
      'Shadow DOM overlay độc lập, chống vỡ layout trên mọi trang web',
      'Cơ chế Fallback thông minh giữa các provider dịch thuật',
      'Phím tắt tiện dụng (Alt + Q) kèm phát âm chuẩn thuật ngữ',
    ],
    techStack: ['TypeScript', 'Chrome MV3', 'Shadow DOM', 'Web APIs'],
    githubUrl: 'https://github.com/btvdev03/InstantTranslate',
    terminalSnippet: 'git clone https://github.com/btvdev03/InstantTranslate',
    starredCount: 'Productivity',
  },
  {
    id: 'IdeaClaimer',
    name: 'IdeaClaimer',
    tagline: 'Pipeline tự động thu thập & tổng hợp ý tưởng nghiên cứu từ arXiv & Tech News',
    badge: 'Data Ecosystem',
    category: 'Automation & AI',
    metric: 'Daily Auto-Digest',
    description:
      'Hệ thống tự động theo dõi và tổng hợp các công bố mới nhất từ arXiv kết hợp các chủ đề nổi bật trên Hacker News, lọc nhiễu và gửi tóm tắt hàng ngày.',
    keyFeatures: [
      'Crawler tự động chạy theo lịch trích xuất metadata bài báo',
      'Thuật toán phân cụm chủ đề nhóm các ý tưởng tương đồng',
      'Xuất bản tin tóm tắt Markdown và gửi qua webhook',
      'REST API tích hợp trực tiếp vào quy trình nghiên cứu cá nhân',
    ],
    techStack: ['Python', 'FastAPI', 'arXiv API', 'GitHub Actions'],
    githubUrl: 'https://github.com/btvdev03/IdeaClaimer',
    terminalSnippet: 'python -m ideaclaimer fetch --source arxiv,hackernews --digest',
    starredCount: 'Research Tool',
  },
  {
    id: 'zen-desk-clock',
    name: 'zen-desk-clock',
    tagline: 'Đồng hồ để bàn tối giản phong cách Zen hỗ trợ trạng thái làm việc sâu (Deep Work)',
    badge: 'Web App',
    category: 'Productivity',
    metric: 'OLED Fullscreen',
    description:
      'Ứng dụng đồng hồ để bàn tương tác phong cách Zen tối giản, tích hợp chu kỳ Pomodoro, âm thanh nền tự nhiên offline và chế độ Fullscreen tiết kiệm điện.',
    keyFeatures: [
      'Giao diện Dark Mode tương phản cao, phông số học chính xác',
      'Web Audio API tổng hợp tiếng mưa, sóng biển không tốn dữ liệu',
      'Bộ đếm Pomodoro với âm báo chuông thiền dịu nhẹ',
      'Hỗ trợ chế độ Fullscreen và Screen Wake Lock API chống tắt màn hình',
    ],
    techStack: ['React', 'TypeScript', 'Web Audio API', 'Wake Lock API'],
    githubUrl: 'https://github.com/btvdev03/zen-desk-clock',
    demoUrl: 'https://btvdev03.github.io/zen-desk-clock',
    terminalSnippet: 'npm run dev # Open http://localhost:5173',
    starredCount: 'Zen Craft',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'is-architecture',
    title: 'Hệ thống Thông tin & Kiến trúc Doanh nghiệp',
    icon: 'Network',
    description:
      'Nền tảng học thuật Cao học tại TDMU kết hợp thiết kế hệ thống lớn, chuẩn hóa dữ liệu và tối ưu quy trình.',
    highlightedTechnologies: ['Enterprise Architecture', 'SADT/UML', 'Data Modeling', 'ERP Concepts'],
    skills: [
      { name: 'Kiến trúc Hệ thống Doanh nghiệp', level: 'Advanced', tags: ['Enterprise Architecture'] },
      { name: 'Phân tích & Thiết kế HTTT (SADT, UML)', level: 'Advanced', tags: ['System Analysis'] },
      { name: 'Thiết kế & Tối ưu Cơ sở Dữ liệu', level: 'Advanced', tags: ['PostgreSQL', 'Redis'] },
      { name: 'Quy trình Số hóa & Tự động hóa', level: 'Advanced', tags: ['Workflow Automation'] },
      { name: 'Bảo mật & Phân quyền Đa tầng (RBAC)', level: 'Proficient', tags: ['Security & Access'] },
    ],
  },
  {
    category: 'software-engineering',
    title: 'Kỹ thuật Phần mềm & Full-Stack Development',
    icon: 'Code2',
    description:
      'Kỹ sư chính quy ngành Software Engineering; làm chủ toàn diện vòng đời phát triển từ Clean Code đến Microservices.',
    highlightedTechnologies: ['TypeScript', 'React 19', 'Node.js', 'Python', 'Tailwind CSS'],
    skills: [
      { name: 'TypeScript / JavaScript (ESNext)', level: 'Advanced', tags: ['Type Safety'] },
      { name: 'React 19 & Modern Web Ecosystem', level: 'Advanced', tags: ['Hooks', 'Three.js'] },
      { name: 'Node.js & Python REST APIs', level: 'Advanced', tags: ['Fastify', 'FastAPI'] },
      { name: 'Clean Architecture & Design Patterns', level: 'Advanced', tags: ['SOLID'] },
      { name: 'Browser Extensions & CLI Tooling', level: 'Advanced', tags: ['Chrome MV3'] },
    ],
  },
  {
    category: 'data-ai-research',
    title: 'Dữ liệu, AI & Nghiên cứu Khoa học',
    icon: 'BrainCircuit',
    description:
      'Khai thác dữ liệu, mô hình hóa tri thức và ứng dụng các kỹ thuật AI/NLP hiện đại trong tìm kiếm thông tin.',
    highlightedTechnologies: ['Information Retrieval', 'Embeddings', 'Knowledge Graphs', 'NLP Pipelines'],
    skills: [
      { name: 'Information Retrieval & Semantic Search', level: 'Proficient', tags: ['Dense Retrieval'] },
      { name: 'Data Pipeline & Automated ETL', level: 'Advanced', tags: ['Pandas', 'Scraping'] },
      { name: 'Vector Embeddings & RAG Fundamentals', level: 'Proficient', tags: ['Vector Search'] },
      { name: 'Khai phá Dữ liệu Khoa học (arXiv Mining)', level: 'Advanced', tags: ['Data Mining'] },
      { name: 'Soạn thảo & Trích dẫn Khoa học (LaTeX, BibTeX)', level: 'Advanced', tags: ['Academic Writing'] },
    ],
  },
  {
    category: 'devops-infrastructure',
    title: 'DevOps, Cloud & Công cụ Lập trình',
    icon: 'Boxes',
    description:
      'Đóng gói, triển khai và tự động hóa theo chuẩn CI/CD hiện đại.',
    highlightedTechnologies: ['Docker', 'GitHub Actions', 'Linux/Unix', 'Git Internals'],
    skills: [
      { name: 'Docker & Containerization', level: 'Advanced', tags: ['Multi-stage Builds'] },
      { name: 'CI/CD Pipelines (GitHub Actions)', level: 'Advanced', tags: ['Automated CI/CD'] },
      { name: 'Linux / Unix System Administration', level: 'Advanced', tags: ['Shell', 'SSH'] },
      { name: 'Git Internals & Advanced Version Control', level: 'Advanced', tags: ['CLI', 'Hooks'] },
      { name: 'Static & Edge Hosting (GitHub Pages, Cloudflare)', level: 'Advanced', tags: ['Edge'] },
    ],
  },
]

export const timelineData: TimelineEntry[] = [
  {
    id: 'tdmu-msc',
    period: '2024 - Hiện tại',
    title: 'Học viên Cao học ngành Hệ thống Thông tin (M.Sc Candidate)',
    organization: 'Trường Đại học Thủ Dầu Một (TDMU)',
    location: 'Bình Dương, Việt Nam',
    type: 'academic',
    isCurrent: true,
    highlightBadge: 'M.Sc Candidate',
    summary:
      'Nghiên cứu Kiến trúc Hệ thống Thông tin nâng cao, Knowledge Discovery, Semantic Search và mô hình hóa tri thức học thuật.',
    points: [
      'Nghiên cứu kiến trúc lai dense vector + knowledge graph cho tìm kiếm tài liệu khoa học',
      'Đề xuất framework kiến trúc module hóa chi phí thấp cho chuyển đổi số doanh nghiệp SME',
      'Báo cáo các chuyên đề khoa học và hội thảo chuyên môn khoa CNTT',
    ],
    tags: ['Information Systems', 'Academic Research', 'Semantic Search', 'TDMU'],
  },
  {
    id: 'dx-engineer',
    period: '2023 - Hiện tại',
    title: 'Kỹ sư Giải pháp & Chuyển đổi số (Solutions & Engineering)',
    organization: 'Doanh nghiệp & Dự án Thực tiễn',
    location: 'Bình Dương & TP.HCM',
    type: 'engineering',
    isCurrent: true,
    highlightBadge: 'Production Engineering',
    summary:
      'Khảo sát hiện trạng, tư vấn giải pháp và xây dựng các hệ sinh thái phần mềm số hóa vận hành nhà xưởng và văn phòng điện tử.',
    points: [
      'Xây dựng hệ thống luồng duyệt số hóa cắt giảm 75% thời gian luân chuyển hồ sơ',
      'Thiết kế pipeline đồng bộ dữ liệu liên chi nhánh với độ trễ dưới 2 phút',
      'Phát triển ứng dụng ghi nhận ca kíp offline-first loại bỏ 100% báo cáo giấy tại xưởng',
    ],
    tags: ['Digital Transformation', 'Enterprise Systems', 'State Machine', 'Full-stack'],
  },
  {
    id: 'tdmu-beng',
    period: '2020 - 2024',
    title: 'Kỹ sư Kỹ thuật Phần mềm (Bachelor of Software Engineering)',
    organization: 'Trường Đại học Thủ Dầu Một (TDMU)',
    location: 'Bình Dương, Việt Nam',
    type: 'academic',
    isCurrent: false,
    highlightBadge: 'B.Eng Graduate',
    summary:
      'Tốt nghiệp Kỹ sư Kỹ thuật Phần mềm chính quy. Nắm vững nền tảng khoa học máy tính, cấu trúc dữ liệu, giải thuật và kiến trúc phần mềm.',
    points: [
      'Đồ án tốt nghiệp và các dự án kỹ thuật đạt kết quả xuất sắc',
      'Chủ trì và phát triển các công cụ mã nguồn mở phục vụ cộng đồng developer',
      'Chuyển tiếp thẳng vào chương trình Cao học Hệ thống Thông tin tại TDMU',
    ],
    tags: ['Software Engineering', 'B.Eng', 'Computer Science', 'TDMU'],
  },
]
