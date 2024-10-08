import { createSlice } from "@reduxjs/toolkit";

const tipSlice = createSlice({
  name: "tip",
  initialState: {
    fortalezas: [],
    debilidades: [],
    cartaPerdon: [],
    recompensa_comportamiento: [],
    description: "",
    tipFive: {
      dia: [],
      ejercicio: [],
    },
    descripcion: "",
    tipTen: {
      situacion: [],
      como_actuo: [],
      cambio: [],
    },
    nuevasActividades: "",
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
        comportamiento: action.payload.comportamiento,
        recompensa: action.payload.recompensa,
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
      state.tipFive.dia.push(action.payload);
    },
    deleteTipFiveDay: (state, action) => {
      state.tipFive.dia.splice(action.payload, 1);
    },
    setTipFiveExercise: (state, action) => {
      state.tipFive.ejercicio.push(action.payload);
    },
    deleteTipFiveExercise: (state, action) => {
      state.tipFive.ejercicio.splice(action.payload, 1);
    },
    clearTipFive: (state) => {
      state.tipFive = {
        dia: [],
        ejercicio: [],
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
      state.tipTen.situacion.push(action.payload);
    },
    removeSituation: (state, action) => {
      state.tipTen.situacion.splice(action.payload, 1);
    },
    setTipTenHowAct: (state, action) => {
      state.tipTen.como_actuo.push(action.payload);
    },
     removeHowAct: (state, action) => {
      state.tipTen.como_actuo.splice(action.payload, 1);
    },
    setTipTenChange: (state, action) => {
      state.tipTen.cambio.push(action.payload);
    },
    removeChange: (state, action) => {
      state.tipTen.cambio.splice(action.payload, 1);
    },
    clearTipTen: (state) => {
      state.tipTen = {
        situacion: [],
        como_actuo: [],
        cambio: [],
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
      state.fortalezas=[];
      state.debilidades= [];
      state.cartaPerdon= [];
      state.recompensa_comportamiento= [];
      state.descripcion= "";
      state.tipFive= {
      dia:[],
      ejercicio:[],
      };
      state.tipTen= {
      situacion: [],
      como_actuo: [],
      cambio: [],
      };
      state.nuevasActividades= [];
      state.redApoyo= [];
      state.mis_Metas= [];
      state.howDoIFeel= [];

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

export const {setFortalezas, deleteFortalezas, setDebilidades, deleteDebilidades, setForgivenessLetter, setRewards_behavior,setDescription,clearDescription, setNewActivities, setSupportNet, setMyGoals, deleteMyGoals, setTipFiveDay,deleteTipFiveDay, setTipFiveExercise,deleteTipFiveExercise, clearTipFive, setDescriptionSeis, clearDescriptionSeis,setTipTenSituation,removeSituation,setTipTenHowAct,removeHowAct,setTipTenChange,removeChange,clearTipTen, setNewUser, clearUser, setHowDoIFeel,updateUserData,  } = tipSlice.actions;
export default tipSlice.reducer;
