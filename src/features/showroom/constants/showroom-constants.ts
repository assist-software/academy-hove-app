export const ORDER_BY = {
  MOST_POPULAR: 'Most popular',
  PRICE_LOW_TO_HIGHT: 'Price: Low to High',
  PRiCE_HIGHT_TO_LOW: 'Price: High to Low',
  FEATURED: 'featured',
}

export const AltImgShowroom = {
  favorite: 'Favorite Icon',
  property: 'Property Image',
}

export const SHOWROOM_CAROUSEL_RESPONSIVE_OPTIONS = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '600px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '480px',
    numVisible: 1,
    numScroll: 1,
  },
]

export const SHOWROOM_ACTIVE_VIEW = {
  GRID: 'grid',
  LIST: 'list',
}

export type viewType = keyof typeof SHOWROOM_ACTIVE_VIEW
