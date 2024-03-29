const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

// Help with inference when extracting values
const CAR = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
// carMakers.push(100)

//Help with map
carMakers.map((car:string):string => {
    return car.toUpperCase()
})

// Flexible types
const importantDates: (Date| string)[] = []
importantDates.push('20224-02-01')
importantDates.push(new Date())
// importantDates.push(45)