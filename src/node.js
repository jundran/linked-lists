'use strict'
module.exports = function Node (value = null, next = null) {
	return {
		value,
		next
	}
}
