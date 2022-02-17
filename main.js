// const chasisChassis = () => {    
//create a new object. No properties yet.

const createChassis = () => {
	const chassisObj = {}
	return chassisObj	
}

// The addWheels() function should have a parameter for the incoming chassis object. It should add a new property to that object named wheels with a value of 4. The function should return the chassis object.
const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const addWheels = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.wheels = 4

	// Return the chassis that now has a body property on it
	return chassisObject
}

const addEngine = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.engine = "4.8L"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const addSteeringWheel = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.steeringwheel = "Tilting"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const addDrive = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.DriveTrain = "Two wheel drive"

	// Return the chassis that now has a body property on it
	return chassisObject
}



// The addEngine() function should have a parameter for the incoming chassis object. It should add a new property to that object named engine with a value of "4.8L". The function should return the chassis object.
// The addSteeringWheel() function should have a parameter for the incoming chassis object. It should add a new property to that object named steeringWheel with a value of "Tilting". The function should return the chassis object.
// The addDriveTrain() function should have a parameter for the incoming chassis object. It should add a new property to that object named driveTrain with a value of "Two wheel drive". The function should return the chassis object.
// Make sure you invoke each function, store the returned object in a variable, and then use console.log() to ensure that each of your little minions is doing its job correctly.

const chassis = createChassis()
const chassisBody = addBody(chassis)
const chassisWheels = addWheels(chassisBody)
const chassisEngine = addEngine(chassisWheels)
const chassisSteering = addSteeringWheel(chassisEngine)
// const chassisDrive = addDriveTrain(chassisSteering)


console.log(chassisSteering)


// const buildCar = () =>{
//     const chassis = createChassis()
//     const chssisBody = addBody(chassis)
//     const chassisWheels = addWheels(chassisBody)
//     const chassisEngine = addEngine(chassisWheels)
//     const chassisSteering = addSteeringWheel(chassisEngine)
//     const chassisDrive = addDriveTrain(chassisSteering)  

//     return chassisDrive
// }

//for loop example below
// const carLot = []

// for ( let i = 0; i < 50; i++){
//     carLot.push(buildCar)

// }

// const car1 = buildCar()
// const car2 = buildCar()

// console.log("Our car", carLot)

// for ( let i = 0; i < 50; i++){
//     carLot.push(buildCar())
// }