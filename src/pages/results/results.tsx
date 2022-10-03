import { Resultshotos } from 'features/results/components/results-photos/results-photos'
import style from './results.module.scss'

export const Results = () => {
  return (
    <div className={style.results}>
      <Resultshotos />
    </div>
  )
}
