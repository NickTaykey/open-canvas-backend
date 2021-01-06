function raise500 (req, res, nxt) {
	return res.status(500).json({
		status  : 500,
		message : 'Internal server error, try again later ...'
	});
}

function raise404 (req, res, nxt) {
	return res.status(404).json({
		status  : 404,
		message : 'Not Found'
	});
}

function asyncErrorHandler (fn) {
	return (req, res, nxt) => {
		return Promise.resolve(fn(req, res, nxt)).catch(
			raise500.bind(null, req, res, nxt)
		);
	};
}

module.exports = { raise404, raise500, asyncErrorHandler };
