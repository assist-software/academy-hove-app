import dayjs from 'dayjs'

export const getFormattedDate = (date: string) => {
  return dayjs(date).format('DD.MM.YYYY at hh:mm')
}
