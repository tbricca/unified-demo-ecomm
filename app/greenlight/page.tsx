import GreenlightSplitHero from "@/src/components/Greenlight/GreenlightSplitHero";

export default function GreenlightPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Greenlight Split Hero Preview</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Default (Right Image)</h2>
          <GreenlightSplitHero />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Left Image Variant</h2>
          <GreenlightSplitHero
            imagePosition="left"
            title="SUSTAINABLE FASHION"
            description="Experience our commitment to sustainable fashion with our latest collection. Each piece is crafted with care for both style and the environment."
            buttonText="Shop Now"
            imageSrc="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2940&auto=format&fit=crop"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Large Font Variant</h2>
          <GreenlightSplitHero
            fontSize="large"
            title="PREMIUM DENIM"
            description="Discover our premium denim collection, where style meets comfort. Each piece is carefully crafted to ensure the perfect fit."
            buttonText="Explore Collection"
            imageSrc="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2940&auto=format&fit=crop"
          />
        </section>
      </div>
    </div>
  );
}
