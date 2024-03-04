import QRCode from 'qrcode';

export const formatSupabaseDate = (dateString) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Function to format the day with ordinal suffix
    function getOrdinal(n) {
        let s=["th","st","nd","rd"],
        v=n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
    }

    return `${getOrdinal(day)} ${monthNames[monthIndex]}, ${year}`;
}

export const generateQRCodeBlob = async (id) => {
    console.log(id)
    const url = `https://bankshare.vercel.app/qr/${id}`;

    try {
      const dataUrl = await QRCode.toDataURL(url, { width: 300, margin: 2 });
      return dataUrl;
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  }