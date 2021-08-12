import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Summary from './Summary';
import Thanks from './Thanks';

const Form = () => {
    const [step, setStep] = useState(1);
    const [giftChoiceState, setGiftChoiceState] = useState("")
    const [bagsState, setBagsState] = useState("");
    const [localizationState, setLocalizationState] = useState("");
    const [toWhoState, setToWhoState] = useState("");
    const [organizationState, setOrganizationState] = useState("");
    const [streetState, setStreetState] = useState("");
    const [cityState, setCityState] = useState("");
    const [postCodeState, setPostCodeState] = useState("");
    const [phoneState, setPhoneState] = useState("");
    const [dateState, setDateState] = useState("");
    const [hourState, setHourState] = useState("");
    const [remarksState, setRemarksState] = useState("");

    const updateStep = (dataFromChild) => setStep(dataFromChild);
    const updateGiftState = (giftState) => setGiftChoiceState(giftState);
    const updateBagsState = (bagsState) => setBagsState(bagsState);
    const updateLocalizationState = (localizationState) => setLocalizationState(localizationState);
    const updateToWhoState = (toWhoState) => setToWhoState(toWhoState);
    const updateOrganizationState = (organizationState) => setOrganizationState(organizationState);
    const updateStreetState = (streetState) => setStreetState(streetState);
    const updateCityState = (cityState) => setCityState(cityState);
    const updatePostCodeState = (postCodeState) => setPostCodeState(postCodeState);
    const updatePhoneState = (phoneState) => setPhoneState(phoneState);
    const updateDateState = (dateState) => setDateState(dateState);
    const updateHourState = (hourState) => setHourState(hourState);
    const updateRemarksState = (remarksState) => setRemarksState(remarksState);

    let stepToRender;
    if (step === 1) {
        stepToRender = <Step1 update={updateStep} 
                            updateGiftState={updateGiftState}
                            giftChoiceState={giftChoiceState}
                            />};
    if (step === 2) {
        stepToRender = <Step2 update={updateStep} 
                            updateBagsState={updateBagsState}
                            bagsState={bagsState}
                            />};
    if (step === 3) {
        stepToRender = <Step3 update={updateStep} 
                            updateLocalizationState={updateLocalizationState}
                            updateToWhoState={updateToWhoState}
                            updateOrganizationState={updateOrganizationState}
                            localizationState={localizationState}
                            />};
    if (step === 4) {
        stepToRender = <Step4 update={updateStep}
                            updateStreetState={updateStreetState}
                            updateCityState={updateCityState}
                            updatePostCodeState={updatePostCodeState}
                            updatePhoneState={updatePhoneState}
                            updateDateState={updateDateState}
                            updateHourState={updateHourState}
                            updateRemarksState={updateRemarksState}
                            />};
    if (step === 5) {
        stepToRender = <Summary update={updateStep} 
                            giftChoiceState={giftChoiceState}
                            bagsState={bagsState}
                            localizationState={localizationState}
                            toWhoState={toWhoState}
                            organizationState={organizationState}
                            streetState={streetState}
                            cityState={cityState}
                            postCodeState={postCodeState}
                            phoneState={phoneState}
                            dateState={dateState}
                            hourState={hourState}
                            remarksState={remarksState}
                            />};
    if (step === 6) {
        stepToRender = <Thanks/>};


    return (
        <>
            {stepToRender}
        </>
    )
};

export default Form;