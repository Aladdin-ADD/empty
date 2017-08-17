import 'react'
import 'purecss'
import './main.styl'
import 'font-awesome/css/font-awesome.css'

import component from './component'

const element = component()

// element.className = 'redButton'
document.body.appendChild(element)
