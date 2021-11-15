/* eslint-disable jsx-a11y/control-has-associated-label */
import { Appearance, Image, Powerstats } from 'interfaces/Hero.interface'
import ProgressBar from './ProgressBar'

interface CardProps {
  alignment: string
  appearance: Appearance | any
  fullName: string
  image: Image
  name: string
  powerstats: Powerstats
  showAppearance?: boolean
  showPowerStats?: boolean
}

const index = (props: CardProps) => {
  const {
    alignment,
    appearance,
    fullName,
    image,
    name,
    powerstats,
    showAppearance = false,
    showPowerStats = false,
  } = props
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
      {showPowerStats && (
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
      )}
      {showAppearance && (
        <div className="mt-3">
          <hr />
          <h5 className="text-primary">Apariencia</h5>
          <table className="table table-sm">
            <tbody>
              <tr>
                <td className="fst-italic">Genero</td>
                <td className="fw-light">{appearance.gender}</td>
              </tr>
              <tr>
                <td className="fst-italic">Raza</td>
                <td className="fw-light">{appearance.race}</td>
              </tr>
              <tr>
                <td className="fst-italic">Altura</td>
                <td className="fw-light">{appearance.height[1]}</td>
              </tr>
              <tr>
                <td className="fst-italic">Peso</td>
                <td className="fw-light">{appearance.weight[1]}</td>
              </tr>
              <tr>
                <td className="fst-italic">Color de ojos</td>
                <td className="fw-light">{appearance['eye-color']}</td>
              </tr>
              <tr>
                <td className="fst-italic">Color de pelo</td>
                <td className="fw-light">{appearance['hair-color']}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default index
