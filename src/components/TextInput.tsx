type Props = {
  value?: string;
  onChange?: (value: string) => void;
};
export function TextInput({ value = "", onChange }: Props) {
  return (
    <input
      type="text"
      className="border-b p-2"
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
