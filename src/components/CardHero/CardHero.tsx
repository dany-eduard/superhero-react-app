/* eslint-disable jsx-a11y/control-has-associated-label */
import { Appearance, Image, Powerstats } from 'interfaces/Hero.interface'
import ProgressBar from './ProgressBar'

interface CardProps {
  name: string
  powerstats: Powerstats
  fullName: string
  alignment: string
  appearance: Appearance | any
  image: Image
}

const index = (props: CardProps) => {
  const { name, powerstats, fullName, alignment, /* appearance, */ image } = props
  return (
    <div className="card p-3 mb-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div className="avatar">
            <img className="img-fluid" src={image.url} alt={`${name}.profile`} />
          </div>
          <div className="ms-2 c-details">
            <h6 className="mb-0">{name}</h6> <span>{fullName}</span>
          </div>
        </div>
        <div className={`alignment-container fst-italic ${alignment === 'good' ? 'text-success' : 'text-warning'}`}>
          {' '}
          <span>{alignment}</span>{' '}
        </div>
      </div>
      <div>
        <div className="mt-3">
          <span>Combate:</span> <ProgressBar progress={Number(powerstats.combat) || 0} />
          <span>Durabilidad:</span> <ProgressBar progress={Number(powerstats.durability) || 0} ariaMax={80} />
          <span>Inteligencia:</span> <ProgressBar progress={Number(powerstats.intelligence) || 0} ariaMax={80} />
          <span>Poder:</span> <ProgressBar progress={Number(powerstats.power) || 0} ariaMax={80} />
          <span>Velocidad:</span> <ProgressBar progress={Number(powerstats.speed) || 0} ariaMax={80} />
          <span>Fuerza:</span> <ProgressBar progress={Number(powerstats.strength) || 0} ariaMax={80} />
        </div>
      </div>
    </div>
  )
}

export default index
