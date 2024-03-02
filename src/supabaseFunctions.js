import { supabase } from './supabase'

export const insertQRCode = async (userData) => {
  try {
    const { data, error } = await supabase
      .rpc('insert_qr_code', userData)

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error calling insert_qr_code:', error)
    return { error }
  }
}

export const fetchQRCodeDetails = async (qrCodeId) => {

  try {
      const { data, error, status } = await supabase
          .rpc('get_qr_code_details', { qr_code_id: qrCodeId })

      if (error && status !== 406) {
          throw error
      }

      if (data) {
          return data;
      }
  } catch (error) {
      console.error('Error fetching QR code details:', error.message)
      return null;
  }
}

