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
    'Kỹ sư Kỹ thuật Phần mềm & Học viên Cao học Hệ thống Thông tin tại Đại học Thủ Dầu Một (TDMU). Chuyên sâu xây dựng giải pháp công nghệ thực tiễn, số hóa quy trình doanh nghiệp và nghiên cứu ứng dụng AI/Data trong Hệ thống Thông tin.',
  bioDetailed: [
    'Tôi theo đuổi sự giao thoa giữa tư duy nghiên cứu học thuật chuẩn mực (Academic Rigor) và khả năng tạo ra sản phẩm phần mềm tinh gọn, hoạt động bền bỉ trong môi trường sản xuất (Practical Craftsmanship).',
    'Hiện tại, trọng tâm nghiên cứu của tôi tại Trường Đại học Thủ Dầu Một (TDMU) tập trung vào Hệ thống Thông tin thông minh, tự động hóa xử lý tri thức (Knowledge Processing) và khai phá dữ liệu học thuật. Song song đó, tôi trực tiếp tham gia tư vấn và kiến trúc các giải pháp chuyển đổi số cho doanh nghiệp tại thủ phủ công nghiệp Bình Dương.',
  ],
  coreFocusAreas: [
    {
      title: 'Practical Solutions & Engineering',
      description:
        'Thiết kế và xây dựng các hệ thống phần mềm hiệu năng cao, clean architecture, giải quyết trực diện các bài toán thực tế của người dùng và doanh nghiệp.',
      icon: 'Cpu',
    },
    {
      title: 'Academic Research & Papers',
      description:
        'Nghiên cứu khoa học có hệ thống trong lĩnh vực Hệ thống Thông tin (Information Systems), xử lý ngôn ngữ tự nhiên, khai phá dữ liệu và kiến trúc tri thức.',
      icon: 'BookOpen',
    },
    {
      title: 'Digital Transformation Solutions',
      description:
        'Tư vấn quy trình, kiến trúc hệ thống và triển khai số hóa vận hành: xóa bỏ silo dữ liệu, tự động hóa luồng nghiệp vụ và bảo đảm an toàn dữ liệu.',
      icon: 'Layers',
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
      sublabel: 'Trường Đại học Thủ Dầu Một (TDMU)',
    },
    {
      value: '4+',
      label: 'Open-Source Tools',
      sublabel: 'CLI, Extensions, Aggregators',
    },
    {
      value: '100%',
      label: 'Real-world Focus',
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
    scope: 'Kiến trúc giải pháp số hóa văn phòng điện tử & liên phòng ban',
    badge: 'Enterprise Architecture',
    summary:
      'Chuyển đổi luồng phê duyệt giấy tờ truyền thống thành quy trình số khép kín với dynamic form engine, digital signature và real-time audit trail.',
    challenge:
      'Quy trình ký duyệt phân tán trên giấy tờ và ứng dụng chat rời rạc dẫn đến thất lạc hồ sơ, thời gian xử lý trung bình từ 3 - 5 ngày/yêu cầu, thiếu khả năng truy vết lịch sử phê duyệt và thống kê KPI.',
    architectureSolution:
      'Thiết kế kiến trúc hướng dịch vụ (Service-Oriented) với động cơ máy trạng thái hữu hạn (State Machine) cho luồng phê duyệt, tích hợp webhook thông báo đa kênh và phân quyền dữ liệu đa cấp (Role-Based Access Control).',
    keyArchitectures: [
      'Event-Driven Workflow Engine với State Machine kiểm soát trạng thái',
      'Audit Trail bất biến ghi nhận mọi thao tác ký duyệt và thời gian xử lý',
      'Tối ưu hóa cơ sở dữ liệu quan hệ kết hợp Redis Cache cho throughput cao',
      'Giao diện tối giản, chuẩn Accessibility giúp nhân viên làm quen trong 15 phút',
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Docker'],
    metrics: [
      { metric: '-75%', label: 'Thời gian luân chuyển hồ sơ' },
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
      'Xây dựng pipeline thu thập và chuẩn hóa dữ liệu từ các phân hệ kho vận, bán hàng và kế toán về một kho lưu trữ phân tích duy nhất.',
    challenge:
      'Dữ liệu tồn tại trong các file bảng tính độc lập và hệ quản trị cũ không đồng bộ; ban lãnh đạo mất 48 giờ để tổng hợp báo cáo tuần, thường xuyên xuất hiện sai lệch số liệu tồn kho giữa các kho chi nhánh.',
    architectureSolution:
      'Triển khai mô hình ETL tự động theo lịch và streaming CDC (Change Data Capture), chuẩn hóa schema dữ liệu, xây dựng dashboard trực quan với chỉ số phân tích tức thời (Near real-time insights).',
    keyArchitectures: [
      'CDC & Scheduled ETL Pipeline tự động kiểm tra lỗi toàn vẹn dữ liệu',
      'Data Warehouse Schema tối ưu cho truy vấn phân tích tổng hợp (Star Schema)',
      'Automated Alerting khi phát hiện độ trễ hoặc bất thường trong tồn kho',
      'Bảo mật mã hóa đường truyền TLS và phân tầng truy cập theo phân cấp quản lý',
    ],
    techStack: ['Python', 'PostgreSQL', 'Docker', 'FastAPI', 'Pandas', 'Grafana/Metabase'],
    metrics: [
      { metric: '< 2 phút', label: 'Độ trễ cập nhật số liệu' },
      { metric: '99.9%', label: 'Độ chính xác dữ liệu đối soát' },
      { metric: '10x', label: 'Tốc độ ra quyết định điều phối kho' },
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
      'Thay thế sổ ghi chép cơ học bằng thiết bị tablet công nghiệp kết nối trực tiếp cơ sở dữ liệu trung tâm, tự động hóa tính toán OEE (Hiệu suất thiết bị tổng thể).',
    challenge:
      'Dữ liệu dừng máy và sản lượng do công nhân ghi tay cuối ca, tỷ lệ sai sót cao, thời gian phản ứng khi có sự cố máy móc bị trễ hàng giờ khiến năng suất dây chuyền sụt giảm.',
    architectureSolution:
      'Xây dựng PWA (Progressive Web App) chạy offline-first cho môi trường nhà xưởng, tự động đồng bộ khi có kết nối, kết hợp bảng cảnh báo trực quan thời gian thực (Andon board) tại xưởng.',
    keyArchitectures: [
      'Offline-First PWA với IndexedDB lưu trữ cục bộ khi mất sóng WiFi xưởng',
      'Websocket gateway truyền nhận trạng thái máy tức thời với độ trễ < 100ms',
      'Thuật toán tính toán OEE tự động phân loại thời gian chết (Downtime reasons)',
      'Thiết kế UI phím lớn, độ tương phản cao phù hợp thao tác mang găng tay bảo hộ',
    ],
    techStack: ['React', 'TypeScript', 'WebSockets', 'IndexedDB', 'Tailwind CSS', 'Go/Node.js'],
    metrics: [
      { metric: '+18%', label: 'Tối ưu hóa thời gian chạy máy' },
      { metric: 'Tức thì', label: 'Cảnh báo khi máy dừng bất thường' },
      { metric: '100%', label: 'Loại bỏ báo cáo giấy tại xưởng' },
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
    abstract:
      'In an era of exponential growth in academic publications, traditional keyword-based search fails to capture interdisciplinary semantic correlations and domain-specific context. This study proposes a hybrid retrieval architecture combining dense vector embeddings with knowledge graph relation extraction. We demonstrate that contextual semantic mapping significantly boosts literature discovery precision for information system researchers, reducing exploratory synthesis time by over 40%.',
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
    abstract:
      'Small and Medium Enterprises (SMEs) face critical budget and infrastructural constraints when adopting heavyweight monolithic ERP platforms. This research presents a micro-modular architectural blueprint leveraging lightweight asynchronous message brokers and decoupled headless services. Empirical evaluation across industrial pilot sites indicates a 60% reduction in upfront implementation cost while maintaining 99.9% data consistency.',
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
    tagline: 'CLI phân tích thói quen code qua Git commit & bóc phốt dev phong cách Spotify Wrapped',
    badge: 'CLI Tool',
    category: 'Developer Tools',
    description:
      'Công cụ dòng lệnh cực nhanh phân tích sâu lịch sử commit của bất kỳ Git repository nào: thời gian commit (đêm muộn vs giờ hành chính), thói quen đặt message ("fix typo", "update"), tần suất refactor và đưa ra bản nhận xét hài hước sắc sảo kèm card tổng kết chia sẻ.',
    keyFeatures: [
      'Quét toàn bộ Git tree cục bộ hoặc remote với tốc độ cực nhanh, không phụ thuộc internet',
      'Thuật toán heuristic chấm điểm độ "toxic" của commit message và thói quen overtime',
      'Tạo thẻ thống kê ASCII art hoặc SVG phong cách Spotify Wrapped để flex trên mạng xã hội',
      'Tích hợp CLI arguments linh hoạt, hỗ trợ xuất báo cáo JSON / Markdown',
    ],
    techStack: ['Node.js', 'TypeScript', 'Commander.js', 'Chalk', 'Git Internals'],
    githubUrl: 'https://github.com/btvdev03/git-roast',
    terminalSnippet: 'npx git-roast --repo . --roast-level brutal',
    starredCount: 'Open-Source',
  },
  {
    id: 'InstantTranslate',
    name: 'InstantTranslate',
    tagline: 'Chrome Extension MV3 dịch thuật ngữ đa ngữ cảnh tức thì',
    badge: 'Chrome Extension',
    category: 'Web Extension',
    description:
      'Tiện ích mở rộng trình duyệt Chrome xây dựng theo chuẩn Manifest V3, cho phép kỹ sư và nhà nghiên cứu tra cứu và dịch các thuật ngữ chuyên ngành kỹ thuật, bài báo khoa học ngay khi bôi đen văn bản mà không làm gián đoạn luồng đọc.',
    keyFeatures: [
      'Tuân thủ nghiêm ngặt Manifest V3 với Service Worker nền tối ưu pin và RAM',
      'Shadow DOM overlay độc lập, chống vỡ layout trên bất kỳ trang web nào (arXiv, IEEE, GitHub)',
      'Cơ chế Fallback thông minh giữa các provider dịch thuật đảm bảo 99.9% uptime',
      'Bộ phím tắt linh hoạt (Alt + Q hoặc double-click) kèm phát âm chuẩn thuật ngữ tiếng Anh',
    ],
    techStack: ['TypeScript', 'Chrome Extension MV3', 'Tailwind CSS', 'Shadow DOM', 'Web APIs'],
    githubUrl: 'https://github.com/btvdev03/InstantTranslate',
    terminalSnippet: 'git clone https://github.com/btvdev03/InstantTranslate',
    starredCount: 'Productivity',
  },
  {
    id: 'IdeaClaimer',
    name: 'IdeaClaimer',
    tagline: 'Hệ sinh thái tự động thu thập & tổng hợp ý tưởng nghiên cứu / công nghệ từ arXiv & HN',
    badge: 'Data Ecosystem',
    category: 'Automation & AI',
    description:
      'Pipeline tự động hóa hoàn chỉnh theo dõi và tổng hợp các công bố nghiên cứu mới nhất từ arXiv (Computer Science, Information Systems) kết hợp với các chủ đề thảo luận sôi nổi trên Hacker News và GitHub Trending, lọc bỏ nhiễu và tóm tắt tinh gọn.',
    keyFeatures: [
      'Crawler tự động chạy ngầm theo chu kỳ, trích xuất metadata và tóm tắt bài báo khoa học',
      'Thuật toán phân cụm chủ đề (Clustering) nhóm các ý tưởng công nghệ tương đồng',
      'Tự động xuất báo cáo Digest hàng ngày dưới dạng Markdown và gửi thông báo qua Discord/Telegram',
      'Cung cấp REST API để dễ dàng tích hợp vào quy trình nghiên cứu cá nhân',
    ],
    techStack: ['Python', 'FastAPI', 'BeautifulSoup4', 'arXiv API', 'Pydantic', 'GitHub Actions'],
    githubUrl: 'https://github.com/btvdev03/IdeaClaimer',
    terminalSnippet: 'python -m ideaclaimer fetch --source arxiv,hackernews --digest',
    starredCount: 'Research Tool',
  },
  {
    id: 'zen-desk-clock',
    name: 'zen-desk-clock',
    tagline: 'Đồng hồ để bàn tối giản phong cách Zen hỗ trợ Deep Work',
    badge: 'Web App',
    category: 'Productivity',
    description:
      'Ứng dụng đồng hồ để bàn tương tác phong cách tối giản tuyệt đối (Zen aesthetic) dành cho kỹ sư và lập trình viên tập trung làm việc sâu. Tích hợp chu kỳ Pomodoro, âm thanh nền tự nhiên (White Noise/Rain) và chế độ toàn màn hình tiết kiệm điện trên màn hình OLED.',
    keyFeatures: [
      'Thiết kế giao diện Dark Mode tương phản cao, phông chữ số học chính xác, không gây xao nhãng',
      'Tích hợp Web Audio API phát âm thanh mưa, sóng biển offline mà không tốn băng thông',
      'Bộ đếm Pomodoro chu kỳ chuẩn với âm báo chuông thiền Tây Tạng dịu êm',
      'Hỗ trợ chế độ Fullscreen (F11) và ngăn chặn máy tính tự ngủ (Screen Wake Lock API)',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'Wake Lock API'],
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
      'Nền tảng học thuật Cao học tại TDMU kết hợp thực tiễn thiết kế hệ thống lớn, chuẩn hóa dữ liệu và tối ưu quy trình.',
    highlightedTechnologies: ['Enterprise Architecture', 'SADT/UML', 'Data Modeling', 'ERP Concepts'],
    skills: [
      { name: 'Kiến trúc Hệ thống Doanh nghiệp', level: 'Advanced', tags: ['Enterprise Architecture'] },
      { name: 'Phân tích & Thiết kế HTTT (SADT, UML)', level: 'Advanced', tags: ['System Analysis'] },
      { name: 'Thiết kế & Tối ưu Cơ sở Dữ liệu', level: 'Advanced', tags: ['PostgreSQL', 'MySQL'] },
      { name: 'Quy trình Số hóa & Tự động hóa', level: 'Advanced', tags: ['Business Process Automation'] },
      { name: 'Bảo mật & Phân quyền Đa tầng (RBAC)', level: 'Proficient', tags: ['Security & Compliance'] },
    ],
  },
  {
    category: 'software-engineering',
    title: 'Kỹ thuật Phần mềm & Full-Stack Development',
    icon: 'Code2',
    description:
      'Kỹ sư chính quy ngành Software Engineering; làm chủ toàn diện vòng đời phát triển phần mềm từ Clean Code đến Microservices.',
    highlightedTechnologies: ['TypeScript', 'React', 'Node.js', 'Python', 'Tailwind CSS'],
    skills: [
      { name: 'TypeScript / JavaScript (ESNext)', level: 'Advanced', tags: ['Type Safety', 'Async'] },
      { name: 'React 19 & Next.js Ecosystem', level: 'Advanced', tags: ['Hooks', 'State Management'] },
      { name: 'Node.js & Express / Fastify APIs', level: 'Advanced', tags: ['Backend Systems'] },
      { name: 'Python Engineering & Scripting', level: 'Advanced', tags: ['Automation', 'APIs'] },
      { name: 'Clean Architecture & Design Patterns', level: 'Advanced', tags: ['SOLID', 'Maintainability'] },
      { name: 'RESTful API & GraphQL Design', level: 'Proficient', tags: ['API Design', 'Contracts'] },
    ],
  },
  {
    category: 'data-ai-research',
    title: 'Dữ liệu, AI/ML & Nghiên cứu Khoa học',
    icon: 'BrainCircuit',
    description:
      'Khai thác dữ liệu, mô hình hóa tri thức học thuật và ứng dụng các kỹ thuật AI/NLP hiện đại trong tìm kiếm thông tin.',
    highlightedTechnologies: ['Information Retrieval', 'Embeddings', 'Vector Search', 'NLP Pipelines'],
    skills: [
      { name: 'Information Retrieval & Semantic Search', level: 'Proficient', tags: ['Dense Retrieval'] },
      { name: 'Data Pipeline & ETL Engineering', level: 'Advanced', tags: ['Pandas', 'Automated Scraping'] },
      { name: 'Vector Embeddings & RAG Fundamentals', level: 'Proficient', tags: ['LangChain', 'LlamaIndex'] },
      { name: 'Khai phá Dữ liệu Khoa học (arXiv Mining)', level: 'Advanced', tags: ['Literature Analysis'] },
      { name: 'Soạn thảo & Trích dẫn Khoa học (LaTeX, BibTeX)', level: 'Advanced', tags: ['Academic Writing'] },
    ],
  },
  {
    category: 'devops-infrastructure',
    title: 'DevOps, Cloud & Công cụ Lập trình',
    icon: 'Boxes',
    description:
      'Đóng gói, phân phối và triển khai phần mềm tự động hóa theo chuẩn CI/CD hiện đại.',
    highlightedTechnologies: ['Docker', 'GitHub Actions', 'Linux/Unix', 'Git Internals'],
    skills: [
      { name: 'Docker & Containerization', level: 'Advanced', tags: ['Multi-stage Builds'] },
      { name: 'CI/CD Pipelines (GitHub Actions)', level: 'Advanced', tags: ['Automated Deployments'] },
      { name: 'Linux / Unix System Administration', level: 'Advanced', tags: ['Shell Scripting', 'SSH'] },
      { name: 'Git Internals & Advanced Version Control', level: 'Advanced', tags: ['Rebase', 'Hooks'] },
      { name: 'Cloudflare / Vercel / GitHub Pages', level: 'Advanced', tags: ['Edge & Static Hosting'] },
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
    summary:
      'Nghiên cứu chuyên sâu về Kiến trúc Hệ thống Thông tin nâng cao, Khai phá Tri thức (Knowledge Discovery), Information Retrieval và ứng dụng các mô hình học máy vào thực tiễn quản trị dữ liệu.',
    points: [
      'Thực hiện các đề tài nghiên cứu liên quan đến tự động hóa tìm kiếm và liên kết tri thức học thuật',
      'Nghiên cứu ứng dụng các kiến trúc hệ thống module hóa chi phí thấp cho chuyển đổi số doanh nghiệp',
      'Tham gia các buổi báo cáo chuyên đề học thuật và hội thảo khoa học khoa CNTT',
    ],
    tags: ['Information Systems', 'Academic Research', 'Knowledge Retrieval', 'TDMU'],
  },
  {
    id: 'dx-engineer',
    period: '2023 - Hiện tại',
    title: 'Kỹ sư Giải pháp & Chuyển đổi số (Solutions & Engineering)',
    organization: 'Doanh nghiệp & Dự án Thực tiễn',
    location: 'Bình Dương & TP. Hồ Chí Minh',
    type: 'engineering',
    isCurrent: true,
    summary:
      'Trực tiếp khảo sát hiện trạng, tư vấn giải pháp và xây dựng các hệ sinh thái phần mềm số hóa hoạt động sản xuất, quản lý văn phòng và tích hợp chuỗi cung ứng.',
    points: [
      'Thiết kế kiến trúc hệ thống phần mềm nghiệp vụ giúp cắt giảm 75% thời gian phê duyệt giấy tờ',
      'Xây dựng pipeline ETL tổng hợp dữ liệu kho vận và kinh doanh liên chi nhánh theo thời gian thực',
      'Phát triển các công cụ nội bộ tối ưu hóa năng suất cho đội ngũ kỹ thuật và khối vận hành',
    ],
    tags: ['Digital Transformation', 'Enterprise Systems', 'Full-stack', 'System Architecture'],
  },
  {
    id: 'tdmu-beng',
    period: '2020 - 2024',
    title: 'Kỹ sư Kỹ thuật Phần mềm (Bachelor of Software Engineering)',
    organization: 'Trường Đại học Thủ Dầu Một (TDMU)',
    location: 'Bình Dương, Việt Nam',
    type: 'academic',
    isCurrent: false,
    summary:
      'Tốt nghiệp chương trình đào tạo Kỹ sư Kỹ thuật Phần mềm chính quy. Nắm vững nền tảng khoa học máy tính, cấu trúc dữ liệu, giải thuật, công nghệ web hiện đại và quy trình phát triển Agile.',
    points: [
      'Xây dựng các đồ án phần mềm thực tiễn đạt điểm xuất sắc',
      'Chủ trì và đóng góp vào nhiều dự án mã nguồn mở phục vụ cộng đồng lập trình viên',
      'Nền tảng kiến thức vững chắc làm bước đệm chuyển tiếp ngay vào chương trình Cao học Hệ thống Thông tin',
    ],
    tags: ['Software Engineering', 'B.Eng', 'Computer Science', 'TDMU'],
  },
]
