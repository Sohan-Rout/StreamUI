'use client';
import React, { useState, useEffect } from 'react';
import ComponentShowcaseLayout from '@/app/showcase/showcaseLayout';
import showcaseComponents from '@/app/showcase/showcase-config';

export default function ShowcaseVariantPage({ params }) {
  const { slug } = React.use(params);
  const component = showcaseComponents.find(comp => comp.slug === slug);

  const [Preview, setPreview] = useState(null);
  const [code, setCode] = useState('');
  const [implementation, setImplementation] = useState('');
  const [props, setProps] = useState([]);

useEffect(() => {
  if (!slug) return;

  import(`@/app/showcase/components/code/${slug}.js`)
    .then((mod) => {
      setCode(mod.code || "");
      setImplementation(mod.implementation || "");
      setProps(mod.props || []);
    });

  import(`@/app/showcase/components/previews/${slug}.jsx`)
    .then((mod) => {
      setPreview(() => mod.default);
    });
}, [slug]);

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
      category={component.category}
      title={component.title}
      implementation={implementation}
      description={component.description}
      preview={Preview ? <Preview /> : <p>Loading preview...</p>}
      code={code}
      props={props}
    />
  );
}