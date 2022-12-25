import { useContext } from "react";
import StepperContext from "../../context/StipperContext";

function ZipCode() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div className="container md:mt-10 ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <form action="submit" className="form">
            <label htmlFor="pcode">Enter postal code</label>
            <input id="pcode" type="numbers" placeholder="Enter postal Code" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ZipCode;
