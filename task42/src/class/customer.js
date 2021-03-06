import {
	randomNum
} from '../utils/utils.js'

function Customer(name) {
	this.name = name
	this.seated()
}

Customer.prototype.eat = function () {
	// 吃
	console.log('吃菜')
}

Customer.prototype.orderDishes = function (menus) {
	// 点菜
	let dishes = menus[randomNum(1, 3)]
	console.log('选择:' + dishes.name)
	return dishes
}

Customer.prototype.seated = function () {
	//	顾客入座
	console.log(`${this.name}, 你好. 请点菜`)
}

export default Customer