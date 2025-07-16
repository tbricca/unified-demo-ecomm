"use client";

import React from "react";
import MaverikCard from "@/src/Maverik/card";

export default function MaverikPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Maverik Card Preview</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-6">Default Card</h2>
          <div className="flex justify-center">
            <MaverikCard
              image="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/69173b000a0e6df54e5c3924143546bab3c8d9138c39d57cf880a8303e02d46d?placeholderIfAbsent=true"
              title="Checker Fleece"
              price="$92"
              color="Soft Blue"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Product Variations</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <MaverikCard
              image="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/463bfd6201a48079b1e6dd7a08114013946f6e7c62a074a098f3d4045808229d?placeholderIfAbsent=true"
              title="Fog Linen Jacket"
              price="$134"
              color="Natural"
            />
            <MaverikCard
              image="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/feec62438114a53b1e44e5c519315710103b4ca88f9920dac17425d4fcc71d75?placeholderIfAbsent=true"
              title="Angular Sunglasses"
              price="$31"
              color="Rose"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=400&auto=format&fit=crop"
              title="Classic Denim Jacket"
              price="$89"
              color="Indigo Blue"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Different Price Ranges</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <MaverikCard
              image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400&auto=format&fit=crop"
              title="Basic Tee"
              price="$19"
              color="White"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop"
              title="Premium Hoodie"
              price="$125"
              color="Charcoal"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop"
              title="Luxury Coat"
              price="$299"
              color="Midnight Black"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">
            Without Color (Default)
          </h2>
          <div className="flex justify-center">
            <MaverikCard
              image="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=400&auto=format&fit=crop"
              title="Classic Sneakers"
              price="$75"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Long Product Names</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <MaverikCard
              image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop"
              title="Ultra-Soft Merino Wool Sweater"
              price="$180"
              color="Heather Gray"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=400&auto=format&fit=crop"
              title="Vintage Leather Motorcycle Jacket"
              price="$450"
              color="Distressed Brown"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Grid Layout Example</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <MaverikCard
              image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop"
              title="Cotton Polo"
              price="$45"
              color="Navy Blue"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=400&auto=format&fit=crop"
              title="Slim Fit Jeans"
              price="$68"
              color="Dark Wash"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=400&auto=format&fit=crop"
              title="Canvas Sneakers"
              price="$55"
              color="Off-White"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400&auto=format&fit=crop"
              title="Wool Beanie"
              price="$25"
              color="Forest Green"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400&auto=format&fit=crop"
              title="Basic Tank Top"
              price="$15"
              color="Cream"
            />
            <MaverikCard
              image="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop"
              title="Summer Dress"
              price="$85"
              color="Floral Print"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
