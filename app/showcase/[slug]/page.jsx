'use client';
import React from 'react';
import ComponentShowcaseLayout from '@/app/showcase/showcaseLayout';
import showcaseComponents from '@/app/showcase/showcase-config';

export default function ShowcaseVariantPage({ params }) {
  const { slug } = React.use(params);
  const component = showcaseComponents.find(comp => comp.slug === slug);

  if (!component) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-2">Component Not Found</h1>
        <p className="text-neutral-600">The component you are looking for does not exist or is not yet documented.</p>
      </div>
    );
  }

  return (
    <ComponentShowcaseLayout
      category = {component.category}
      title={component.title}
      implementation={component.implementation}
      description={component.description}
      preview={React.createElement(component.preview)}
      code={component.code}
      props={component.props}
    />
  );
}