import { API, BaseResponse, get, post } from "./base";
import { IEmployee as _IEmployee } from "@/types";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

type IEmployee = Required<_IEmployee>;

interface RecordResponse {
  Address: string;
  DateOfBirth: string;
  Name: string;
  Salary: number;
}

type GetRecordsResponse = BaseResponse<RecordResponse[]>;
type SaveRecordsResponse = BaseResponse<null>;

function toEmployee(
  { Address, DateOfBirth, Name, Salary }: RecordResponse,
): IEmployee {
  return {
    id: uuid(),
    address: Address,
    birth: new Date(DateOfBirth),
    name: Name,
    salary: Salary,
  };
}

function toRequest(
  { name, birth, salary, address }: IEmployee,
): RecordResponse {
  return {
    Address: address,
    DateOfBirth: format(birth, "yyyy-MM-dd"),
    Name: name,
    Salary: salary,
  };
}

export default {
  get: () =>
    get<GetRecordsResponse>(API("Record/GetRecords")).then(({ Data }) =>
      Data.map(toEmployee)
    ),

  save: (employees: IEmployee[]) =>
    post<SaveRecordsResponse>(
      API("Record/SaveRecords"),
      employees.map(toRequest),
    ),
};
