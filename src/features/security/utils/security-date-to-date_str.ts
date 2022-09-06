import dayjs from 'dayjs'

export const getFormatedDate = (date: string) => {
  return dayjs(date).format('DD.MM.YYYY at hh:mm')
}
