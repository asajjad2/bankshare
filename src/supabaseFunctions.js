// Import the initialized Supabase client
import { supabase } from './supabase'

export const insertQRCode = async (userData) => {
  try {
    const { data, error } = await supabase
      .rpc('create_qr_code', userData)

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error calling insert_qr_code:', error)
    return { error }
  }
}
