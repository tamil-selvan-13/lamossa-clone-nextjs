import { Project, Review, Service, Testimonial, PricingPlan, FAQ, BlogPost } from "./types";

export const BRAND_NAME = "lamosa";

export const PROJECTS: Project[] = [
  { id: "1", title: "Fintech Dashboard", category: "Web App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", slug: "fintech-dashboard" },
  { id: "2", title: "E-Commerce Experience", category: "Web Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", slug: "ecommerce-experience" },
  { id: "3", title: "SaaS Marketing Site", category: "Web Design", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", slug: "saas-marketing" },
  { id: "4", title: "Mobile App Landing", category: "No-Code", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800", slug: "mobile-app" },
];

export const REVIEWS: Review[] = [
  { id: "1", author: "Sarah Jenkins", role: "CEO", company: "TechFlow", content: "Lamosa completely transformed our digital presence. Incredible attention to detail.", rating: 5 },
  { id: "2", author: "Michael Chen", role: "Founder", company: "Nexus", content: "The best design partner we've ever worked with. Fast, communicative, and top-tier quality.", rating: 5 },
  { id: "3", author: "Emma Watson", role: "CMO", company: "Elevate", content: "Our conversion rates doubled after the redesign. Highly recommended.", rating: 5 },
];

export const SERVICES: Service[] = [
  { id: "1", title: "Web Design", description: "Bespoke, award-winning websites that convert.", icon: "Palette" },
  { id: "2", title: "No-Code Development", description: "Lightning fast implementation in Webflow and Framer.", icon: "Zap" },
  { id: "3", title: "MVP Build", description: "From idea to launched product in weeks, not months.", icon: "Rocket" },
  { id: "4", title: "Design Partner", description: "An extension of your team for ongoing design needs.", icon: "Users" },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "1",
    name: "Product Design",
    price: "$4,999",
    description: "Perfect for startups needing a complete design overhaul.",
    features: ["Dedicated Designer", "Unlimited Requests", "Pause or Cancel Anytime", "Weekly Updates"],
  },
  {
    id: "2",
    name: "Design Partner",
    price: "$7,999",
    description: "Your fully outsourced, premium design team.",
    features: ["Senior Designer & PM", "Priority Support", "Webflow Development", "Branding Included"],
    isPopular: true,
  },
  {
    id: "3",
    name: "Custom",
    price: "Let's Talk",
    description: "For enterprise companies with bespoke requirements.",
    features: ["Custom Scope", "Dedicated Team", "Priority SLAs", "Strategic Consulting"],
  },
];

export const FAQS: FAQ[] = [
  { id: "1", question: "How does the subscription work?", answer: "You subscribe to a plan, add tasks to your queue, and we deliver them one by one. You can pause or cancel anytime." },
  { id: "2", question: "How fast will I receive designs?", answer: "On average, most requests are completed in just 2 days or less. More complex requests can take longer." },
  { id: "3", question: "Who will I be working with?", answer: "You'll work directly with our senior designers. No junior designers, no hand-offs." },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: "1", title: "The Future of Web Design in 2024", category: "Design", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", author: "Alex Rivera", readTime: "5 min read", date: "Oct 12, 2023" },
  { id: "2", title: "Why Next.js is the Ultimate Framework", category: "Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", author: "Sam Lee", readTime: "8 min read", date: "Oct 05, 2023" },
  { id: "3", title: "Mastering Framer Motion Animations", category: "Tutorial", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800", author: "Jordan Taylor", readTime: "6 min read", date: "Sep 28, 2023" },
];