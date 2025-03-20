import React from 'react'

const GalleryItem = ({item}) => {
  return (
		<div
			key={item.id}
			className="flex relative overflow-hidden"
			style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
		>
			<img
				src={item.src}
				alt={`pinned-${item.id}`}
				className="w-full object-cover rounded-lg shadow-lg cursor-pointer"
			/>
		</div>
  );
}

export default GalleryItem
