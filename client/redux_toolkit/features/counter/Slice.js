import { createSlice } from "@reduxjs/toolkit";

const tipSlice = createSlice({
  name: "tip",
  initialState: {
    fortalezas: [],
    debilidades: [],
    forgivenessLetter: [],
    rewards_behavior: [],
    description: "",
    tipFive: {
      day:'',
      exercise:''
    },
    descriptionTipSeis: "",
  },
  reducers: {
    setFortalezas: (state, action)=> {
      state.fortalezas.push(action.payload);
      console.log(state.fortalezas)
    }, 
    deleteFortalezas:(state, action)=>{
      state.fortalezas.splice(action.payload, 1)
    },
    setDebilidades: (state, action)=>{
      state.debilidades.push(action.payload)
    },
    deleteDebilidades:(state, action)=>{
      state.debilidades.splice(action.payload, 1)
    },
    setForgivenessLetter: (state, action)=>{
      state.forgivenessLetter.push(action.payload)
      console.log(state.forgivenessLetter);
    },
    setRewards_behavior: (state, action) =>{
      const newReward= {
        behavior: action.payload.behavior,
        rewards: action.payload.rewards,
      };
      state.rewards_behavior.push(newReward);
      console.log(state.rewards_behavior);      
    },
    setDescription: (state,action) => {
      state.description = action.payload;
    },
    clearDescription: (state) => {
      state.description = "";
    },
    //reducer y acciones de tip cinco:
    setTipFiveDay: (state, action) => {
      state.tipFive.day = action.payload;
    },
    setTipFiveExercise: (state, action) => {
      state.tipFive.exercise = action.payload;
    },
    clearTipFive: (state) => {
      state.tipFive = {
        day:'',
        exercise:''
      };
    },
    //reducer y acciones de tip seis:
    setDescriptionSeis: (state,action) => {
      state.descriptionTipSeis = action.payload;
    },
    clearDescriptionSeis: (state) => {
      state.descriptionTipSeis = "";
    },
  },
})

export const {setFortalezas, deleteFortalezas, setDebilidades, deleteDebilidades, setForgivenessLetter, setRewards_behavior,setDescription,clearDescription, setTipFiveDay, setTipFiveExercise, clearTipFive, setDescriptionSeis, clearDescriptionSeis } = tipSlice.actions;
export default tipSlice.reducer;
