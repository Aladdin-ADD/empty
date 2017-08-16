import styles from './main.css'

import component from './component'

const element = component()
// Attach the generated class name
element.className = styles.redButton

document.body.appendChild(element)
