import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tipReducer from "../features/counter/Slice.js";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',          // Llave raíz para la persistencia
  storage: AsyncStorage, // Uso de AsyncStorage para persistencia en dispositivos móviles
};


const rootReducer = combineReducers({
  tip: tipReducer,
});

// Reducer persistente
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuración del store con el reducer persistido
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});
// Persistir el store
const persistor = persistStore(store);

export {store, persistor} ;
