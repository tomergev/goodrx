import createQueryString from './createQueryString'

describe('Returns a query string which can be used at the end of a http request', () => {
	it('Should default to returning a question mark', () => {
		const response = createQueryString()
		expect(response).toBe('?')
	})

	it('Should return: ?test=true&', () => {
		const response = createQueryString([{ test: true }])
		expect(response).toBe('?test=true&')
	})

	it('Should return a truthy value', () => {
		const response = createQueryString([{ chain_id: 8, }, { location: 'New York' }])
		expect(response).toBeTruthy()
	})
})