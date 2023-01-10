import CallToAction from './call-to-action';
import Features from './features';
import Hero from './hero';

export default function HomePage() {
  return (
    <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
}
