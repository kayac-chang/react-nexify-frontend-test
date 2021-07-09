type Props = {
  value?: string;
  onChange?: (value: string) => void;
};
export function TextArea({ value, onChange }: Props) {
  return (
    <textarea
      name=""
      id=""
      cols={30}
      rows={2}
      className="border-b p-2"
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
    ></textarea>
  );
}
