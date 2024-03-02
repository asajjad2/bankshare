import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://skzyrhrxcnpesbirljqp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrenlyaHJ4Y25wZXNiaXJsanFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3Nzk0MzYsImV4cCI6MjAyNDM1NTQzNn0.QYRcxhAqRLipRe1iN73QnVA0SG_ie55msrkjmiKD8_Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const insertQRCode = async (userData) => {
    // setLoading(true)
    // setError(null)

    let { error } = await supabase
      .rpc('insert_qr_code', userData) // Assuming 'insert_qr_code' is your stored procedure name
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        // Handle error
        console.error(err)
        // setError(err)
      })
      .finally(() => {
        // setLoading(false)
      })

    if (error) {
      console.error('Error calling insert_qr_code:', error)
    }
}

export { insertQRCode }