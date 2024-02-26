export function getGreetingBasedOnTime(): string {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)
  
    if (currentHour < 12) {
      return "Good morning";
    } else {
      return "Good evening";
    }
  }
  

  export function timeSince(timestamp: string) {
    const now = Date.now(); // Current time in milliseconds
    const createdAt = parseInt(timestamp, 10); // Ensure timestamp is an integer
    const milliseconds = now - createdAt;
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.345); // Average month length in weeks
    const years = Math.floor(months / 12);
  
    if (seconds < 60) {
      return "just now";
    } else if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (days < 7) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (weeks < 4.345) {
      // Approximation for a month
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (months < 12) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  }
  
  export function formatDate(timestamp: string) {
    const date = new Date(parseInt(timestamp, 10));
  
    // Array of  months
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    // Get date, month, and year from the date object
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    // Format the string
    return `${month} ${dayOfMonth}, ${year}`;
  }
  