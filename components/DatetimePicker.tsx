import moment, { Moment } from "moment";
import Datetime from "react-datetime";
import { useDispatch, useSelector } from "react-redux";
import { setReminder, setReminderState } from "../src/redux/features/reminder.reducer";

function DatetimePicker() {
    const dispatch = useDispatch();

    const reminderDate = useSelector((state: any) => state.reminder.reminderDate);

    function valid(current: Moment) {
        let date = new Date();
        return current.toDate() >= date;
    }

    const onChangeDatetime = (val: any) => dispatch(setReminder(val.utc().valueOf()));

    return (
        <div className="datetime-picker-container">
            <Datetime
                isValidDate={valid}
                dateFormat="YYYY-MMM-DD"
                closeOnClickOutside={true}
                onChange={(val) => onChangeDatetime(val)}
                initialValue={new Date()}
                onClose={(_) => {
                    dispatch(setReminderState(false));
                }}
                inputProps={{ readOnly: true }}
            />
        </div>
    );
}

export default DatetimePicker;
