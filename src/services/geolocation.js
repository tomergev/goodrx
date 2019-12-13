// Geolocation Docs: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
export default () => new Promise((resolve, reject) => {
	try {
		const onSuccess = ({ coords }) => {
			const {
				latitude: lat,
				longitude: lng,
			} = coords

			resolve({ lat, lng })
		}

		const onError = (err) => reject(err)

		navigator.geolocation.getCurrentPosition(onSuccess, onError)
	} catch (err) {
		reject(err)
	}
})