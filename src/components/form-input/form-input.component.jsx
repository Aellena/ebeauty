import './form-input.styles.scss'

// another viable option is to pass otherProps as an object from the previous class instead of spread
// udemy 101. Generalizing Form Input Component
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input
        className='form-input'
        {...otherProps}
      />
      { label &&
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      }
    </div>
  )
}

export default FormInput