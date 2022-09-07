import { Card } from 'primereact/card'

interface Props {
  text: string
}

export const ErrorCard = ({ text }: Props) => {
  return <Card className='p-card-error'>{text}</Card>
}
