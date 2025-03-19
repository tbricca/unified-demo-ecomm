import YSplitHero from "@/src/components/demo/ySplitHero";

export default function DemoPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Demo Page</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Default (Right Image)</h2>
          <YSplitHero
            title="NOT YOUR MOTHERS DENIM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum. Mauris scelerisque, ex ac fringilla auctor, nulla erat tempus enim, vel tincidunt arcu turpis vel enim."
            buttonText="Learn More"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/539b4f8a1dc54a9c6c0e64c7ab487c9ef0bdc85f02e5c8f4eb576a3124d4479a?placeholderIfAbsent=true"
            imageAlt="Sustainable fashion"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Left Image Variant</h2>
          <YSplitHero
            imagePosition="left"
            title="SUSTAINABLE FASHION"
            description="Experience our commitment to sustainable fashion with our latest collection. Each piece is crafted with care for both style and the environment."
            buttonText="Shop Now"
            imageSrc="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2940&auto=format&fit=crop"
            imageAlt="Sustainable fashion showcase"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">No Button Variant</h2>
          <YSplitHero
            title="PREMIUM DENIM"
            description="Discover our premium denim collection, where style meets comfort. Each piece is carefully crafted to ensure the perfect fit."
            showButton={false}
            imageSrc="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2940&auto=format&fit=crop"
            imageAlt="Premium denim collection"
          />
        </section>
      </div>
    </div>
  );
}
