import {
  Button,
  DatePicker,
  RangeSlider,
  TextArea,
  TextInput,
} from "@/components";
import { useEmployees } from "@/logic";

function App() {
  const { employees, create, save, refetch, update } = useEmployees();

  return (
    <article className="container w-[75vw] 2xl:w-[60vw] space-y-8">
      <header className="flex justify-between">
        <Button className="bg-indigo-button" onClick={create}>
          新紀錄
        </Button>

        <Button className="bg-red-button" onClick={save}>
          保存
        </Button>

        <Button className="bg-pink-button" onClick={refetch}>
          更新
        </Button>
      </header>

      <main className="overflow-scroll">
        <table className="table-auto w-full text-gray-400">
          <thead>
            <tr className="border-b text-left">
              <th className="py-4">名字</th>
              <th className="py-4">出生日期</th>
              <th className="py-4">工資</th>
              <th className="py-4">住址</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-4 pr-4">
                  <TextInput
                    value={employee.name}
                    onChange={(name) => update({ ...employee, name })}
                  />
                </td>

                <td className="py-4 pr-4">
                  <DatePicker
                    value={employee.birth}
                    onChange={(birth) => update({ ...employee, birth })}
                  />
                </td>

                <td className="py-4 pr-4">
                  <RangeSlider
                    min={0}
                    max={100000}
                    value={employee.salary}
                    onChange={(salary) => update({ ...employee, salary })}
                  />
                </td>

                <td className="py-4 pr-4">
                  <TextArea
                    value={employee.address}
                    onChange={(address) => update({ ...employee, address })}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </article>
  );
}

export default App;
