const capitalizeFirstLetter = (props: string) => {
  return props?.charAt(0).toUpperCase() + props?.slice(1)
}

export const UtilService = {
  capitalizeFirstLetter,
}
