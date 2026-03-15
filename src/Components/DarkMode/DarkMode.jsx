import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                {Sun}
                {Moon}
            </label>
        </div>
    );
};

export default DarkMode;
