
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()
    
      // Inserts seed entries
      await knex('cars').insert([
        {vin: "3490JFEROID", make: "Ford", model: "Explorer", mileage: 11453.80, automatic_transmission: true, title: "clean"},
        {vin: 'ANEF34OI5F4O', make: "Handi", model: "Celontra", mileage: 29847.38, automatic_transmission: true, title: "clean"},
        {vin: "KKEF0409FOJF034", make: "Jeep", model: "Chereke", mileage: 8347},
        {vin: "39LFMKERO09VC", make: "Ford", model: "Focus", mileage: 209043, automatic_transmission: true, title: 'clean'},
        {vin: "SMKE52RO09V2C", make: "Jeep", model: "Wrangler", mileage: 109598, automatic_transmission: true, title: 'clean'},
        {vin: "3RU9F9FIOERFKM", make: "Ford", model: "Bronco", mileage: 85130, automatic_transmission: true, title: 'clean'},
        {vin: "9LCKLAIJFEJF09", make: "Ford", model: "Mustang", mileage: 28347, automatic_transmission: true, title: 'clean'},      ])
   
};
