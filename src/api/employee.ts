import { API, BaseResponse, get } from "./base";
import { IEmployee } from "@/types";

interface RecordResponse {
  Address: string;
  DateOfBirth: string;
  Name: string;
  Salary: number;
}

type GetRecordsResponse = BaseResponse<RecordResponse[]>;

function toEmployee(
  { Address, DateOfBirth, Name, Salary }: RecordResponse,
): IEmployee {
  return {
    address: Address,
    birth: new Date(DateOfBirth),
    name: Name,
    salary: Salary,
  };
}

export const Employee = {
  get: () =>
    get<GetRecordsResponse>(API("Record/GetRecords")).then(({ Data }) =>
      Data.map(toEmployee)
    ),
};
