import _ from 'lodash'

export const hasProps = (obj, props) =>
  _.isObject(obj) && props.reduce((acc, prop) => _.has(obj, prop), false)
