import { PinnedImages } from '@/json/Images';
import React from 'react'
import GalleryItem from './GalleryItem';

const Gallery = () => {
  return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-1 grid-auto-rows-[10px]">
			{PinnedImages.map((item) => (
				<GalleryItem item={item} key={item.id} />
			))}
		</div>
  );
}

export default Gallery
