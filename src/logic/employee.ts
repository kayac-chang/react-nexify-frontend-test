import { useCallback, useReducer } from "react";
import API from "@/api";
import { IEmployee } from "@/types";
import { v4 as uuid } from "uuid";

type Action<T> =
  | { type: "replace"; payload: T }
  | { type: "append"; payload: T };

function reducer(state: IEmployee[], action: Action<IEmployee[]>) {
  if (action.type === "replace") {
    return action.payload;
  }

  if (action.type === "append") {
    return [...state, ...action.payload];
  }

  return state;
}

export function useEmployees() {
  const [employees, dispatch] = useReducer(reducer, []);

  const replace = (payload: IEmployee[]) =>
    dispatch({ type: "replace", payload });

  const append = () => dispatch({ type: "append", payload: [{ id: uuid() }] });

  const refetch = useCallback(() => API.Employee.get().then(replace), [
    replace,
  ]);

  const create = useCallback(append, [append]);

  const save = useCallback(() => {
    const hasEmpty = employees.some(({ name, birth, salary, address }) =>
      [name, birth, salary, address].some((it) => it === undefined)
    );

    if (hasEmpty) {
      console.error("//@TODO: Field must not be empty");

      return;
    }

    API.Employee.save(employees as Required<IEmployee>[]).then(refetch);
  }, [employees, refetch]);

  const update = useCallback(
    (payload: IEmployee) =>
      replace(
        employees.map((employee) =>
          payload.id === employee.id ? payload : employee
        ),
      ),
    [employees, replace],
  );

  return { employees, create, save, refetch, update };
}
