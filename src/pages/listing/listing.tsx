import { ShowroomHeader } from 'features/header/showroom-header'
import { ListingDescription } from 'features/listings/components/listing-description/listing-description'
import { ListingGoogleMaps } from 'features/listings/components/listing-googleMaps/listing-googleMaps'
import { ListingImageContainer } from 'features/listings/components/listing-image-container/listing-image-container'
import { ListingMessageSeller } from 'features/listings/components/listing-message-seller/listing-message-seller'
import { ListingTitleHeader } from 'features/listings/components/listing-title-header/listing-title-header'
import styles from 'pages/listing/listing.module.scss'
export const Listing = () => {
  return (
    <>
      <div>
        <ShowroomHeader />
      </div>
      <div className={styles.container}>
        <ListingImageContainer />
        <ListingTitleHeader />
        <ListingDescription />
        <ListingGoogleMaps />
        <ListingMessageSeller />
      </div>
    </>
  )
}
