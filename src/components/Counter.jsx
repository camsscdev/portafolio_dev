import PropTypes from 'prop-types'

export function Counter({ value }) {
  return (
    <>
      <div>Counter App</div>
      <p>{value}</p>
    </>
  )
}

Counter.propTypes = {
  value: PropTypes.number,
}
