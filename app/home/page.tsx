import Hero from "@/components/sections/home/Hero";
import ExploreCategories from "@/components/sections/home/ExploreCategories";
import RoomSection from "@/components/sections/home/RoomSection";
import ManufacturingExcellence from "@/components/sections/home/ManufacturingExcellence";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* EXPLORE BY CATEGORIES */}
      <ExploreCategories />

      {/* LIVING ROOM */}
      <RoomSection
        title="Living Room"
        image="/images/rooms/living.jpg"
        description="As a leading modular furniture manufacturer, we present an exclusive range of living room furniture that harmonizes modern design with masterful craftsmanship. Our collection includes sofas, coffee tables, side tables, consoles, benches, and lounge chairs—each meticulously designed to elevate both aesthetics and functionality. Blending comfort with timeless style, our modular pieces adapt effortlessly to diverse interiors, transforming your living room into a refined and inviting space for relaxation and connection."

      />

      {/* BEDROOM */}
      <RoomSection
        title="Bedroom"
        image="/images/rooms/bedroom.jpg"
        description="As a trusted furniture manufacturer, we offer a thoughtfully curated range of bedroom furniture designed to enhance comfort, organization, and visual harmony. Our collection features beds, wardrobes, bedside tables, study units, and storage solutions—crafted with precision to balance aesthetic appeal and everyday functionality. Whether you prefer a minimalist sanctuary or a warm contemporary retreat, our designs ensure timeless elegance and restful living."

        reverse
      />

      {/* DINING ROOM */}
      <RoomSection
        title="Dining Room"
        image="/images/rooms/dining.jpg"
        description="Discover a refined collection of dining room furniture that unites modern aesthetics with superior craftsmanship. Our range includes dining tables, chairs, benches, and storage solutions—each meticulously crafted to enhance your dining experience. Using premium materials and elegant finishes, we create inviting dining spaces ideal for family meals, festive celebrations, and everyday gatherings."

      />

      {/* OUTDOOR */}
      <RoomSection
        title="Outdoor"
        image="/images/rooms/outdoor.jpg"
        description="We offer a premium range of outdoor furniture designed to elevate both functionality and visual appeal of exterior spaces. Ideal for dining, lounging, or social gatherings, our outdoor collection blends comfort, durability, and contemporary design. Crafted to withstand outdoor conditions while maintaining refined aesthetics, our pieces allow you to enjoy open-air living with lasting comfort and sophistication."

        reverse
      />
   
      {/* NEW INTERNATIONAL SECTION */}
      <ManufacturingExcellence />
    </>
  );
}