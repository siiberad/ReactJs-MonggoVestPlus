import React from 'react'

const Suggestions = (props) => {
  const options = props.hasil.map(r => (
      <li key={r.productId}>
      {r.productName}
    </li>
  ))
  return <ul>{options}</ul>
}
export default Suggestions