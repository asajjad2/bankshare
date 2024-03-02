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