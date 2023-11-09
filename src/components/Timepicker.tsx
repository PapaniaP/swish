import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import "./Timepicker.css";
import "../theme/variables.css"

const Timepicker: React.FC = () => {
    return (
        <div className='timepickerContainer'>
            <strong className='timepickerStrong'>Select a date and time</strong>
            <IonDatetimeButton className='dateButtons' slot='start' datetime="datetime"></IonDatetimeButton>

            <IonModal keepContentsMounted={true} >
                <IonDatetime showDefaultButtons={true} id="datetime"></IonDatetime>
            </IonModal>
        </div>
    );
}
export default Timepicker;