import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice from './slices/isLoading.slice'
import  productsAllSlice  from './slices/productsAll.slice'



export default configureStore({
    reducer: {
            isLoading: isLoadingSlice,
            productsAll: productsAllSlice
    }
})
