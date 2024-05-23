import React from 'react';
import elephant from './images/elephant.jpeg';

const Component = () => {
  const data = [
    { id: 1, img: elephant },
    { id: 2, img: elephant },
    { id: 3, img: elephant },
    { id: 4, img: elephant }
  ];

  return (
    <div>
      {data.map((element) => (
        <img key={element.id} src={element.img} alt={`Elephant ${element.id}`} />
      ))}
    </div>
  );
};

export default Component;

