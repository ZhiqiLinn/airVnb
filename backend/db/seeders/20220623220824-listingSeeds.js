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
      { 
        userId:"1", 
        name:"Clean, Comfy and Central Midtown Haven!", 
        about:"Newly redecorated! This sleek and modern unit is in the heart of Midtown Manhattan: a short walk to Times Square, Rockefeller Center, Fifth Avenue shopping, and Grand Central Station. Loads of restaurants and public transportation options nearby!", 
        city:"New York", 
        state:"NY", 
        price:"285",  
        serviceFee:"25",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-21851228/original/376951cd-493f-4ecb-a81e-750fb6af13fd.jpeg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-21851228/original/304e6d81-991c-4743-ba8e-f6fdabe5805b.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-21851228/original/a03a6607-e9af-47c6-8eb4-dfb2c2a153db.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        userId:"1", 
        name:"Beautiful Studio with Patio in Midtown NYC! #2202", 
        about:"Beautifully Brownstone designed Studio apartment features 1 Queen-size bed and a pullout sofa bed located right off Grand Central Metro Station. Walking distance to Times Square, Steps from Central Park & the Metropolitan Museum of Art. surrounded by cool bars, restaurants and coffee places. Located next to the United Nations, therefore, one of the safest neighborhoods in NYC. The apartment is well designed and features anything you need for your trip, linens, towels, pots, pans, fridge, etc.", 
        city:"New York", 
        state:"NY", 
        price:"180",  
        serviceFee:"50",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-624694699394680598/original/8ef6c66e-e982-42ea-8856-7cc22e3fb552.png?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-624694699394680598/original/7962a3fd-b82b-4e9f-9bd1-404ea6b11524.png?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-624694699394680598/original/ba6d1ce4-0e09-4c75-b955-b2f3ab15f84d.png?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        userId:"1", 
        name:"Freeman - Queen Studio 615", 
        about:"Welcome to UNTITLED (Adj.) at 3 Freeman Alley! Charming Studio in the heart of Lower East Side of Manhattan. Building entrance located off iconic Freeman Alley displaying ever changing street art from artists from all around the world.This location is the best place to relax and unwind after exploring and venturing out in the city.", 
        city:"New York", 
        state:"NY", 
        price:"190",  
        serviceFee:"0",  
        img1:"https://a0.muscache.com/im/pictures/8709b2b6-0951-4c84-b318-67741047b730.jpg?im_w=1200",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-52166065/original/018f514b-e0ad-4491-bb59-a5e0db694efe.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/4dc70f8e-8293-4e20-b799-819952294bfe.jpg?im_w=960",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        userId:"1", 
        name:"Steps away from Central Park/Hell's Kitchen", 
        about:"Millennium Times Square New York is located in the heart of Times Square, surrounded by Broadway theaters and steps from Fifth Avenue shopping. Our oversized rooms provide modern amenities and many offer skyline Times Square views.", 
        city:"New York", 
        state:"NY", 
        price:"278",  
        serviceFee:"0",  
        img1:"https://a0.muscache.com/im/pictures/aafd6d9b-60a0-41a6-b1df-c3e1910fc38e.jpg?im_w=1200",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-51866988/original/139fd1e4-48b1-4f29-b971-557ce9acad0c.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/3f623739-d342-4e91-a110-360db1081f66.jpg?im_w=960",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
          userId:"1", 
          name:"New Your Brooklyn", 
          about:"Decor and location. Just block away from subway station. Central heating (winter time only). No loud music or party.", 
          city:"Brooklyn", 
          state:"NY", 
          price:"200",  
          serviceFee:"28",  
          img1:"https://a0.muscache.com/im/pictures/f81e9dcc-d466-48ca-9ddf-0900769ca2e0.jpg?im_w=1200",  
          img2:"https://a0.muscache.com/im/pictures/9d1c7daa-cec4-4827-bcf6-fd7930fc7e9d.jpg?im_w=1200",
          img3:"https://a0.muscache.com/im/pictures/b62981db-2c1e-4a3b-ad95-6c8a29421493.jpg?im_w=1200",
          createdAt: new Date(), 
          updatedAt: new Date() 
      },{ 
          userId:"1", 
          name:"Boutique and Trendy Chelsea Hotel", 
          about:"Relax in one of our well thought out modern and comfortable rooms located in the hub of New York within walking distance to Time Square and other city attractions.", 
          city:"New York", 
          state:"NY", 
          price:"196",  
          serviceFee:"30",  
          img1:"https://a0.muscache.com/im/pictures/5f3de6cb-c249-4a75-8527-48d9a457160b.jpg?im_w=720",  
          img2:"https://a0.muscache.com/im/pictures/miso/Hosting-52075219/original/40c2d3c2-58c0-478c-9126-6d06f36b73fc.jpeg?im_w=1200",
          img3:"https://a0.muscache.com/im/pictures/2e81e634-7343-40b1-abe8-f354180a60d0.jpg?im_w=1200",
          createdAt: new Date(), 
          updatedAt: new Date() 
      },{ 
          userId:"1", 
          name:"Premium Queen B - Yotel Times Square", 
          about:"Authentic, creative and smartly designed rooms feature our signature SmartBed™, which fully adjusts at the touch of a button. Every detail has been carefully considered, from the adjustable mood lighting and refreshing rain shower, to device casting onto our TVs, work station and USB points. Room essentials also include a laptop sized safe and hair dryer. Guests must be a minimum age of 21 years in order to make a reservation, and must occupy the unit for the duration of the stay. You will be asked to provide photo identification upon check-in. Any reservation made under false pretenses will forfeit all payments, and guests will be escorted from the property.", 
          city:"New York", 
          state:"NY", 
          price:"185",  
          serviceFee:"0",  
          img1:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-50634158/original/aac9f81d-acc0-464a-9e6d-edc5578e387d.jpeg?im_w=960",  
          img2:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-50634158/original/a299a052-aacd-4f6f-9e59-843873868d4d.jpeg?im_w=1200",
          img3:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-50634158/original/5ebae525-ba83-42b4-bb7c-f65c4cd705a6.jpeg?im_w=1200",
          createdAt: new Date(), 
          updatedAt: new Date() 
      },{ 
          userId:"1", 
          name:"Lovely one bedroom unit in New York near Wall St", 
          about:"Keep it simple at this peaceful and centrally-located place.", 
          city:"New York", 
          state:"NY", 
          price:"336",  
          serviceFee:"47",  
          img1:"https://a0.muscache.com/im/pictures/miso/Hosting-653420986663554669/original/45f4268f-5f44-4250-b791-77ee1aaa8a5f.jpeg?im_w=960",  
          img2:"https://a0.muscache.com/im/pictures/miso/Hosting-653420986663554669/original/1a9274b6-602a-4c72-a22d-980c403f4c66.jpeg?im_w=1200",
          img3:"https://a0.muscache.com/im/pictures/miso/Hosting-653420986663554669/original/000e823f-8667-45c4-bce1-af62cf354a11.jpeg?im_w=1200",
          createdAt: new Date(), 
          updatedAt: new Date() 
      },{ 
        userId:"2", 
        name:"Private, Spacious, Bright & Modern Home near DTLA", 
        about:"Enjoy this private, newly renovated, and light filled home. Located in a safe and quiet neighborhood, this spacious home is perfect for a large group. There are 2 bright and comfortable bedrooms, each furnished with a queen size bed.", 
        city:"Los Angeles", 
        state:"CA", 
        price:"358",  
        serviceFee:"110",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-11592222/original/3bcc0aaf-53ea-46b0-a5db-c2c8fa515f42.jpeg?im_w=1440",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-11592222/original/443de8b1-9271-4e33-93af-2388e8e6588a.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-11592222/original/02a1bf67-3f0f-41cd-a33d-985529ff37c7.jpeg?im_w=1440",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },{ 
        userId:"2", 
        name:"old-Diggers Hotel", 
        about:"A rare compilation -- equal parts perfectly tuned bar, venue, recording studio, and hotel, at the vanguard of boutique hospitality. Every aspect of this property is diligently curated with works by indie collaborators, resulting in a striking hideout for bona fide creatives. Inheriting the historic dive that’s brought flash and trash to Santa Monica Boulevard for decades, Gold-Diggers is staking a new claim on East Hollywood.", 
        city:"Los Angeles", 
        state:"CA", 
        price:"242",  
        serviceFee:"0",  
        img1:"https://a0.muscache.com/im/pictures/ff9e2dd8-6cd2-4265-bd54-5a13f483a5b9.jpg?im_w=1440",  
        img2:"https://a0.muscache.com/im/pictures/2785f990-5e33-43d7-a311-276a7b6a738d.jpg?im_w=1440",
        img3:"https://a0.muscache.com/im/pictures/0df9a785-8f95-4895-8e9d-679cd56dba47.jpg?im_w=1440",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"Ensuite - BR near Sofi stadium, the forum, LAX, mall", 
        about:"you are booking Master BR in a 2 bd 2 b apt. Meaning is a shared place living room and kitchen are the only things shared your master BR is equiped with googlehub voice activated lights and more The room is decorated with a minimalist design. Equipped with a smart tv , Netflix,Hulu and more networks. Bathroom has many upgrades including towel warmer rack. Lighting upgrade with Bluetooth speaker. Bedroom is equipped with a key turn lock to ensure privacy and comfort while you stay.", 
        city:"Los Angeles", 
        state:"CA", 
        price:"135",  
        serviceFee:"10",  
        img1:"https://a0.muscache.com/im/pictures/5d659630-1c62-4ca6-9692-6c071a22a3bb.jpg?im_w=1440",  
        img2:"https://a0.muscache.com/im/pictures/d8725263-9aa6-461a-9b47-090fe9c6cf33.jpg?im_w=1440",
        img3:"https://a0.muscache.com/im/pictures/849106d1-4e54-4dfa-84e1-f27f66d41775.jpg?im_w=1440",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"Stylish Apartment near LAX/SoFi Stadium", 
        about:"Enjoy a stylish experience at this centrally-located place.", 
        city:"Los Angeles", 
        state:"CA", 
        price:"175",  
        serviceFee:"50",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-596446400746630869/original/3e2d7f84-9bb4-46fb-8d2f-6a33a87d101f.jpeg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/f0babac6-d48a-45f8-8ac0-ab1d1199c822.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/ce40e163-0db8-4f1c-9d0e-17ed5d2bb380.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"Glamping Hollywood Hills Luxury Outdoor Experience", 
        about:"BRAND NEW! - Glamping Hollywood Hills is a luxurious outdoor experience located in the heart of Hollywood just a short walk from the Hollywood Walk of Fame and the Hollywood Bowl! Experience a piece of nature with all the modern & luxury amenities such as Wi-Fi, a glamorous full functioning private bathroom with tiles imported from Mexico, plush bedding with real mattresses, shag carpets, electricity, heating & cooling, a fridge, microwave, dishware & stunning views of Hollywood!", 
        city:"Los Angeles", 
        state:"CA", 
        price:"185",  
        serviceFee:"55",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-597788052307505703/original/40522366-e9f8-49cb-a7ac-b62d68217a30.jpeg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-597788052307505703/original/88e0ca9b-b4ad-4db4-ab19-af169fdc5624.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-597788052307505703/original/88bdd156-60ac-4eb1-813c-79d06da82204.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"", 
        about:"", 
        city:"Los Angeles", 
        state:"CA", 
        price:"114",  
        serviceFee:"85",  
        img1:"https://a0.muscache.com/im/pictures/77c936bf-f400-45c4-955f-017bfa554a45.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/cb0d65ab-8c90-4130-b085-de3b412ce39a.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/391985d4-3d22-45da-969b-33c34e41b205.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"charming one bedroom in amazing location", 
        about:"This beautiful, charming one bedroom is perfect for couples, solo adventurers, and business travelers. Extremely walkable, close to 3rd street promenade, 5-star restaurants, shops, half a mile from Santa Monica Pier, and of course- the beach! The apartment is newly refurnished, and offers the full Santa Monica experience...", 
        city:"Los Angeles", 
        state:"CA", 
        price:"265",  
        serviceFee:"100",  
        img1:"https://a0.muscache.com/im/pictures/668ba3f0-f2ee-4770-a1b5-5b9a78a23315.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/5948cdcb-29e6-4e5e-b83b-20cc7d939f5d.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/4a4f1f01-5529-4af5-b414-fa39dd72db07.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"NEW-Charming Spacious Beach Home 3 Blks to the Sand", 
        about:"This is a huge spacious, newly remodeled ground level 1920's craftsmen, Spanish style unit is the perfect beach house to escape to an your next visit to LA! Located in a quiet residential neighborhood, but only steps away from the very best shopping, restaurants, and activities of Santa Monica Beach and Venice Beach!", 
        city:"Los Angeles", 
        state:"CA", 
        price:"179",  
        serviceFee:"90",  
        img1:"https://a0.muscache.com/im/pictures/9071eeb6-6c2c-4a0a-a888-d98793e5a7a2.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/247080ab-0e03-46a3-ba2b-81731b58d09a.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/1976ccce-36bd-48a3-8ec7-844f20b85124.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"Cozy Little Guest Suite, 5 min to LAX", 
        about:"Small guest suite on second floor, 5 minutes away from LAX airport and 10 min to the beaches. Has a king size bed with a mini kitchenette that includes a coffee machine, a small fridge and a microwave. Has a closet and a bathroom with a tub. Also includes an AC and heating. Wifi with Netflix TV.", 
        city:"Los Angeles", 
        state:"CA", 
        price:"98",  
        serviceFee:"14",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-50071120/original/dc1a4862-5f3a-40c5-80d7-48b4167e4dce.jpeg?im_w=1200",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-50071120/original/8139f90d-81c9-45dc-8ce1-ba5738767844.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-50071120/original/4a516dfb-6c1c-46c7-b551-81ec2ac3f38b.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"High Floor Balcony Strip View Suite", 
        about:"The front desk will put a hold on your credit or debit card at check in for an $100/night ( max. $300) for incidental purchases (spa, room service, etc). Of course, if you don't make any purchases in the resort, then you won't be charged anything and the hold will be released after your stay.", 
        city:"Las Vegas", 
        state:"NV", 
        price:"116",  
        serviceFee:"125",  
        img1:"https://a0.muscache.com/im/pictures/d7e7b952-e7d7-40a8-94d5-e1223c5cebb2.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/66a7fa7f-bfbd-43ad-913f-f41c486e3452.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/ce375f04-7c49-4704-97bc-b29556dd0418.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"2", 
        name:"Newly Renovated Cozy Home Minutes From Fremont", 
        about:"Step into this newly fully renovated cozy home that sleeps four with a fully equipped kitchen and discover the local side of Las Vegas.", 
        city:"Las Vegas", 
        state:"NV", 
        price:"90",  
        serviceFee:"37",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-592871361683518038/original/3be54771-8ccc-435e-890d-2b89efdcd56c.jpeg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-592871361683518038/original/1a3a07db-cc0a-4061-b123-3f135f25b63d.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-592871361683518038/original/b8b569c6-99af-44bb-ade0-1bd76ad5f751.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"3", 
        name:"Peacock Tiny House near Las Vegas", 
        about:"We have a unique tiny home located in Sandy Valley NV. One hour outside south Las Vegas off US 15. This is one of two tiny home on a dude ranch with horseback riding, cattle drives and rodeo events ( When available ) Search Sandy Valley Ranch. Come stay at our beautiful desert hideaway. Enjoy the tranquility of the Mojave Desert and gaze at the sea of stars. We are near Death Valley, Tecopa hotsprings and GoodSprings home of the famous Pioneer Saloon.", 
        city:"Sandy Valley", 
        state:"NV", 
        price:"125",  
        serviceFee:"25",  
        img1:"https://a0.muscache.com/im/pictures/753837ca-c994-45e8-9e8e-079d8b06670b.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/7ff2cd55-2c46-4eeb-b598-c5e0db2b0ef8.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/77e1d9fb-d69c-434a-9eed-680b8cab3b58.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"3", 
        name:"Prime Location! 2 Comfortable Units, Free Parking", 
        about:"With a great location in the heart of Bellevue, this downtown property offers sweeping city views and is minutes from all the most popular attractions in the Seattle area. Do some shopping at Bellevue Square, or head to a local museum, such as the Bellevue Arts Museum or family-friendly Kidsquest Children’s Museum. Enjoy the outdoors at a local park–Bellevue Downtown Park and Clyde Beach Park are just minutes away. And with easy access to downtown Seattle, you’ll never be far from the action!", 
        city:"Bellevue", 
        state:"WA", 
        price:"393",  
        serviceFee:"55",  
        img1:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-563044849412316986/original/bcdb4c74-32e2-4a91-9050-0adcc8d4ac7c.png?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-563044849412316986/original/d973d3b9-5486-42b2-9011-7bf4271a025e.png?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-563044849412316986/original/52861521-38f2-4ddf-831a-ab764f19cda5.png?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"3", 
        name:"Remodeled 4 Bed, Minutes To Bellevue Downtown", 
        about:"Spacious, remodeled 4 bed/2 bath home is in a quiet neighborhood.1.5 mile to Bellevue downtowm , just 1.2 mile to Whole food, walking distance to Wilburton hill park and Kelsey creek park . 1 mile to GIX. one block to the Glendale golf club . The home boasts high end European style kitchen and bathroom remodels, plenty of driveway & street parking making it easy access and there is a bus stop 0.5 mile from the home,10-15 minute drive to downtown Seattle, Kirkland or Redmond, Exterior camera on.", 
        city:"Bellevue", 
        state:"WA", 
        price:"320",  
        serviceFee:"80",  
        img1:"https://a0.muscache.com/im/pictures/ddff25c0-3a7b-4b8f-a608-3addf1b894ba.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/9272edfd-7921-46f1-995f-be982e75538a.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/64ca55ef-20fd-4e66-9f15-d18778b2d117.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"3", 
        name:"High End Modern Home Private WaterFront", 
        about:"Fully remodeled and updated with 7 beds and 3 baths. Private waterfront to a peaceful creek yet close to the top restaurants and shopping. Enjoy high end finishes with stand alone tub, rain fall showers from the ceiling, auto lighting system, great parking, NO HOA, new floors, paint and tiled fireplace next to the large updated kitchen is great for entertaining. All new furniture make this home the perfect choice for 1 night up to a 1 year stay!", 
        city:"Kirkland", 
        state:"WA", 
        price:"513",  
        serviceFee:"122",  
        img1:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-51912566/original/503e5222-292f-43d5-b720-25aded3d0ca7.jpeg?im_w=1200",  
        img2:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-51912566/original/461b45d9-ae1d-440c-9840-23c45fb6511f.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-51912566/original/ff6564e6-38f8-41d2-8b07-7c3f27e96ea1.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"3", 
        name:"Airy and Open Corner Loft - 92 Walkscore!", 
        about:"High-end, well-appointed modern loft in the heart of Redmond. This brand new open Loft comes equipped with a dedicated parking spot, ultrafast fiber Internet speeds, and an electric standing desk with a 32inch monitor. Premium bedding, linens, and a fully stocked kitchen. An ideal property for a business traveler, a couple, or a family with 2 children. Located within walking distance to many of the local watering holes and eateries and Marymoor Park. This is a pet-friendly accommodation.", 
        city:"Redmond", 
        state:"Washington", 
        price:"322",  
        serviceFee:"60",  
        img1:"https://a0.muscache.com/im/pictures/0a3fd087-1f2e-45ee-92ea-3a4d5382c729.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/3fcf962b-5ee3-4b90-8de8-a1980b615e41.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/5882effa-0ec2-447e-bb59-e3abaf5bee61.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"4", 
        name:"Harborside Inn-Boutique Hotel", 
        about:"Originally built in 1846 as a mercantile shipping warehouse on the Boston Harbor. Here, a modern design with a nautical theme is accented with the latest high technology amenities to satisfy the most savvy business or leisure traveler. Premier location. Exceptional value. Stylish decor. The Harborside Inn combines it all to create a unique lodging experience.", 
        city:"Boston", 
        state:"MA", 
        price:"369",  
        serviceFee:"52",  
        img1:"https://a0.muscache.com/im/pictures/86a26ecf-460b-4d0c-883a-593cf154990c.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/09de2148-e0b4-4de3-822c-3fce77b75cb0.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/cf6b6e05-5ca1-4c8d-a317-4f53dbcc3953.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"4", 
        name:"Unique east boston boat with view of city skyline", 
        about:"Experience this one of a kind stay on a 60ft yacht overlooking the Boston skyline. You will be docked in the perfect spot to watch the sun set over the city, rise from the back deck, and see planes fly over the sun roof of the bedroom. The boat will remain docked for your stay.", 
        city:"Boston", 
        state:"MA", 
        price:"399",  
        serviceFee:"170",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-650577418601928442/original/c2c82c4e-de91-41ff-814a-e234779221f4.jpeg?im_w=1200",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-650577418601928442/original/6a24f0dc-4913-4969-adb2-f447faa35e36.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-650577418601928442/original/0f212052-8f5b-4b44-bbe4-e113af4beb9c.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"4", 
        name:"Brick + Beam Loft | Fast Wifi | Amazing Location!", 
        about:"This 2bed, 1bath apartment with laundry in unit is located in the heart of Boston, just a 3 minute walk to the Boston Common. Large windows let in lots of light! Fully stocked kitchen has everything you'd need to cook a basic meal. The unit is accessible by self-check-in via our smart lock system. Its a 10 min trip to Mass General Hospital by car or Public Transportation and the walk is about 20 minutes. 99 Walk Score Super Safe Location 24/7 support", 
        city:"Boston", 
        state:"MA", 
        price:"502",  
        serviceFee:"140",  
        img1:"https://a0.muscache.com/im/pictures/ebefde3e-20e1-4ca6-a523-e926d346356f.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/5fb9aa7f-1f6b-4356-9907-718c21dc1c4b.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/7a2f0641-e365-4d18-b4b3-c36bd6fbe6ed.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"4", 
        name:"Castle on the Potomac River", 
        about:"The Premier Potomac Riverfront, River Access, Waterfront, Private Resort Home of the Greater Washington, DC Metro Area A one of a kind property graces its guests with an ambiance that nurtures the soul.", 
        city:"Boston", 
        state:"MA", 
        price:"3999",  
        serviceFee:"650",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-5159689/original/d6d1783f-2df5-4e6b-b7b7-4f3af0f8a421.jpeg?im_w=1200",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-5159689/original/88802a42-e10a-42f1-b5e3-cd0f307a120f.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-5159689/original/76df9780-07bc-48db-9284-ce81b1a7147a.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"5", 
        name:"Cozy 3 bedroom 2.5 bath townhome in Petworth NW DC", 
        about:"Enjoy what the Nations Capital has to offer with a comfy stay in our 3 bed, 2.5 bath row home! Centrally located in the Petworth neighborhood of NW DC, our spacious home provides you with everything you need to enjoy your stay. Parking: There is free street parking all around the neighborhood. The Space: *Please note this is a full house rental/however we have tenants in the basement apartment* 2 story row home with 3 bedrooms and 2.5 baths, deck and backyard as well as front porch access.", 
        city:"Washington", 
        state:"DC", 
        price:"305",  
        serviceFee:"52",  
        img1:"https://a0.muscache.com/im/pictures/miso/Hosting-626288635086310825/original/8bcde738-a4e3-49e9-ac6e-1681cd029ff1.jpeg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/miso/Hosting-626288635086310825/original/e48cda30-29cd-4b59-85ca-1d5fb3853ab6.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/miso/Hosting-626288635086310825/original/9038f126-d2d6-47f4-8e53-45c18d34e08d.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"5", 
        name:"Contemporary Home near Capitol Hill", 
        about:"Welcome to your home away from home! Free street parking available in front of home.", 
        city:"Washington", 
        state:"DC", 
        price:"275",  
        serviceFee:"67",  
        img1:"https://a0.muscache.com/im/pictures/3bc4e406-ab00-44c2-8d3e-4ab69013f78c.jpg?im_w=1200",  
        img2:"https://a0.muscache.com/im/pictures/ae9d1be7-fb9b-442a-987a-32f128ed94e6.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/c9f2bc64-78d2-4c80-befc-6f809b9da241.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"5", 
        name:"Beachside Cabana Walk to BEACH and shops Sleeps 12!!", 
        about:"Make Coco's cabana your next vacation home. The light and beachy decor is inviting in this spacious home - sleeps 12!! The home has lots of living space and idyllic outdoor seating, etc. It’s just a 4 minute walk to the beach, walk to Publix, restaurants & community park (public tennis court, basketball, playground, yoga, dog park) Historic downtown is just 1.5 miles away. Serenata beach club is a two minute drive away. Using CDC recommended cleaning products.", 
        city:"St. Augustine", 
        state:"FL", 
        price:"276",  
        serviceFee:"71",  
        img1:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-44169856/original/f800d72e-4d86-4398-9905-18a2268e1f27.jpeg?im_w=1200",  
        img2:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-44169856/original/7b3343f4-3c9b-4e04-abeb-cfaa2caf18f8.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-44169856/original/5f71a61d-f21b-43b6-a370-952b7cf6adc0.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"6", 
        name:"Tiki Suites ~ The Grand Tiki", 
        about:"Come relax and enjoy the beautiful and serene waters of Key West in a truly unique way!", 
        city:"Key West", 
        state:"FL", 
        price:"749",  
        serviceFee:"106",  
        img1:"https://a0.muscache.com/im/pictures/9cef5c15-9f3b-4159-99c8-bc8939013907.jpg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/25efcb07-2ac7-4b37-8208-499164e486c8.jpg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/fe845481-752d-48a0-9b67-2bbd6050fb06.jpg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  { 
        userId:"6", 
        name:"Corner Oceanfront 1BR | Beach | Resort Amenities", 
        about:"Experience modern luxury in this apartment home right on the white sandy beach of Miami. This modern high-end apartment features a fully-equipped kitchen, a spacious floor plans, 10 foot ceilings and much more. Residents can enjoy the relaxing on-site amenities including 2 swimming pools and Jacuzzi, a full exercise and spa center and endless beach and ocean views.", 
        city:"Miami", 
        state:"FL", 
        price:"519",  
        serviceFee:"87",  
        img1:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-43635494/original/d4bffddc-1739-4110-9a1a-6c4ff7904e23.jpeg?im_w=960",  
        img2:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-43635494/original/8b80d9cc-1947-4e94-ba92-bb90b896ed4f.jpeg?im_w=1200",
        img3:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-43635494/original/92b59d39-bf6f-4577-92fd-ee63ae45fc47.jpeg?im_w=1200",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },    
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Listings', null, {});
  }
};
