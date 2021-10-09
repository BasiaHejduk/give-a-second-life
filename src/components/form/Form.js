import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Summary from './Summary';
import Thanks from './Thanks';

export const FormContext = React.createContext();

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

    if (step === 1) {stepToRender = <Step1/>};
    if (step === 2) {stepToRender = <Step2/>};
    if (step === 3) {stepToRender = <Step3/>};
    if (step === 4) {stepToRender = <Step4/>};
    if (step === 5) {stepToRender = <Summary/>};
    if (step === 6) {stepToRender = <Thanks/>};

    return (
        <>
            <FormContext.Provider value={{
                    step,
                    giftChoiceState,
                    bagsState,
                    localizationState,
                    toWhoState,
                    organizationState,
                    streetState,
                    cityState,
                    postCodeState,
                    phoneState,
                    dateState,
                    hourState,
                    remarksState,
                    updateStep,
                    updateGiftState,
                    updateBagsState,
                    updateLocalizationState,
                    updateToWhoState,
                    updateOrganizationState,
                    updateStreetState,
                    updateCityState,
                    updatePostCodeState,
                    updatePhoneState,
                    updateDateState,
                    updateHourState,
                    updateRemarksState
            }}>
                {stepToRender}
            </FormContext.Provider>
        </>
    )
};

export default Form;