export default (searchParams = []) => {
	const queryString = searchParams.reduce((string, obj) => {
		const key = Object.keys(obj)[0]
		string += `${key}=${obj[key]}&`
		return string
	}, '?')

	return queryString
}
