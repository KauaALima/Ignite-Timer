import { useContext } from 'react'
import { CyclesContext } from '../contexts/CycleContext'
import { TbodyStatus } from '../components/ui/TbodyStatus'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <main className="flex flex-col flex-1 p-14 gap-8 items-start">
      <h1 className="font-bold text-2xl text-gray-100 dark:text-gray-600">Meu histórico</h1>

      <div className="overflow-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-600 text-gray-100 font-bold text-sm dark:text-gray-600  dark:bg-slate-100">
            <tr className="">
              <th className="rounded-tl-lg py-4 px-6 w-[50%]">Tarefa</th>
              <th className="py-4 pr-6">Duração</th>
              <th className="py-4 pr-6">Início</th>
              <th className="rounded-tr-lg py-4 pr-16">Status</th>
            </tr>
          </thead>

          <tbody className="bg-gray-700 text-gray-300 font-normal text-sm dark:text-gray-600 dark:bg-slate-100">
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id} className="border-t-4 border-gray-800 dark:border-gray-300">
                  <td className="w-[50%] py-4 px-6">{cycle.task}</td>
                  <td className="py-4">{cycle.minutesAmount} Minutos</td>
                  <td className="py-4">
                    {formatDistanceToNow(new Date(), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td className="py-6">
                    {cycle.finisheDate && (
                      <TbodyStatus color="concluded" text="Concluido" />
                    )}
                    {cycle.interrupetDate && (
                      <TbodyStatus color="interrupted" text="Interronpido" />
                    )}
                    {!cycle.interrupetDate && !cycle.finisheDate && (
                      <TbodyStatus color="progress" text="Em andamento" />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
