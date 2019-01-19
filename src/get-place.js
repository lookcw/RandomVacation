export default function getPlace(lat, lng) {
	return new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();
		var reqStr = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDUGI5_aCtLUVLHNQ9op4ba_4buTbAG3wQ`;
		request.open(
			'GET',
			reqStr,
			true)

		request.onload = function() {
			// Begin accessing JSON data here
			if (this.status >= 200 && this.status < 300) {
				resolve(JSON.parse(request.response));
			}
			else {
					console.log('error status: '+this.status);
				}
		}
		request.send();
	});
}