import { NewCycleForm } from './components/NewCycleForm'
import { Coutdown } from './components/Coutdown'
import { Play, Hand } from 'lucide-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContext'

const NewCycleSchma = z.object({
  task: z.string().min(1, 'informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = z.infer<typeof NewCycleSchma>

export function Home() {
  const { activeCycle, CreateNewCycle, InterrupetedCycle } =
    useContext(CyclesContext)

  const NewCycleFormContext = useForm<NewCycleFormData>({
    resolver: zodResolver(NewCycleSchma),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = NewCycleFormContext

  function handleCreateNewCycle(data: NewCycleFormData) {
    CreateNewCycle(data)
    reset()
  }

  const inputTask = watch('task')
  const DisableButton = !inputTask

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <form
        action=""
        className="flex flex-col justify-center items-center gap-14"
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <FormProvider {...NewCycleFormContext}>
          <NewCycleForm />
        </FormProvider>
        <Coutdown />

        {activeCycle ? (
          <button
            onClick={InterrupetedCycle}
            className="flex gap-2 w-full items-center justify-center h-16 rounded-lg text-base font-bold bg-red-500 duration-150 [&:not(:disabled)]:hover:bg-red-700 hover:duration-150  disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Hand size={24} />
            Interroper
          </button>
        ) : (
          <button
            disabled={DisableButton}
            className="flex gap-2 w-full items-center justify-center h-16 rounded-lg text-base font-bold bg-green-500 duration-150 [&:not(:disabled)]:hover:bg-green-700 hover:duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </main>
  )
}
