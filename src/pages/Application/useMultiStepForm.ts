import { ReactElement, useState } from "react";

export function useMultiStepForm(steps:ReactElement[]){

    const [currentStepIndex,setCurrentStepInex] = useState(0);
    
    function next(){
        setCurrentStepInex(i =>{
            if(i>=steps.length-1) return i
            return i+1
        })
    }
    function back(){
        setCurrentStepInex(i =>{
            if(i<=0) return i
            return i-1
        })
        
    }
    function goTO(index:number){
       setCurrentStepInex(index) 
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        goTO,next,back,
        isFirstStep:currentStepIndex === 0,
        isLastStep : currentStepIndex === steps.length - 1
}   
    }