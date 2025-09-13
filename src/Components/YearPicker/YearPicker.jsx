import YearPicker from "react-year-picker";

const YearPickerCom = (props) => {
    const handleChange = (date) =>{
        props.onChange(date);
        
    }
    return (
        <div>
          <YearPicker onChange={handleChange} />;
        </div>
    );
};

export default YearPickerCom;