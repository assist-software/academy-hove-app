import { FC, useEffect, useRef, useState } from 'react'
import imageRef from 'features/add-item/assets/uploadImg.png'
import styles from 'features/add-item/styles/add-item.module.scss'
import { PHOTOS_AND_VIDEO_CONSTANTS } from 'features/add-item/constants/add-item-constants'

export const AddImage: FC<any> = ({ ...props }) => {
  const { image, setImage, setArray, setSetArray, setFieldValue, errors, touched } = props

  const inputArr = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
  ]

  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        let imageConverted = reader.result
        const newFiles = [...setArray]

        newFiles[image.index] = imageConverted

        setSetArray(newFiles)
        setFieldValue('file', newFiles)
      }
      reader.readAsDataURL(image.image)
    }
  }, [image])

  return (
    <>
      <div className={styles.descriptionContainer}>
        <div className={styles.leftContainerPhoto}>
          <h4>{PHOTOS_AND_VIDEO_CONSTANTS.PHOTO_VIDEO_TITLE}</h4>
          <div className={styles.subtitleStyle}>{PHOTOS_AND_VIDEO_CONSTANTS.PHOTO_VIDEO_SUBTITLE} </div>
        </div>

        <div className={styles.showImageContainer}>
          {inputArr?.map((elem: any, index) =>
            setArray[index] ? (
              <img
                className={styles.previewImageStyle}
                src={setArray[index]}
                key={index}
                onClick={() => {
                  const newArray = [...setArray]
                  newArray[index] = undefined
                  setSetArray(newArray)
                  setFieldValue('file', newArray)
                }}
              />
            ) : (
              <img
                className={touched && errors ? styles.imageRefStyleError : styles.imageRefStyle}
                src={imageRef}
                key={index}
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById(`input-${index}`)?.click()
                }}
              />
            ),
          )}
        </div>

        <div>
          {inputArr?.map((elem: any, index) => (
            <input
              key={index}
              id={`input-${index}`}
              className={styles.inputUploadStyle}
              type='file'
              accept='image/png, image/jpeg'
              onChange={(e: any) => {
                const file = e.target.files[0] as File
                if (file) {
                  setImage({ image: file, index: index })
                }
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
