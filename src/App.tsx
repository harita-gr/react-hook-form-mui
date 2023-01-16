import "./App.css";
import BasicForm from "./components/BasicForm";
import FormValidationWithYup from "./components/FormValidationWithYup";

function App() {
  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <main>
        <h3>Basic Form</h3>
        <BasicForm />
        <h3>Form Validation With Yup </h3>
        <FormValidationWithYup />
      </main>
    </div>
  );
}

export default App;
