import { images } from "./images";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
};

export type Product = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  includes: string[];
  image: string;
  featured?: boolean;
};

export const company = {
  name: "KPW Build",
  tagline: "Eco-friendly landscaping & 3D garden design",
  email: "info@kpwbuild.co.uk",
  phone: "01698 598298",
  mobile: "07535 455640",
  area: "North Lanarkshire & Scotland",
  experience: "20+ years",
  guarantee: "15-year guarantee",
};

export const services: Service[] = [
  {
    slug: "fencing",
    title: "Fencing",
    tagline: "Secure, stylish boundaries for every garden",
    description:
      "From classic timber panels to modern composite and metal fencing, we install and repair boundaries that look great and stand up to Scottish weather.",
    features: [
      "New fence installation & replacement",
      "Gate design and fitting",
      "Repairs and storm damage restoration",
      "Privacy, decorative & security options",
    ],
    image: images.services.fencing,
    icon: "fence",
  },
  {
    slug: "patios",
    title: "Patios",
    tagline: "Outdoor living spaces built to last",
    description:
      "Create the perfect entertaining area with expertly laid patios in natural stone, porcelain, or block paving — level, drained, and finished to a high standard.",
    features: [
      "Natural stone & porcelain patios",
      "Raised seating areas & steps",
      "Drainage and sub-base preparation",
      "Integrated lighting-ready layouts",
    ],
    image: images.services.patios,
    icon: "patio",
  },
  {
    slug: "garden-rooms",
    title: "Bespoke Garden Rooms",
    tagline: "Your extra room, outdoors",
    description:
      "Home offices, gyms, studios, and entertainment spaces — fully bespoke garden rooms designed around how you live, with quality materials throughout.",
    features: [
      "Full design-to-build service",
      "Insulated, year-round structures",
      "Electrical & lighting packages",
      "Planning support where required",
    ],
    image: images.services["garden-rooms"],
    icon: "room",
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    tagline: "Complete garden transformations",
    description:
      "From small neighbourhood gardens to sprawling lawns and commercial spaces, we deliver full garden overhauls with planting, turf, and hard landscaping.",
    features: [
      "Garden clearance & levelling",
      "Planting schemes & lawn care",
      "Retaining walls & water features",
      "Artificial grass & living walls",
    ],
    image: images.services.landscaping,
    icon: "landscape",
  },
  {
    slug: "driveways",
    title: "Driveway & Paving",
    tagline: "Kerbside appeal that lasts",
    description:
      "Monoblock driveways, block paving, and entrance features that boost your property's value while handling heavy daily use.",
    features: [
      "Monoblock & block paving driveways",
      "Dropped kerbs & access solutions",
      "Soakaways & drainage systems",
      "Pathways, steps & edging",
    ],
    image: images.services.driveways,
    icon: "driveway",
  },
  {
    slug: "garden-design",
    title: "Garden Design & 3D Planning",
    tagline: "See your garden before we build it",
    description:
      "Our design process combines site analysis, hand-rendered perspectives, mood boards, and CAD master plans so you can approve every detail with confidence.",
    features: [
      "Site survey, levels & photography",
      "Sketch plans & mood boards",
      "CAD technical drawings",
      "3D visualisations & virtual design",
    ],
    image: images.services["garden-design"],
    icon: "design",
  },
];

export const products: Product[] = [
  {
    slug: "garden-room-3d-pack",
    title: "Garden Room 3D Design Pack",
    description:
      "Photorealistic 3D renders and floor plans for your bespoke garden room project.",
    longDescription:
      "Perfect for planning a home office, gym, or studio. Includes exterior elevations, interior layout, and material suggestions you can share with contractors or use for planning applications.",
    price: 49,
    category: "Garden Rooms",
    includes: [
      "3 exterior 3D renders",
      "Floor plan with dimensions",
      "Material & finish palette",
      "2 revision rounds included",
    ],
    image: images.shop["garden-room-3d-pack"],
    featured: true,
  },
  {
    slug: "patio-layout-plan",
    title: "Patio Layout Plan",
    description:
      "Scaled patio design with paving layout, drainage notes, and seating zones.",
    longDescription:
      "A practical patio plan showing paving patterns, levels, fall for drainage, and furniture placement — ready for your landscaper to build from.",
    price: 29,
    category: "Patios",
    includes: [
      "Scaled layout drawing",
      "Paving pattern options",
      "Drainage & fall guidance",
      "1 revision round included",
    ],
    image: images.shop["patio-layout-plan"],
    featured: true,
  },
  {
    slug: "full-garden-master-plan",
    title: "Full Garden Master Plan",
    description:
      "Complete CAD master plan with planting, hard landscaping, and 3D perspectives.",
    longDescription:
      "Our most comprehensive digital package. Ideal for full garden renovations — includes technical drawings, planting schedule, and 3D visuals to bring your vision to life.",
    price: 149,
    category: "Full Design",
    includes: [
      "CAD master plan",
      "Planting schedule",
      "3D perspective renders",
      "Technical specifications",
      "3 revision rounds included",
    ],
    image: images.shop["full-garden-master-plan"],
    featured: true,
  },
  {
    slug: "driveway-design-package",
    title: "Driveway Design Package",
    description:
      "Monoblock or block paving layout with access, drainage, and edging details.",
    longDescription:
      "Get a professional driveway design showing paving layout, kerb details, soakaway positions, and material quantities — built from your site measurements.",
    price: 39,
    category: "Driveways",
    includes: [
      "Paving layout plan",
      "Edging & kerb details",
      "Drainage layout",
      "Material quantity estimate",
    ],
    image: images.shop["driveway-design-package"],
  },
  {
    slug: "fence-boundary-layout",
    title: "Fence & Boundary Layout",
    description:
      "Boundary survey layout with fence types, gate positions, and heights.",
    longDescription:
      "Plan your new fencing with a clear boundary drawing showing panel types, post positions, gate locations, and height variations for sloped gardens.",
    price: 25,
    category: "Fencing",
    includes: [
      "Boundary layout drawing",
      "Fence type schedule",
      "Gate positions marked",
      "Height & slope notes",
    ],
    image: images.shop["fence-boundary-layout"],
  },
  {
    slug: "outdoor-kitchen-concept",
    title: "Outdoor Kitchen Concept",
    description:
      "3D concept for an outdoor cooking and dining area with utility layout.",
    longDescription:
      "Visualise your dream outdoor kitchen with 3D renders covering worktop layout, appliance positions, shelter options, and connection points for utilities.",
    price: 59,
    category: "Outdoor Living",
    includes: [
      "2 concept 3D renders",
      "Appliance & utility layout",
      "Material suggestions",
      "2 revision rounds included",
    ],
    image: images.shop["outdoor-kitchen-concept"],
  },
  {
    slug: "custom-site-design",
    title: "Custom Site-Specific Design",
    description:
      "Bespoke 3D design tailored to your exact plot, brief, and budget.",
    longDescription:
      "Work directly with our design team on a fully custom package. We visit your site (or work from your photos and measurements) to deliver a design unique to your garden.",
    price: 199,
    category: "Bespoke",
    includes: [
      "Site analysis consultation",
      "Custom 3D visualisations",
      "CAD drawings as required",
      "Unlimited revisions within scope",
      "Build-ready specifications",
    ],
    image: images.shop["custom-site-design"],
    featured: true,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your vision, budget, and timeline — on site or virtually.",
  },
  {
    step: "02",
    title: "Site Analysis",
    description:
      "Measurements, levels, photos, and a sketch plan for your approval.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Mood boards, perspectives, and CAD master plans using industry software.",
  },
  {
    step: "04",
    title: "Build",
    description:
      "Our licensed team brings the design to life with meticulous detail.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
  }).format(price);
}
