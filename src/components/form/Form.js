import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Summary from './Summary';
import Thanks from './Thanks';

const Form = () => {
    const [step, setStep] = useState(6);

    let stepToRender;
    if (step === 1) {stepToRender = <Step1/>};
    if (step === 2) {stepToRender = <Step2/>};
    if (step === 3) {stepToRender = <Step3/>};
    if (step === 4) {stepToRender = <Step4/>};
    if (step === 5) {stepToRender = <Summary/>};
    if (step === 6) {stepToRender = <Thanks/>};


    return (
        <>
            {stepToRender}
        </>
    )
};

export default Form;