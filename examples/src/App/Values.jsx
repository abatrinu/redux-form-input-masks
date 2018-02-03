import React from 'react'
import { values as valuesDecorator } from 'redux-form'
import Code from './Code'

const Values = ({ form, format = values => JSON.stringify(values, null, 2) }) => {
  const decorator = valuesDecorator({ form })
  const component = ({ values }) =>
    (
      <div style={{ display: 'block' }}>
        <h2>Values</h2>
        <Code source={format(values)}/>
      </div>
    )
  const Decorated = decorator(component)
  return <Decorated/>
}

export default Values