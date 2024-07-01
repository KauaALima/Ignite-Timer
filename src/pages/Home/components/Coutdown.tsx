import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

import { CyclesContext } from '../../../contexts/CycleContext'

export function Coutdown() {
  const {
    activeCycle,
    activeCycleId,
    secondsPassed,
    SetSecondsPassed,
    markCurrentCycleAsFinished,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          SetSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          SetSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    SetSecondsPassed,
    markCurrentCycleAsFinished,
  ])

  const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const Minutes = String(minutesAmount).padStart(2, '0')
  const Seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${Minutes}:${Seconds}`
    }
  }, [Minutes, Seconds, activeCycle])

  return (
    <div className="font-mono text-[10rem] leading-[8rem] font-bold flex gap-4 items-center justify-center">
      <span className="py-8 px-4 bg-gray-700 rounded-lg dark:bg-slate-100">{Minutes[0]}</span>
      <span className="py-8 px-4 bg-gray-700 rounded-lg dark:bg-slate-100">{Minutes[1]}</span>
      <span className="py-8 overflow-hidden w-16 flex justify-center text-green-500">
        :
      </span>
      <span className="py-8 px-4 bg-gray-700 rounded-lg dark:bg-slate-100">{Seconds[0]}</span>
      <span className="py-8 px-4 bg-gray-700 rounded-lg dark:bg-slate-100">{Seconds[1]}</span>
    </div>
  )
}
