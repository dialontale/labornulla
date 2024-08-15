// Define the time zone mappings
const timeZoneMappings = {
    'Europe/Podgorica': 'Europe/Belgrade',
    // Add more mappings as needed
};

// Function to get the mapped time zone
function getMappedTimeZone(timeZone) {
    return timeZoneMappings[timeZone] || timeZone; // Return the mapped time zone or the original if no mapping exists
}

// Example usage
let originalTimeZone = 'Europe/Podgorica';
let mappedTimeZone = getMappedTimeZone(originalTimeZone);

console.log(`Original Time Zone: ${originalTimeZone}`); // Output: Original Time Zone: Europe/Podgorica
console.log(`Mapped Time Zone: ${mappedTimeZone}`);     // Output: Mapped Time Zone: Europe/Belgrade
