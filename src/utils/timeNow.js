export const timeNow = (time) => {

    const date = new Date(time * 1000); // Convert to milliseconds by multiplying by 1000

    // Extract the day of the week, hours, and minutes
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[date.getDay()]; // Get day name from the days array

    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format the time into a 12-hour format
    let formattedHours = hours % 12; // Convert to 12-hour format
    formattedHours = formattedHours === 0 ? 12 : formattedHours; // Handle midnight (0 hours)

    // Add leading zeros to minutes if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Determine if it's AM or PM
    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    // Create the final formatted date and time string
    const formattedTime = `${dayName}, ${formattedHours}:${formattedMinutes} ${amOrPm}`;


    return formattedTime // Output: '6:10 PM'
}

