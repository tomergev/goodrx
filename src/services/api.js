const url = 'https://www.goodrx.com/api/v4/pharmacies'

const createSearchParams = (searchParams = []) => {
	const searchParamsString = searchParams.reduce((string, obj) => {
		const key = Object.keys(obj)[0]
		string += `${key}=${obj[key]}&`
		return string
	}, '?')

	return searchParamsString
}

export default ({ params }) => new Promise(async (resolve, reject) => {
	try {
		const searchParams = createSearchParams(params)
		const response = await fetch(`${url}${searchParams}`)
		const data = await response.json()
		resolve(data)
	} catch (err) {
		reject(err)
	}
})