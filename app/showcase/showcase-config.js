import NavbarVariant1 from '@/app/showcase/components/navigation/navbar1';
import DynamicComponentCard from '@/app/showcase/components/elements/card1';

const showcaseComponents = [
  {
    slug: 'navbar-variant-1',
    title: 'Navbar Variant 1',
    description: 'A clean, glassmorphic navbar for your landing pages.',
    preview: NavbarVariant1,
    code: `<NavbarVariant1 />`,
    props: [
      { name: 'fixed', type: 'boolean', default: 'false', description: 'Fixes navbar on scroll.' },
      { name: 'links', type: 'array', default: '[]', description: 'Array of navigation links.' },
    ],
    category: 'Navbars',
  },
  {
    slug: 'dynamic-component-card',
    title: 'Dynamic Component Card',
    description: 'A minimal, dynamic card with placeholders for logo, title, and description.',
    preview: DynamicComponentCard,
    code: `<DynamicComponentCard 
  logo={<YourLogoComponent />} 
  title="Card Title" 
  description="Card description goes here." 
/>`,
    props: [
      { name: 'logo', type: 'ReactNode', default: 'null', description: 'Logo or image displayed in the card.' },
      { name: 'title', type: 'string', default: '""', description: 'Title displayed in the card.' },
      { name: 'description', type: 'string', default: '""', description: 'Description text displayed in the card.' },
    ],
    category: 'Cards',
  },
];

export default showcaseComponents;