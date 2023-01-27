const Node = require('./node.js')
module.exports = class LinkedList {
	#head = null
	#tail = null

	#setHeadAndTail (node) {
		this.#head = node
		this.#tail = node
	}

	get size () {
		// This is easier than updating size on the fly
		return this.toString().split('->').length - 1
	}
	get head () { return this.#head }
	get tail () { return this.#tail }

	append (value) {
		const newNode = Node(value)
		if (!this.#head) return this.#setHeadAndTail(newNode)

		const temp = this.#tail
		this.#tail = newNode
		temp.next = newNode
	}

	prepend (value) {
		const newNode = Node(value)
		if (!this.#head) return this.#setHeadAndTail(newNode)

		const temp = this.#head
		this.#head = newNode
		this.#head.next = temp
	}

	at (index) {
		if (index < 0 || !Number.isInteger(index)) return null
		let current = this.#head
		if (index === 0) return current

		for (let i = 1; i <= index; i++) {
			if (!current) return null
			current = current.next
		}
		return current
	}

	pop () {
		let current = this.#head
		if (current.next === null) return this.#setHeadAndTail(null)

		while (current) {
			if (current.next === this.#tail) {
				current.next = null
				this.#tail = current
			}
			current = current.next
		}
	}

	contains (value) {
		return this.find(value) !== null
	}

	find (value) {
		let i = 0
		let current = this.#head
		while (current) {
			if (current.value === value) return i
			current = current.next
			i++
		}
		return null
	}

	toString () {
		let list = ''
		let current = this.#head
		while (current) {
			list += `( ${current.value} ) -> `
			current = current.next
		}
		return list += ` ${current}` // null
	}

	insertAt (value, index) {
		if (index === 0) return this.prepend(value)
		const existingNode = this.at(index)
		if (!existingNode) return null

		const newNode = Node(value)
		this.at(index - 1).next = newNode
		newNode.next = existingNode
	}

	removeAt (index) {
		if (index === 0) return this.#head = this.at(1)
		const existingNode = this.at(index)
		if (!existingNode) return
		this.at(index - 1).next = existingNode.next
	}
}
