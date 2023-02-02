import { EventEmitter } from 'fbemitter'

class RobotStore {
	constructor(){
		this.robots = [{
			id : 1,
			type : 'worker',
			name : 'tim',
			mass : 1000
		},{
			id : 2,
			type : 'worker',
			name : 'tom',
			mass : 1500
		}]
		this.emitter = new EventEmitter()
	}
	addRobot(r){
		let maxId = this.robots.map((e) => e.id).reduce((a, e) => a > e ? a : e, 1)
		r.id = maxId + 1
		this.robots = [...this.robots, r]
		this.emitter.emit('UPDATE')
	}
	getRobots(){
		return this.robots
	}
}

const store = new RobotStore()

export default store