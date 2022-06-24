'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Listings', [{
        userId:"1",
        name:"Skyline views in Lower Manhattan",
        about:"Experience the stunning architecture of The Oculus and explore the One World Observatory and 9/11 Memorial Museum. Stay at the heart of the Financial District with unobstructed panoramas of Lower Manhattan from City View rooms.",
        city:"New York",
        state:"NY",
        price:"195", 
        serviceFee:"0", 
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-53843545/original/0d909786-f531-48da-8008-b4ae698c5193.jpeg?im_w=960", 
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-53843545/original/ef3c461f-6e9a-4eec-9d97-58b61867835c.jpeg?im_w=1200", 
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-53843545/original/e182835d-5aad-4849-b508-274670639cda.jpeg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        name:"West Village Loft, 1st floor",
        about:"Private floor of bright loft townhouse with 14ft ceilings in the heart of the West Village of NYC...1 flight walk-up. Bright living space, eat-in kitchen, and sleeping area with queen bed.",
        city:"New York",
        state:"NY",
        price:"176", 
        serviceFee:"25", 
        img1:"https://a0.muscache.com/im/pictures/51044922/585e5735_original.jpg?im_w=1200", 
        img2:"https://a0.muscache.com/im/pictures/51045301/b5ee1387_original.jpg?im_w=1200", 
        img3:"https://a0.muscache.com/im/pictures/51045249/4fc903d8_original.jpg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        name:"Beautiful Penthouse Suite with skyline views",
        about:"Enjoy a stylish experience at this centrally-located place! Penthouse Suite provides amazing skyline views of the Manhattan Bridge. Located in central DUMBO, this spectacular space is a perfect addition to any NYC getaway!",
        city:"Brooklyn",
        state:"New York",
        price:"400", 
        serviceFee:"62", 
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-53751580/original/df43647e-cb71-46c8-87eb-c30e31312b73.jpeg?im_w=1200", 
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-53751580/original/225a1dd6-28c3-4350-9dbd-8cec5ff02bf9.jpeg?im_w=1200", 
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-53751580/original/eaca85b7-2085-4da7-90e4-c7fbebc5f95e.jpeg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        name:"Water View King Bed Hotel Room",
        about:"Relax in out Timeless European Designed Rooms made for the modern-day traveler seeking comfort and style.",
        city:"New York",
        state:"NY",
        price:"254", 
        serviceFee:"36", 
        img1:"https://a0.muscache.com/im/pictures/6998e77e-4564-49e8-b652-61c90e84ee65.jpg?im_w=1200", 
        img2:"https://a0.muscache.com/im/pictures/af9fd04f-de6a-4716-a651-be7e96a3a4de.jpg?im_w=1200", 
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-45882814/original/4e157471-18eb-4b2d-93ec-d8d673078f0f.jpeg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        name:"Charming Studio in a Great location",
        about:"My studio is ideal for its great location: close to Time Square, the High line, Hell's kitchen, Hudson River Bike Trail etc... Two blocks from the Javits Center! It is also safe (24 hour doorman) and very clean! I provide my guests all they need for a pleasant and comfortable stay!",
        city:"New York",
        state:"NY",
        price:"225", 
        serviceFee:"42", 
        img1:"https://a0.muscache.com/im/pictures/0bac0c43-210a-4481-be52-c815454f45e0.jpg?im_w=720", 
        img2:"https://a0.muscache.com/im/pictures/8c7e4c4f-ac85-4c15-8d42-c561e96426ef.jpg?im_w=720", 
        img3:"https://a0.muscache.com/im/pictures/49cbc3f8-7e27-4eb7-adc2-24f944873495.jpg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Listings', null, {});
  }
};
