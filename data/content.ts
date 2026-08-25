import { LucideIcon, PenTool, FileSearch, Ruler, Settings, Cpu, Layers, Workflow } from 'lucide-react';

export const COMPANY_NAME = "TechBruce Dynamics";
export const COMPANY_TAGLINE = "Engineering Solutions | Simulation | Die Design";
export const CONTACT_EMAIL = "info@techbrucedynamics.com";
export const CONTACT_PHONE = "+91 XXXXX XXXXX";
export const CONTACT_LOCATION = "Tamil Nadu, India";

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Materials", href: "/materials" },
  { name: "Die Design", href: "/die-design" },
  { name: "Training", href: "/training" },
  { name: "Contact", href: "/contact" },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const SERVICES: Service[] = [
  {
  id: "process-planning",
  title: "Process Planning",
  description: "Develop and optimize manufacturing processes by defining forming sequences, process parameters, and tooling strategies to achieve efficient production and consistent part quality.",
  icon: Workflow,
  features: [
    "Process sequence planning",
    "Tooling & operation planning",
    "Process parameter optimization",
    "Manufacturing feasibility analysis"
  ]
},
  {
    id: "stamping-simulation",
    title: "Sheet Metal Stamping Simulation",
    description: "Analyze forming behavior and manufacturing conditions before tooling begins using advanced simulation techniques.",
    icon: Cpu,
    features: ["Formability analysis", "Defect prediction", "Process parameter optimization", "Springback assessment"]
  },
  {
  id: "formability-springback-analysis",
  title: "Formability & Springback Analysis",
  description: "Evaluate material formability, predict springback behavior, and identify forming limitations to optimize the process and ensure final part geometry meets precise specifications.",
  icon: FileSearch,
  features: [
    "Forming limit & material evaluation",
    "FLD and springback prediction",
    "Risk identification & geometry compensation",
    "Process optimization"
  ]
},
  {
    id: "die-design",
    title: "Precision Die Design",
    description: "Precision sheet metal die design engineered for reliable production, improved tool life, and seamless manufacturing support.",
    icon: PenTool,
    features: ["Manufacturing support", "Production validation", "Die tryout support"]
  },
  {
    id: "strip-layout-development",
    title: "Strip Layout Development",
    description: "Develop efficient strip layouts to support material utilization, productivity, and complex manufacturing requirements.",
    icon: Layers,
    features: ["Material waste reduction", "Optimized nesting", "Carrier design"]
  },
  {
    id: "progressive-die-design",
    title: "Progressive Die Design",
    description: "Engineering of progressive dies for reliable production and optimized tooling performance in high-volume manufacturing.",
    icon: Settings,
    features: ["Reliable production engineering", "Optimized tool life", "High-volume compatibility"]
  },
  
 
];

export const CAPABILITIES = [
  "Sheet Metal Stamping Simulation",
  "Formability & FLD Analysis",
  "Progressive Die Design",
  "Strip Layout Development",
  "Die Design & Validation Support",
  "Process Planning & Feasibility Studies",
  "Defect Prediction (Wrinkling, Tearing, Thinning & Springback)",
  "Material Behavior & Process Optimization"
];

export const MATERIALS = [
  { name: "HSLA", description: "High Strength Low Alloy Steel" },
  { name: "DP", description: "Dual Phase Steel" },
  { name: "DC", description: "Deep Drawing Steel" },
  { name: "CR", description: "Cold Rolled Steel" },
  { name: "SS", description: "Stainless Steel" },
  { name: "Aluminium", description: "Lightweight Alloys" }
];

export const ABOUT_CONTENT = {
  whoWeAre: "We are a dedicated engineering firm specializing in Sheet Metal Stamping Simulation, Die Design, Progressive Dies, and Strip Layout Development for the automotive and manufacturing industries. Our focus is on delivering accurate, production-ready engineering solutions that improve manufacturability, quality, and cost efficiency before tooling begins.",
  approach: "With strong expertise in simulation and die engineering, we analyze forming behavior, optimize process parameters, design Progressive Dies, and develop efficient Strip Layouts to ensure reliable production with minimum trial-and-error.",
  objective: "Our objective is to provide precise, dependable, and scalable engineering solutions that help manufacturers reduce development time, optimize tooling performance, and achieve high-quality production with confidence."
};

// ============================================================================
// TRAINING SECTION CONTENT
// ============================================================================

export const TRAINING_COURSES = [
  {
    id: "catia",
    title: "CATIA – Mechanical Design & Product Development",
    description: "Focus on 3D part design, assembly design, and practical engineering drawing concepts.",
    features: ["3D Part Design", "Assembly Design", "Surface / Product Design", "Engineering Drawing Concepts", "Design Workflow", "Practical Mechanical Components", "Industry-oriented Modelling"],
  },
  {
    id: "solidworks",
    title: "SOLIDWORKS – 3D Mechanical Design",
    description: "Comprehensive part and assembly modeling focusing on mechanical components and design intent.",
    features: ["Part Modelling", "Assembly Modelling", "Engineering Drawings", "Design Intent", "Mechanical Components", "Practical Modelling Exercises", "Design Workflow"],
  },
  {
    id: "autocad",
    title: "AutoCAD – Mechanical Drafting & Engineering Drawing",
    description: "2D drafting and mechanical drawing focusing on standards, dimensions, and annotations.",
    features: ["2D Drafting", "Mechanical Drawings", "Dimensions & Annotations", "Sections", "Drawing Standards", "Practical Drafting Exercises"],
  },
  {
    id: "simulation",
    title: "Engineering Simulation – CAE Fundamentals",
    description: "Fundamentals of engineering simulation, pre-processing, and design validation.",
    features: ["CAE Fundamentals", "Pre-processing Concepts", "Meshing Fundamentals", "Boundary Conditions & Loads", "Result Interpretation", "Design Validation Concepts", "Practical Case Studies"],
  },
];

export const TRAINING_AUDIENCE = [
  "Mechanical Engineering Students",
  "Mechanical Engineering Graduates",
  "Automobile Engineering Students",
  "Manufacturing Engineering Students",
  "Diploma / Polytechnic Mechanical Students",
  "Fresh Graduates entering mechanical roles"
];

export const TRAINING_PROCESS = [
  {
    step: "01",
    title: "Learn",
    description: "Understand engineering fundamentals and software workflows.",
  },
  {
    step: "02",
    title: "Practice",
    description: "Work through guided modelling, drafting, and simulation exercises.",
  },
  {
    step: "03",
    title: "Apply",
    description: "Work on practical engineering-oriented projects and case studies.",
  },
  {
    step: "04",
    title: "Prepare",
    description: "Develop interview, portfolio, and industry-readiness skills.",
  }
];

export const CAREER_PATHS = [
  "Mechanical Design Engineer",
  "CAD Engineer",
  "Design Engineer",
  "Drafting Engineer",
  "Product Design Engineer",
  "CAE / Simulation Trainee",
  "Tool Design Engineer",
  "Manufacturing / Production Engineering Roles"
];
