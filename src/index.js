
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let res = []
	if (arguments.length == 0) return res
	matrix.map((elem, index) => {
		if (index % 2 !== 0) {
			for (let i = elem.length - 1; i >= 0; i--) {
				const element = elem[i];
				res.push(element)
			}
		} else {
			elem.map((el, i) => {
				res.push(el)
			})
		}
	})



	return res;
}