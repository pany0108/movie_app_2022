import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: '김치',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: '비빔밥',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating: 3.0,
  },
  {
    id: 4,
    name: '돈까스',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/01/12/b9343d314206275c1b6d0d0c4fcc2ce71.jpg',
    rating: 4.0,
  },
  {
    id: 5,
    name: '김밥',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg',
    rating: 2.5,
  },
];

function App() {
  return (
    <div>
      {foodLike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
