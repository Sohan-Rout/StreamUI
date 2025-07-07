import NavbarVariant1 from '@/app/components/showcases/NavbarVariant1';
import ButtonVariant1 from '@/app/components/showcases/ButtonVariant1';
import CardVariant1 from '@/app/components/showcases/CardVariant1';

const showcaseComponents = [
  {
    slug: 'navbar-variant-1',
    title: 'Navbar Variant 1',
    description: 'A clean, glassmorphic navbar for your landing pages.',
    preview: <NavbarVariant1 />,
    code: `<NavbarVariant1 />`,
    props: [
      { name: 'fixed', type: 'boolean', default: 'false', description: 'Fixes navbar on scroll.' },
      { name: 'links', type: 'array', default: '[]', description: 'Array of navigation links.' },
    ],
    category: 'Navbars',
  },
  {
    slug: 'button-variant-1',
    title: 'Button Variant 1',
    description: 'A minimal primary button with smooth hover transitions.',
    preview: <ButtonVariant1 />,
    code: `<ButtonVariant1 />`,
    props: [
      { name: 'variant', type: 'string', default: '"primary"', description: 'Button style variant.' },
      { name: 'onClick', type: 'function', default: 'undefined', description: 'Click event handler.' },
    ],
    category: 'Buttons',
  },
  {
    slug: 'card-variant-1',
    title: 'Card Variant 1',
    description: 'A simple card for content display with a shadow effect.',
    preview: <CardVariant1 />,
    code: `<CardVariant1 />`,
    props: [
      { name: 'title', type: 'string', default: '""', description: 'Title of the card.' },
      { name: 'content', type: 'string', default: '""', description: 'Content inside the card.' },
    ],
    category: 'Cards',
  },
];

export default showcaseComponents;