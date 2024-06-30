import { useContext } from 'react'
import { CyclesContext } from '../../../contexts/CycleContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <div className="flex w-full items-center justify-center gap-2 text-lg text-gray-100 font-bold flex-wrap">
      <label htmlFor="TextInput">Vou trabalhar em</label>
      <input
        id="TextInput"
        list="InputList"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        required
        className="flex-1 h-10 px-2 bg-transparent border-0 border-b-2 border-gray-500 disabled:cursor-not-allowed focus:shadow-none duration-150 focus:border-green-500 "
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="InputList">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
      </datalist>

      <label htmlFor="Duration">durante</label>
      <input
        type="number"
        id="Duration"
        step="5"
        min="5"
        max="60"
        className="w-16 h-10 px-2 bg-transparent border-0 border-b-2 border-gray-500 disabled:cursor-not-allowed focus:shadow-none duration-150 focus:border-green-500  
      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </div>
  )
}
