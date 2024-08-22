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
      day: "",
      exercise: "",
    },
    descriptionTipSeis: "",
    tipTen: {
      situation: "",
      howact: "",
      change: "",
    },
    newActivities: [],
    supportNet: [],
    myGoals: [],
    user: null,
    howDoIFeel: [],
  },
  reducers: {
    setFortalezas: (state, action) => {
      state.fortalezas.push(action.payload);
    },
    deleteFortalezas: (state, action) => {
      state.fortalezas.splice(action.payload, 1);
    },
    setDebilidades: (state, action) => {
      state.debilidades.push(action.payload);
    },
    deleteDebilidades: (state, action) => {
      state.debilidades.splice(action.payload, 1);
    },
    setForgivenessLetter: (state, action) => {
      state.forgivenessLetter= [action.payload];
    },
    setRewards_behavior: (state, action) => {
      const newReward = {
        behavior: action.payload.behavior,
        rewards: action.payload.rewards,
      };
      state.rewards_behavior.push(newReward);
    },
    setDescription: (state, action) => {
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
        day: "",
        exercise: "",
      };
    },
    //reducer y acciones de tip seis:
    setDescriptionSeis: (state, action) => {
      state.descriptionTipSeis = action.payload;
    },
    clearDescriptionSeis: (state) => {
      state.descriptionTipSeis = "";
    },
    //reducer y acciones de tip diez:
    setTipTenSituation: (state, action) => {
      state.tipTen.situation = action.payload;
    },
    setTipTenHowAct: (state, action) => {
      state.tipTen.howact = action.payload;
    },
    setTipTenChange: (state, action) => {
      state.tipTen.change = action.payload;
    },
    clearTipTen: (state) => {
      state.tipTen = {
        situation: "",
        howact: "",
        change: "",
      };
    },
    setNewActivities: (state, action) => {
      state.newActivities = action.payload;
    },
    setSupportNet: (state, action) => {
      state.supportNet = action.payload;
    },
    setMyGoals: (state, action) => {
      state.myGoals.push(action.payload);
    },
    deleteMyGoals: (state, action) => {
      state.myGoals.splice(action.payload, 1);
    },
    setNewUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setHowDoIFeel: (state, action) => {
      state.howDoIFeel=[action.payload];
    },
  },
});

export const {setFortalezas, deleteFortalezas, setDebilidades, deleteDebilidades, setForgivenessLetter, setRewards_behavior,setDescription,clearDescription, setNewActivities, setSupportNet, setMyGoals, deleteMyGoals, setTipFiveDay, setTipFiveExercise, clearTipFive, setDescriptionSeis, clearDescriptionSeis,setTipTenSituation,setTipTenHowAct,setTipTenChange,clearTipTen, setNewUser, clearUser, setHowDoIFeel  } = tipSlice.actions;
export default tipSlice.reducer;
