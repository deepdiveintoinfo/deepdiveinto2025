import accessiblity from "./accessiblity"
import animation from "./animation"
import backgrounds from "./backgrounds"
import borders from './borders'
import colors from './colors'
import effects from './effects'
import filters from './filters'
import grid from './grid'
import interactivity from './interactivity'
import layout from './layout'
import sizing from './sizing'
import spacing from './spacing'
import svg from './svg'
import tables from './tables'
import transforms from './transforms'
import typography from './typography'

import extend from './extend'

export default {
  extend,
  colors,
  ...accessiblity,
  ...animation,
  ...backgrounds,
  ...borders,
  ...effects,
  ...filters,
  ...grid,
  ...interactivity,
  ...layout,
  ...spacing,
  ...sizing,
  ...svg,
  ...tables,
  ...transforms,
  ...typography,
}

export {
  accessiblity,
  animation,
  backgrounds,
  borders,
  colors,
  effects,
  extend,
  filters,
  grid,
  interactivity,
  layout,
  sizing,
  spacing,
  svg,
  tables,
  transforms,
  typography,
}