import { useEffect, useState } from "react";
function Checkbox(props) {
  const { checked, handleOnChange = false } = props;
  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleChange = (e) => {
    setCheck(e.target.checked);

    handleOnChange && handleOnChange(props.id, e.target.checked);
    //updateCounter();
  };
  return (
    <label>
      <input
        name={props.name}
        type="checkbox"
        checked={check}
        onChange={handleChange}
      />
      <span className="ml-2">{props.label}</span>
    </label>
  );
}
export default Checkbox;
