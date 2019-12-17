import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Button from './index'

it('Renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Button></Button>, div)
})

test('Creates a button', () => {
	const component = renderer.create(
		<Button onClick={() => console.log('clicked')} />
	)

	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()

	tree.props.onClick()
	tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})