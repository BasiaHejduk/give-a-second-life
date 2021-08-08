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
    const updateStep = (dataFromChild) => setStep(dataFromChild);
    const updateGiftState = (giftState) => setGiftChoiceState(giftState);
    const updateBagsState = (bagsState) => setBagsState(bagsState);

    let stepToRender;
    if (step === 1) {stepToRender = <Step1 update={updateStep} updateGiftState={updateGiftState}/>};
    if (step === 2) {stepToRender = <Step2 update={updateStep} updateBagsState={updateBagsState}/>};
    if (step === 3) {stepToRender = <Step3 update={updateStep}/>};
    if (step === 4) {stepToRender = <Step4 update={updateStep}/>};
    if (step === 5) {stepToRender = <Summary 
                                        update={updateStep} 
                                        giftChoiceState={giftChoiceState}
                                        bagsState={bagsState}
                                        />};
    if (step === 6) {stepToRender = <Thanks/>};


    return (
        <>
            {stepToRender}
        </>
    )
};

export default Form;