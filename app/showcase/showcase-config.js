import NavbarVariant1 from '@/app/showcase/components/navigation/navbar1';

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
];

export default showcaseComponents;