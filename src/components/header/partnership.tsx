// components/partnership.tsx
'use client';

import Image from 'next/image';

export default function Partnership() {
  return (
    <section className="relative py-12 bg-[#eaf4ff] text-center">
      {/* Decorative blobs (you can place real SVGs or styled images) */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30 blur-xl" />
      <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-full opacity-30 blur-xl" />

      <h2 className="text-blue-900 text-sm uppercase tracking-wider mb-6">As Seen On:</h2>

      <div className="flex flex-wrap justify-center items-center gap-6 px-6">
        <Image src="/benzinga-logo.png" alt="Benzinga" width={100} height={40} />
        <Image src="/chronicle-logo.png" alt="The Chronicle Journal" width={120} height={40} />
        <Image src="/fox-logo.png" alt="FOX" width={70} height={40} />
        <Image src="/globe-logo.png" alt="The Globe and Mail" width={90} height={40} />
        <Image src="/dailynews-logo.png" alt="Starkville Daily News" width={130} height={40} />
        <Image src="/ncn-logo.png" alt="NCN" width={60} height={40} />
        <Image src="/barchart-logo.png" alt="Barchart" width={90} height={40} />
      </div>

      <p className="text-xs mt-8 text-blue-800 italic">
        AND OVER 400 NEWS SITES
      </p>
    </section>
  );
}
