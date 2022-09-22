const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imgSrc: ''
    },
    {
      id: 2,
      title: 'Jackets',
      imgSrc: ''
    },
    {
      id: 3,
      title: 'Sneakers',
      imgSrc: ''
    },
    {
      id: 4,
      title: 'Womens',
      imgSrc: ''
    },
    {
      id: 5,
      title: 'Mens',
      imgSrc: ''
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({title}) => ( // paren is single line return instead of curly
        <div className='category-container'>
          <div className='background-image' />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default App;
