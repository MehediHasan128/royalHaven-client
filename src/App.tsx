import { FieldValues } from "react-hook-form";
import RForm from "./components/form/RForm"

function App() {

  const handelSubmit = (data: FieldValues) => {
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <RForm onSubmit={handelSubmit}>
          <input type="email" name="email" id="email" className="border" />
          <button>Submit</button>
        </RForm>
      </div>
    </div>
  )
}

export default App
