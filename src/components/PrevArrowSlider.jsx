import React from 'react';

const PrevArrowSlider = ({onClick}) => {
	return (
		<div onClick={onClick} style={{cursor: 'pointer', fontSize: 40}}>
			{"<"}
		</div>
	);
};

export default PrevArrowSlider;