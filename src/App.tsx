import {
  Button,
  DatePicker,
  RangeSlider,
  TextArea,
  TextInput,
} from "@/components";
import { useEffect, useState } from "react";
import { Employee } from "./api";
import { IEmployee } from "@/types";

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    Employee.get().then(setEmployees);
  }, []);

  return (
    <article className="container space-y-8">
      <header className="flex justify-between">
        <Button className="bg-indigo-button">新紀錄</Button>
        <Button className="bg-red-button">保存</Button>
        <Button className="bg-pink-button">更新</Button>
      </header>

      <main>
        <table className="table-auto text-gray-400 w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-4">名字</th>
              <th className="py-4">出生日期</th>
              <th className="py-4">工資</th>
              <th className="py-4">住址</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {employees.map(({ name, birth, salary, address }, index) => (
              <tr key={index}>
                <td className="py-4 pr-4">
                  <TextInput value={name} />
                </td>

                <td className="py-4 pr-4">
                  <DatePicker value={birth} />
                </td>

                <td className="py-4 pr-4">
                  <RangeSlider min={0} max={100000} value={salary} />
                </td>

                <td className="py-4 pr-4">
                  <TextArea value={address} />
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
