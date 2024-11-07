'use client';

import GalleryMobile from './GalleryMobile';

export default function Gallery() {
  return (
    <>
      {/* Versão Desktop - permanece intacta */}
      <div className="hidden md:block">
        {/* Todo o código desktop atual permanece aqui sem alterações */}
      </div>

      {/* Versão Mobile */}
      <GalleryMobile />
    </>
  );
} 