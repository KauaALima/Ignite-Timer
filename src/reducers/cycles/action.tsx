import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPETED_CYCLE = 'INTERRUPETED_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHEDS = 'MARK_CURRENT_CYCLE_AS_FINISHEDS',
}

export function addNewCycleAction(NewCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      NewCycle,
    },
  }
}

export function interrupetedCycleAction() {
  return {
    type: ActionTypes.INTERRUPETED_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHEDS,
  }
}
