import createQueryString from '../utils/createQueryString'
const url = 'https://www.goodrx.com/api/v4/pharmacies'

export default ({ params }) => new Promise(async (resolve, reject) => {
	try {
		const searchParams = createQueryString(params)
		const response = await fetch(`${url}${searchParams}`)
		const data = await response.json()
		resolve(data)
	} catch (err) {
		reject(err)
	}
})