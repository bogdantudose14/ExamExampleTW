import React from 'react'
import RobotForm from './RobotForm'
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App'

it ('renders a robot form', () => {
	const app = render(<App />)
	const forms = app.getAllByText('Robot form')
	expect(forms.length).toEqual(1)	
})

it ('form contains valid inputs', () => {
	const container = render(<RobotForm />)
	const inputName = container.getByRole('textbox', {name: /name/i})
	const inputType = container.getByRole('textbox', {name: /type/i})
	const inputMass = container.getByRole('textbox', {name: /mass/i})
	expect(inputName).toBeTruthy()
	expect(inputType).toBeTruthy()
	expect(inputMass).toBeTruthy()
})

it ('add a robot and it exists on the page', () => {
	const container = render(<App />)
	const inputName = container.getByRole('textbox', {name: /name/i})
	const inputType = container.getByRole('textbox', {name: /type/i})
	const inputMass = container.getByRole('textbox', {name: /mass/i})
	fireEvent.change(inputName, { target: { value: 'test' } })
	fireEvent.change(inputType, { target: { value: 'engineer' } })
	fireEvent.change(inputMass, { target: { value: '1000' } })
	const addButton = container.getByRole('button')
	fireEvent.click(addButton)
	const renderedItem = container.getByText(/test/)
	expect(renderedItem).toBeTruthy()
})

it ('form is reset', () => {
	const container = render(<App />)
	const inputName = container.getByRole('textbox', {name: /name/i})
	const inputType = container.getByRole('textbox', {name: /type/i})
	const inputMass = container.getByRole('textbox', {name: /mass/i})
	fireEvent.change(inputName, { target: { value: 'test' } })
	fireEvent.change(inputType, { target: { value: 'engineer' } })
	fireEvent.change(inputMass, { target: { value: '1000' } })
	const addButton = container.getByRole('button')
	fireEvent.click(addButton)
	expect(inputName.value).toEqual('')
})

