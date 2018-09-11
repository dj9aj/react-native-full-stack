export const getAge = dateString => {
   const reverseDate = dateString.split('-').reverse().join(); // Reverse date from original format so that it can be converted to Date value
   const today = new Date(); // Get todays date
   const birthDate = new Date(reverseDate);
   let age = today.getFullYear() - birthDate.getFullYear(); // Subtract bday date away from todays date
   const m = today.getMonth() - birthDate.getMonth(); // Subtract bday month from current month
   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { // If difference is negative, or difference equals zero and today's day of month is before the bday's day of month, then take one year off age
      age--;
   }
   return age;
}

export const daysInMonth = date => {
   // Find out length between start and end of current month. Will factor in leap year too
   let monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
   let monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
   let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
   return monthLength;
}

export const timeToBday = string => {
   
   const reverseDate = string.split('-').reverse().join(); // Reverse date from original format so that it can be converted to Date value
   const formatDate = reverseDate.replace(/,/g, "-"); // replace '-' with ',' so that string can be parsed to Date value
   const bday = new Date(formatDate); // Create Date value from string
   const today = new Date(); // Get todays date
   const currentYear = today.getFullYear(); // Get current year
   //convert to UTC
   const nextBday_UTC = new Date(Date.UTC(today.getUTCFullYear(), bday.getUTCMonth(), bday.getUTCDate())); // Get next bday date in correct format
   const today_UTC = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())); // Get todays date in correct format
   
   let yAppendix, mAppendix, dAppendix;
   
   let days = nextBday_UTC.getDate() - today_UTC.getDate(); // Calculate days between today and bday
      if (days < 0) { 
         nextBday_UTC.setMonth(nextBday_UTC.getMonth() - 1);
         days += daysInMonth(nextBday_UTC);
      }

   let months = nextBday_UTC.getMonth() - today_UTC.getMonth();
   if (months < 0) {
      nextBday_UTC.setFullYear(nextBday_UTC.getFullYear() - 1);
      months += 12;
   }

   let years = nextBday_UTC.getFullYear() - today_UTC.getFullYear();

   if (years > 1) {
      yAppendix = " years";
   } else {
      yAppendix = " year";
   }
   if (months > 1) {
      mAppendix = " months";
   } 
   else {
      mAppendix = " month";
   } 
   if (days > 1) {
      dAppendix = " days";
   }
   else {
      dAppendix = " day";
   } 
   days += 1;
   if (days === 2) {
      dAppendix = " days";
   }

   if (months === 0) {
      return `${days}${dAppendix} until next birthday`;
   } else {
      return `${months}${mAppendix} and ${parseInt(days), 10}${dAppendix} until next birthday`;
   }
}

export const formatName = str => {
   const words = []; // Create new array for modified string

   for (let word of str.split(' ')) { // Loop over array from shallow copy by splitting input string by spaces (into words)
      words.push(word[0].toUpperCase() + word.slice(1)); // Uppercase first index and then join with rest of word from index 1 and push into new array
   }
   
   return words.join(' '); // Convert array to string and return result
}