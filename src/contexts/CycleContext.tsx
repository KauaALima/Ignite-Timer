import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCycleAction,
  interrupetedCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/action'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleProps {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  secondsPassed: number
  markCurrentCycleAsFinished: () => void
  SetSecondsPassed: (seconds: number) => void
  CreateNewCycle: (data: CreateCycleProps) => void
  InterrupetedCycle: () => void
}

interface CycleContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cycleState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStatsAsJson = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedStatsAsJson) {
        return JSON.parse(storedStatsAsJson)
      }
    },
  )

  useEffect(() => {
    const jsonState = JSON.stringify(cycleState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', jsonState)
  }, [cycleState])

  const { cycles, activeCycleId } = cycleState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [secondsPassed, setSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  function SetSecondsPassed(seconds: number) {
    setSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function CreateNewCycle(data: CreateCycleProps) {
    const id = String(new Date().getTime())

    const NewCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    dispatch(addNewCycleAction(NewCycle))

    setSecondsPassed(0)
  }

  function InterrupetedCycle() {
    dispatch(interrupetedCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        secondsPassed,
        SetSecondsPassed,
        markCurrentCycleAsFinished,
        CreateNewCycle,
        InterrupetedCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
