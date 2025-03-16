function convertDistance(value: number, type: "cmToKm" | "kmToCm"): string {
    if (type === "cmToKm") {
        return `${value / 100000} km`;
    } else if (type === "kmToCm") {
        return `${value * 100000} cm`;
    }
    return "Invalid type!";
}

console.log(convertDistance(100000, "cmToKm")); // Output: 1 km
