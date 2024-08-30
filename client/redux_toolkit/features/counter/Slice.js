import { createSlice } from "@reduxjs/toolkit";

const tipSlice = createSlice({
  name: "tip",
  initialState: {
    fortalezas: [],
    debilidades: [],
    cartaPerdon: [],
    recompensa_comportamiento: [],
    description: "",
    forgivenessLetter: [],
    rewards_behavior: [],
    descripcion: "",
    tipFive: {
      dia:"",
      ejercicio:"",
    },
    descripcion: "",
    tipTen: {
      situacion: "",
      como_actuo: "",
      cambio: "",
    },
    nuevasActividades: [],
    redApoyo: [],
    mis_Metas: [],
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
      state.cartaPerdon = [action.payload];
    },
    setRewards_behavior: (state, action) => {
      const newReward = {
        behavior: action.payload.behavior,
        rewards: action.payload.rewards,
      };
      state.recompensa_comportamiento.push(newReward);
    },
    setDescription: (state, action) => {
      state.descripcion = action.payload;
    },
    clearDescription: (state) => {
      state.descripcion = "";
    },
    //reducer y acciones de tip cinco:
    setTipFiveDay: (state, action) => {
      state.tipFive.dia = action.payload;
    },
    setdeleteTipFiveDay: (state, action) => {
      state.dia.splice(action.payload, 1);
    },
    setTipFiveExercise: (state, action) => {
      state.tipFive.ejercicio = action.payload;
    },
    setdeleteTipFiveExercise: (state, action) => {
      state.ejercicio.splice(action.payload, 1);
    },
    clearTipFive: (state) => {
      state.tipFive = {
        dia: "",
        ejercicio: "",
      };
    },
    //reducer y acciones de tip seis:
    setDescriptionSeis: (state, action) => {
      state.descripcion = action.payload;
    },
    clearDescriptionSeis: (state) => {
      state.descripcion = "";
    },
    //reducer y acciones de tip diez:
    setTipTenSituation: (state, action) => {
      state.tipTen.situacion = action.payload;
    },
    setTipTenHowAct: (state, action) => {
      state.tipTen.como_actuo = action.payload;
    },
    setTipTenChange: (state, action) => {
      state.tipTen.cambio = action.payload;
    },
    clearTipTen: (state) => {
      state.tipTen = {
        situacion: "",
        como_actuo: "",
        cambio: "",
      };
    },
    setNewActivities: (state, action) => {
      state.nuevasActividades = action.payload;
    },
    setSupportNet: (state, action) => {
      state.redApoyo = action.payload;
    },
    setMyGoals: (state, action) => {
      state.mis_Metas.push(action.payload);
    },
    deleteMyGoals: (state, action) => {
      state.mis_Metas.splice(action.payload, 1);
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
     
    updateUserData: (state, action) => {
      if (state.user) {
        state.user = {
          ...state.user,  // Mantenemos los datos anteriores del usuario
          ...action.payload,  // Sobrescribimos los datos actualizados
        };
      }
    },
  
  },
 
});

export const {setFortalezas, deleteFortalezas, setDebilidades, deleteDebilidades, setForgivenessLetter, setRewards_behavior,setDescription,clearDescription, setNewActivities, setSupportNet, setMyGoals, deleteMyGoals, setTipFiveDay,setdeleteTipFiveDay, setTipFiveExercise,setdeleteTipFiveExercise, clearTipFive, setDescriptionSeis, clearDescriptionSeis,setTipTenSituation,setTipTenHowAct,setTipTenChange,clearTipTen, setNewUser, clearUser, setHowDoIFeel,updateUserData,  } = tipSlice.actions;
export default tipSlice.reducer;
