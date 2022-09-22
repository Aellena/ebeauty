import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category-container'>
      <div className='background-image' style={{ // style object
        backgroundImage: `url(${imageUrl})` // object destructuring - use string variable inside another string
      }} />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )

}


export default CategoryItem