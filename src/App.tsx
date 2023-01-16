import "./App.css";
import BasicForm from "./components/BasicForm";
import FormValidationWithYup from "./components/FormValidationWithYup";
import FormWithMUIComponents from "./components/FormWithMUIComponents";

function App() {
  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <main>
        <h3>Basic Form</h3>
        <BasicForm />
        <h3>Form Validation With Yup </h3>
        <FormValidationWithYup />
        <h3>Form With MUI Components</h3>
        <FormWithMUIComponents />
      </main>
    </div>
  );
}

export default App;
