'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/header/Header'), {
  ssr: false,
});

const ExpertiseSection = dynamic(
  () => import('@/components/expertise/ExpertiseSection'),
  { ssr: false }
);

const Missions = dynamic(() => import('@/components/mission/Missions'), {
  ssr: false,
});

const Works = dynamic(() => import('@/components/works/Works'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ExpertiseSection />
        <Missions />
        <Works />
      </main>
    </div>
  );
}
