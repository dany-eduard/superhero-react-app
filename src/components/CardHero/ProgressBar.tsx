import PropTypes from 'prop-types'

interface ProgressBarProps {
  progress: number
  title?: string
  ariaMax?: number
}

const ProgressBar = ({ progress, title, ariaMax }: ProgressBarProps) => (
  <div className="progress mt-1">
    <div
      className="progress-bar"
      role="progressbar"
      style={{ width: `${progress}%` }}
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={ariaMax}
    >
      {`${progress}% ${title}`}
    </div>
  </div>
)

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  title: PropTypes.string,
  ariaMax: PropTypes.number,
}

ProgressBar.defaultProps = {
  title: '',
  ariaMax: 100,
}

export default ProgressBar
