'use client'
import classes from './image-picker.module.css'

function ImagePicker({name,label}) {
  function handleImageChange(event){
    const file = event.target.files[0]
  }

  return (
    <div className={classes.imagePicker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input
             type="file" name={name} id={name}
              accept='image/png, image/jpeg'
              onChange={handleImageChange}
              />
        </div>

    </div>
  )
}

export default ImagePicker