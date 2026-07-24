// databaseSchema/ProjectDetails.js

export const projectDetails = [
  {
    id: 1,
    projectName: "Personal Developer Portfolio",
    category: "web design",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    description: `The Personal Developer Portfolio project was conceptualized and engineered to serve as a comprehensive, highly optimized digital home for showcasing computer science coursework, personal web projects, and technical proficiencies to potential recruiters and collaborators. Built completely from the ground up using modern web standards, this platform prioritizes lightning-fast performance, precise visual hierarchy, and seamless cross-device responsiveness without layout degradation across smartphones, tablets, or ultra-wide desktop displays.

At its architectural core, the application focuses on clean design systems and semantic HTML structure, ensuring maximum accessibility and search engine optimization. The project abandons heavy third-party UI frameworks in favor of custom, lightweight CSS properties and tailored utility classes. This strategic choice keeps the overall asset bundle size extremely small, resulting in near-instant initial page loads and buttery-smooth layout transitions. The styling engine relies heavily on custom CSS variables, enabling instant global theme switches between dark and light modes, while establishing unified design tokens for spacing, typography scale, and elevation shadows.

The layout is divided into distinct modular functional zones: an engaging hero section presenting a concise professional biography, a dynamic technical skills matrix categorized by frontend, backend, and core CS fundamentals, a chronological education timeline, and an interactive project repository showcase. The project showcase features live layout transformations, interactive card hover effects, and contextual metadata overlays that display individual project attributes without cluttering the screen.

In addition to frontend layout techniques, special attention was dedicated to user interaction and form processing. The platform incorporates a fully client-side validated contact system featuring real-time input sanitization, regular expression checks for email formatting, and accessible feedback banners that inform users of submission statuses. Prototyped initially in Figma, every visual element underwent iterative testing across multiple viewports to verify WCAG color contrast compliance and touch-target sizing on mobile devices. Ultimately, this portfolio serves not merely as a simple resume host, but as an active, production-grade demonstration of frontend engineering mastery, performance optimization, and refined UI design principles.`,
    githubLink: "https://github.com/mr-aniket-2004",
    techStack: ["HTML5", "CSS3", "JavaScript", "Figma"],
    keyFeatures: [
      {
        title: "Landing & Bio Module",
        details:
          "Engaging hero section presenting a professional biography and core identity.",
      },
      {
        title: "Skills Competency Matrix",
        details:
          "Structured matrix highlighting core technical proficiencies categorized by domain.",
      },
      {
        title: "Dynamic Project Repository",
        details:
          "Interactive showcase catalog displaying coursework and web applications with metadata.",
      },
      {
        title: "Education Timeline",
        details:
          "Chronological breakdown detailing relevant computer science modules and academic milestones.",
      },
      {
        title: "Validated Contact System",
        details:
          "Interactive contact form equipped with client-side validation logic.",
      },
      {
        title: "Theme & Design Architecture",
        details:
          "Prototyped in Figma; uses CSS custom properties for spacing and dark/light mode switching.",
      },
    ],
  },
  {
    id: 2,
    projectName: "React Student Task Manager",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    description: `The React Student Task Manager is a dedicated single-page web application engineered specifically to help university students manage daily academic commitments, track tight project deadlines, and prioritize study goals efficiently without forcing continuous full-page reloads. Built on top of React's component-based architecture, the application provides a smooth, desktop-class user experience within a modern web browser.

The architecture centers around a unidirectional data flow and immutable state management patterns. The system processes complex CRUD (Create, Read, Update, Delete) operations in memory using custom React hooks, ensuring that UI updates render instantly in response to user actions. Tasks can be created with granular metadata, including subject category tags, explicit due dates, numerical priority rankings, and detailed descriptive markdown notes. To guarantee that student data persists across browser sessions, browser crashes, or unintentional page refreshes, the application seamlessly synchronizes its local state tree with native browser LocalStorage through a dedicated sync layer.

To prevent performance degradation during heavy task rendering, the task listing component implements declarative state filtering and sorting. Students can dynamically slice their workload by completion status, filter by specific academic modules, or sort tasks chronologically based on approaching deadlines. The filter logic uses memoized utility functions to prevent unnecessary component re-renders, keeping interaction latency under 16 milliseconds even when handling hundreds of stored task records.

From a design and usability perspective, the interface utilizes scoped CSS Modules. This prevents global selector collisions and style leakage while preserving a clean, scalable stylesheet hierarchy. Tasks are visually distinguished through color-coded priority badges, subtle visual strikethrough states upon completion, and fluid micro-animations driven by CSS transitions. The application also provides accessible keyboard navigation, allowing power users to create, tag, and archive tasks using key combinations without touching a mouse. Overall, the tool bridges software engineering best practices with functional UI design to deliver an intuitive productivity platform for academic workflows.`,
    githubLink: "https://github.com/mr-aniket-2004",
    techStack: ["React.js", "JavaScript", "CSS Modules", "Local Storage"],
    keyFeatures: [
      {
        title: "Task CRUD Operations",
        details:
          "Full create, update, complete, and delete lifecycle for daily academic tasks.",
      },
      {
        title: "Customizable Field Metadata",
        details:
          "Supports subject tags, due dates, priority levels, and detailed task notes.",
      },
      {
        title: "Multi-Criteria Workload Filtering",
        details:
          "Filter tasks seamlessly by completion status, priority rank, or subject tag.",
      },
      {
        title: "LocalStorage Persistence",
        details:
          "Custom React hooks automatically synchronize state with native LocalStorage to prevent data loss on refresh.",
      },
      {
        title: "Modular Styling & Usability",
        details:
          "CSS Modules prevent style leakage; includes color-coded priority badges and strike-through indicators.",
      },
    ],
  },
  {
    id: 3,
    projectName: "E-Commerce Product Showcase UI",
    category: "web design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: `The E-Commerce Product Showcase UI is a high-performance, fully responsive frontend interface engineered to replicate the dynamic product presentation and purchasing workflows seen on modern commercial retail platforms. The primary objective of this project was to craft a slick, high-converting digital storefront layout that balances heavy media rendering with instantaneous UI feedback and fluid layout adaptation across screen form factors.

The architecture relies heavily on React's component-driven paradigm combined with Tailwind CSS for utility-first styling. The interface is decomposed into independent, reusable sub-components including an interactive media gallery, product attribute selector widgets, dynamic pricing engines, tabbed specification breakdowns, and related product carousels. State management is organized locally using state hooks to track selected product variants, stock availability thresholds, image gallery indices, and item quantity increments.

A key highlight of the platform is the interactive media gallery widget. Instead of serving basic static images, the gallery supports dynamic thumbnail switching, smooth horizontal image sliding, and an integrated modal image lightbox with pinch-to-zoom capabilities for mobile viewports. The interface optimizes asset delivery by utilizing responsive image formats and lazy loading patterns, preventing high-resolution product photography from delaying the initial Cumulative Layout Shift (CLS) or Largest Contentful Paint (LCP) metrics.

The right-hand configuration panel features a real-time order calculation engine. As users adjust quantity values, pick clothing sizes, or toggle color swatch options, the underlying state immediately calculates subtotal prices, tax estimates, and shipping eligibility indicators. Tailwind CSS classes handle states seamlessly, incorporating focus rings for accessibility, custom hover scales, and smooth transitions on active cart buttons. The overall interface gracefully transforms on smaller viewports: multi-column desktop grids collapse into single-column mobile flows, and desktop navigation headers transform into accessible side-drawer overlays. This creates a polished e-commerce experience built according to production-level design standards.`,
    githubLink: "https://github.com/mr-aniket-2004",
    techStack: ["React.js", "Tailwind CSS", "JSX"],
    keyFeatures: [
      {
        title: "Interactive Media Gallery",
        details:
          "Image gallery slider equipped with thumbnail navigation and zoom previews.",
      },
      {
        title: "Real-Time Order Calculation Widget",
        details:
          "Live price adjustment calculation widget based on dynamic quantity, size, and color selections.",
      },
      {
        title: "Component-Driven Architecture",
        details:
          "Modular sub-components including Navbar, ImageGallery, ProductDetails, and RelatedProducts.",
      },
      {
        title: "Utility-First Design System",
        details:
          "Styled with Tailwind CSS utilizing hover scale effects, focus states, and consistent spacing.",
      },
      {
        title: "Mobile-First Responsiveness",
        details:
          "Navigation transforms into collapsible drawers and multi-column layouts stack gracefully on mobile devices.",
      },
    ],
  },
  {
    id: 4,
    projectName: "Calculator & Unit Converter App",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    description: `The Calculator & Unit Converter App is a multifunctional client-side web application designed to handle standard arithmetic computations along with multi-category physical unit conversions within a single unified, modern web interface. Built using pure vanilla JavaScript (ES6+), HTML5, and advanced CSS Grid layouts, this project demonstrates how to build robust, state-driven user tools without relying on heavy external runtime libraries or monolithic JavaScript frameworks.

The engine architecture is split into two specialized core modules: the Mathematical Expression Evaluation Engine and the Dimensional Unit Conversion Engine. Unlike simple calculators that rely on JavaScript's native and dangerous \`eval()\` utility—which introduces severe code injection vulnerabilities and floating-point rounding errors—this application incorporates a custom abstract mathematical tokenizing algorithm. The expression engine parses user keypresses into structured tokens, handles operator precedence via Dijkstra's Shunting-yard methodology, and accurately computes results while catching math anomalies like division by zero or floating-point precision drifts.

The conversion engine operates in parallel, equipped with lookup transformation matrices for length, mass, temperature, volume, and currency conversions. The interface features real-time event listeners attached to input fields: as the user types a value into any conversion parameter, the application automatically computes and displays matching conversions across all related units instantly without requiring explicit submit buttons.

Visually, the tool adopts a contemporary glassmorphic user interface styled with modern CSS Grid and Flexbox techniques. Dynamic backdrop filters, semi-transparent frosted panels, and subtle ambient shadows give the interface a sleek, native OS feel. Full keyboard support is baked in, mapping physical key codes to keypads with visual press feedback. Furthermore, error handling guardrails are built into the UI: entering invalid key sequences triggers subtle shake animations and non-blocking toast notifications. This ensures the application remains predictable, resilient, and enjoyable during intensive numerical tasks.`,
    githubLink: "https://github.com/mr-aniket-2004",
    techStack: ["JavaScript (ES6)", "HTML5", "CSS Grid"],
    keyFeatures: [
      {
        title: "Dual Engine Architecture",
        details:
          "Seamlessly switch between a standard scientific calculation keypad and a multi-unit converter.",
      },
      {
        title: "Custom Math Parser",
        details:
          "Processes expressions without unsafe eval() utilities, eliminating code injection risks and arithmetic glitches.",
      },
      {
        title: "Real-Time Conversion Listeners",
        details:
          "Instant conversion updates across length, mass, temperature, and currency as user types.",
      },
      {
        title: "Robust Edge-Case Guardrails",
        details:
          "Prevents math anomalies like division by zero with friendly visual UI banners.",
      },
      {
        title: "Modern Glassmorphic Layout",
        details:
          "CSS Grid layout styled with modern glassmorphism aesthetics and memory key options.",
      },
    ],
  },
  {
    id: 5,
    projectName: "Form Validation & UI Automation Suite",
    category: "Testing",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    description: `The Form Validation & UI Automation Suite is a specialized automated quality assurance testing suite designed to verify complex form validation logic, UI component rendering consistency, user event triggers, and state transition workflows across modern web applications. Built with Jest and React Testing Library, this platform showcases automated testing strategies essential for enterprise-level continuous integration and delivery (CI/CD) pipelines.

Rather than relying purely on brittle end-to-end testing or superficial snapshot tests, this suite prioritizes user-centric testing practices. Tests interact with DOM nodes by querying accessible roles, labels, and visible text content (e.g., \`getByRole\`, \`getByLabelText\`), mimicking how real humans navigate and interact with applications. The automation engine runs comprehensive test scenarios across both "happy path" user workflows and challenging edge-case error conditions.

A primary highlight of the suite is its rigorous validation assertion layer for web forms. It automates testing for multi-step registration forms, validating complex regular expressions for email inputs, strict password strength rules, field-matching constraints, and conditional button state disabling. The suite also tests asynchronous behavior: using Jest mock functions and async-await utility blocks, it verifies loading spinner rendering during simulated network latency, handles API failure responses, and verifies the display of error alert banners without real network calls.

The automation setup includes comprehensive code coverage reports generated via Istanbul coverage reporters, tracking statement, branch, function, and line coverage metrics. By ensuring that every edge case—such as rapid button double-clicking, invalid special character pasting, and unexpected input blur events—is covered by automated assertions, the suite reduces manual testing overhead and prevents regression bugs from reaching production environments.`,
    githubLink: "https://github.com/mr-aniket-2004",
    techStack: ["JavaScript", "Jest", "React Testing Library"],
    keyFeatures: [
      {
        title: "User Behavioral Simulation",
        details:
          "Uses React Testing Library queries (getByRole, getByLabelText) to test real human interaction flows.",
      },
      {
        title: "Strict Validation Assertions",
        details:
          "Verifies regex-based email formats, password strength rules, matching constraints, and button disable states.",
      },
      {
        title: "Async Action Testing",
        details:
          "Employs mock functions to validate loading spinners, submission delays, and API feedback banners.",
      },
      {
        title: "Edge Case & Happy Path Coverage",
        details:
          "Comprehensive test scenarios ensuring both valid inputs and invalid edge cases fail gracefully.",
      },
      {
        title: "Code Coverage Reporting",
        details:
          "Configured with coverage tracking tools to maintain maximum assertion coverage across frontend components.",
      },
    ],
  },
];
