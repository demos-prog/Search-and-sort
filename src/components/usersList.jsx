import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./userListStyles.css";

const arr = [
  { name: "Ivan", age: 18, numb: 1 },
  { name: "Ira", age: 32, numb: 4 },
  { name: "Dima", age: 54, numb: 2 },
  { name: "Andrey", age: 14, numb: 3 },
  { name: "koliya", age: 59, numb: 5 },
  { name: "Ignat", age: 59, numb: 8 },
  { name: "Sasha", age: 23, numb: 7 },
  { name: "pavel", age: 64, numb: 6 },
  { name: "lida", age: 83, numb: 10 },
  { name: "grisha", age: 32, numb: 13 },
  { name: "Olga", age: 26, numb: 12 },
  { name: "lida", age: 21, numb: 14 },
  { name: "Dariya", age: 92, numb: 11 },
  { name: "Mihail", age: 42, numb: 15 },
];

export default function Userlist() {
  const [value, setValue] = useState("");
  const [sorting, setSorting] = useState("numb");

  const sortedArr = arr.sort((a, b) => {
    switch (sorting) {
      case "name":
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        break;
      case "age":
        return a.age - b.age;
      case "numb":
        return a.numb - b.numb;
      default:
        break;
    }
    return 0;
  });

  const list = sortedArr.map((item) => {
    if (item.name.includes(value)) {
      return (
        <tr key={nanoid()}>
          <td>{item.numb}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      );
    }
    return null;
  });

  return (
    <>
      <div className="srch">
        <input
          type="text"
          value={value}
          placeholder="Search by Name"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>

      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={() => setSorting("numb")}>
                sort by <strong>Numb</strong>
              </button>
            </td>
            <td>
              <button onClick={() => setSorting("name")}>
                sort by <strong>Name</strong>
              </button>
            </td>
            <td>
              <button onClick={() => setSorting("age")}>
                sort by <strong>Age</strong>
              </button>
            </td>
          </tr>
          {list}
        </tbody>
      </table>
    </>
  );
}
