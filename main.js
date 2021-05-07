function getSleepHours (day) {
  if (day == 'monday') {
    return 8;
  } else if (day == 'tuesday') {
    return 8;
  } else if (day == 'wednesday') {
    return 8;
  } else if (day == 'thursday') {
    return 8;
  } else if (day == 'friday') {
    return 9;
  } else if (day == 'saturday') {
    return 8;
  } else if (day == 'sunday') {
    return 8;
  }
}

function getActualSleepHours () {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  }

function getIdealSleepHours () {
  let idealHours = 8;
  return idealHours * 7
}

function calculateSleepDebt () {
  if (actualSleepHours > idealSleepHours) {
      console.log(`You need ${Math.abs(idealSleepHours - actualSleepHours)} less hour(s) of sleep.`) } else if (actualSleepHours < idealSleepHours) {
        console.log(`You need ${idealSleepHours - actualSleepHours} more hour(s) of sleep!`)
    }
  }

let actualSleepHours = getActualSleepHours()

let idealSleepHours = getIdealSleepHours()

function howSleepyAmI() {
  if (actualSleepHours == idealSleepHours) {
    console.log("You got the perfect amount of sleep!")
  } else if (actualSleepHours > idealSleepHours) {
    console.log("Hey, you got too much sleep.")
  } else if (actualSleepHours < idealSleepHours) {
    console.log("Get some rest...")
  } calculateSleepDebt()
}

howSleepyAmI()
