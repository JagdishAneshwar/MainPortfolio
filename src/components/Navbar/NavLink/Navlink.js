import React from 'react'

export default function Navlink(props) {
  return (
    <li className="nav-item">
    <a className="nav-link" href={props.link}>{props.name}</a>
  </li>
  )
}
