// The car service station caters to different types of cars – Hatchback, Sedan, SUV.
// It provides different types of services like Basic Service, Engine Fixing, Clutch Fixing, Gear Fixing and Brake Fixing.
// Each service has a service code associated with it and different prices for different types of cars.
// Service Code Service Hatchback Sedan SUV
// BS01 Basic Servicing ₹ 2000 ₹ 4000 ₹ 5000
// EF01 Engine Fixing ₹ 5000 ₹ 8000 ₹ 10000
// CF01 Clutch Fixing ₹ 2000 ₹ 4000 ₹ 6000
// BF01 Brake Fixing ₹ 1000 ₹ 1500 ₹ 2500
// GF01 Gear Fixing ₹ 3000 ₹ 6000 


// Example:
// Type of Car – Hatchback
// Service Codes – BS01, EF01
// Charges for Basic Servicing – ₹ 2000
// Charges for Engine Fixing – ₹ 5000
// Total Bill – ₹ 7000
// In addition, if the total service bill is more than ₹ 10000, a complimentary cleaning should be provided and specified
// in the bill.

// here the solution -> 

class CarService {
  constructor() {
    this.prices = {
      BS01: { Hatchback: 2000, Sedan: 4000, SUV: 5000 },
      EF01: { Hatchback: 5000, Sedan: 8000, SUV: 10000 },
      CF01: { Hatchback: 2000, Sedan: 4000, SUV: 6000 },
      BF01: { Hatchback: 1000, Sedan: 1500, SUV: 2500 },
      GF01: { Hatchback: 3000, Sedan: 6000, SUV: 8000 }
    };
  }

  getServicePrice(serviceCode, carType) {
    return this.prices[serviceCode][carType];
  }

  generateBill(carType, serviceCodes) {
    let totalBill = 0;
    let services = {};

    for (let i = 0; i < serviceCodes.length; i++) {
      let serviceCode = serviceCodes[i];
      let servicePrice = this.getServicePrice(serviceCode, carType);
      totalBill += servicePrice;
      services[serviceCode] = servicePrice;
    }

    if (totalBill > 10000) {
      services["Cleaning"] = 0; // Complimentary cleaning
    }

    console.log("Type of Car -", carType);
    console.log("Service Codes -", serviceCodes.join(", "));
    for (let serviceCode in services) {
      console.log(
        "Charges for",
        serviceCode,
        "- ₹",
        services[serviceCode]
      );
    }
    console.log("Total Bill - ₹", totalBill);
  }
}

//1. Example usage
const carService = new CarService();
carService.generateBill("Sedan", ["BS01", "GF01"]);


// output-> Type of Car - Sedan
// Service Codes - BS01, GF01
// Charges for BS01 - ₹ 4000
// Charges for GF01 - ₹ 6000
// Charges for Cleaning - ₹ 0
// Total Bill - ₹ 10000


// 2. Example usage
// carService.generateBill("SUV", ["CF01", "GF01"]); 
// output -> Type of Car - SUV
// Service Codes - CF01, GF01
// Charges for CF01 - ₹ 6000
// Charges for GF01 - ₹ 8000
// Charges for Cleaning - ₹ 0
// Total Bill - ₹ 14000

