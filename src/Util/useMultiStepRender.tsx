import { ReactElement, useState } from "react";

export function useMultiStepRender(steps:ReactElement[]){

    const [currentStepIndex,setCurrentStepIndex] = useState(0);
    
    function next(){
        setCurrentStepIndex(i =>{
            if(i>=steps.length-1) return i
            return i+1
        })
    }
    function back(){
        setCurrentStepIndex(i =>{
            if(i<=0) return i
            return i-1
        })
        
    }
    function goTo(index:number){
        //localStorage.setItem("NAV_INDEX_SDM_APP",index.toString())
        //var localStoreIndex =localStorage.getItem("NAV_INDEX_SDM_APP")
       setCurrentStepIndex(index) 
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        goTo,next,back,
        isFirstStep:currentStepIndex === 0,
        isLastStep : currentStepIndex === steps.length - 1
}   
    }