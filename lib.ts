// Import the schedule file.
import schedule from './schedule.ts'

// Import the show type from the models file.

import { Show } from './models/show.ts'

// Complete the getTime function.
export function getTime(show: Show): string {
  return show.time
}

// Complete the getName function.
export function getName(show: Show): string {
  return show.name
}

// Complete the getShowTimes function, returning an array of show times.
export function getShowTimes(): string[] {
  //make an array, push things into it from each show using .map

  return schedule.map((show) => getTime(show))
}

// Complete the getShowNames function, returning an array of show names.
//at first we did the same as above but for the the name instead of the time.

export function getShowNames(): string[] {
  return schedule.map((show) => getName(show))
}

// Complete the getShowByTimeslot function, returning a show based on the timeslot or undefined if not found.
export function getShowByTimeslot(timeslot: string): Show | undefined {
  // const placeholderShow = {
  //   time: 'Placeholder time',
  //   name: 'Placeholder show',
  //   description: 'Placeholder description',
  // }

  return schedule.find((show) => show.time === timeslot)
}

// =========
// Stretch!
// =========

// Complete the getNextShowByTimeslot function, returning a show based on the timeslot or undefined if not found.
export function getNextShowByTimeslot(timeslot: string) {
  return 'Placeholder next show'
}
