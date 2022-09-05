import { ShowroomAPIService } from './showroom-api-service'

const handleDeleteProprety = (idProprety: string) => {
  console.log('DELETE')
  ShowroomAPIService.deleteProprety(idProprety)
}

const handleFavorite = (idProprety: string) => {
  console.log('FAVORITE')
  ShowroomAPIService.addToFavorite(idProprety)
}

const handleApprove = (idProprety: string) => {
  console.log('APPROVE')
  ShowroomAPIService.deleteProprety(idProprety)
}

const handleEdit = (idProprety: string) => {
  console.log('EDIT')
}

export const ShowroomUtilService = {
  handleDeleteProprety,
  handleFavorite,
  handleApprove,
  handleEdit,
}
