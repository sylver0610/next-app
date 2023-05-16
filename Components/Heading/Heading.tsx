import React from 'react'
import styles from '../../styles/Heading.module.scss'
interface IProps {
  type: String
  title: String
}

export const Heading: React.FC<IProps> = (props) => {
  const { type, title } = props
  const getHeading = () => {
    return styles[`heading-${type}`]
  }
  return <p className={getHeading()}>{title}</p>
}
