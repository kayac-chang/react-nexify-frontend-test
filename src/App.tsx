import {
  Button,
  DatePicker,
  RangeSlider,
  TextArea,
  TextInput,
} from "@/components";

function App() {
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
            <tr>
              <td className="py-4 pr-4">
                <TextInput />
              </td>
              <td className="py-4 pr-4">
                <DatePicker />
              </td>
              <td className="py-4 pr-4">
                <RangeSlider />
              </td>
              <td className="py-4 pr-4">
                <TextArea />
              </td>
            </tr>

            <tr>
              <td className="py-4 pr-4">
                <TextInput />
              </td>
              <td className="py-4 pr-4">
                <DatePicker />
              </td>
              <td className="py-4 pr-4">
                <RangeSlider />
              </td>
              <td className="py-4 pr-4">
                <TextArea />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </article>
  );
}

export default App;
