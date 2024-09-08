const beachSpecies = {
  // (Use the updated data here)
  "Junput Beach": [
    "Jellyfish - Venomous species such as Box Jellyfish can cause painful stings.",
    "Sea Snakes - Highly venomous, though human bites are rare.",
    "Stingrays - Found in shallow waters, their sting can cause intense pain.",
    "Cone Snails - Highly venomous, their sting can cause paralysis.",
    "Blue-Ringed Octopus - Extremely venomous, potentially fatal bite.",
    "Scorpionfish - Camouflaged and venomous, their sting can cause severe pain.",
  ],

  "Chandrabagha Beach": [
    "Sharks - Rare sightings of dangerous species like Bull Sharks in deeper waters.",
    "Jellyfish - Some species have venomous stings, causing severe pain.",
    "Sea Urchins - Sharp, venomous spines can cause painful wounds and infections.",
    "Crocodiles - Rare, but sightings have occurred near estuaries.",
    "Barracuda - Aggressive species with sharp teeth that can cause serious injuries.",
    "Bluebottle Jellyfish (Portuguese Man o' War) - Its tentacles can cause excruciating pain.",
  ],

  "Bilesaar Beach": [
    "Jellyfish - Various species, including Box Jellyfish, can cause venomous stings.",
    "Stingrays - Their sting can cause severe pain and possible infection.",
    "Sea Snakes - Extremely venomous, though bites are uncommon.",
    "Moray Eels - Can deliver a powerful bite if disturbed.",
    "Crown-of-Thorns Starfish - Venomous spines that can cause severe injuries.",
    "Titan Triggerfish - Known for being territorial and can bite divers.",
  ],

  "Diani Beach": [
    "Sharks - Occasional sightings of dangerous species such as Bull Sharks.",
    "Jellyfish - Some species, like Box Jellyfish, have venomous stings.",
    "Sea Urchins - Venomous spines can cause severe pain and infection.",
    "Crocodiles - Rare sightings, but possible near rivers and estuaries.",
    "Barracuda - Aggressive species that can attack humans in some situations.",
    "Lionfish - Venomous spines can cause excruciating pain.",
  ],

  "Zanzibar Beach": [
    "Lionfish - Venomous spines that cause intense pain.",
    "Stonefish - Highly venomous, camouflaged on the ocean floor.",
    "Sea Snakes - Extremely venomous, but bites are rare.",
    "Cone Snails - Highly venomous, their sting can cause paralysis.",
    "Bluebottle Jellyfish - Can cause painful and sometimes dangerous stings.",
    "Moray Eels - Can deliver painful bites when disturbed.",
  ],

  "Anse Source d'Argent": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Sea Urchins - Sharp, venomous spines that cause painful injuries.",
    "Moray Eels - Can deliver painful bites if disturbed.",
    "Cone Snails - Can cause paralysis with their venomous sting.",
    "Crown-of-Thorns Starfish - Venomous spines causing severe pain.",
    "Stonefish - Camouflaged and highly venomous.",
  ],

  "Camps Bay Beach": [
    "Great White Sharks - Occasionally sighted in deeper waters, can be dangerous.",
    "Stingrays - Their sting causes intense pain and possible infection.",
    "Jellyfish - Some species can cause painful stings.",
    "Sea Snakes - Rare, but potentially dangerous if encountered.",
    "Lionfish - Venomous spines can cause extreme pain.",
    "Stonefish - Highly venomous, camouflaged on the ocean floor.",
  ],

  "Bangaram Beach": [
    "Sharks - Occasional sightings of reef sharks, though generally not aggressive.",
    "Lionfish - Venomous spines that can cause extreme pain.",
    "Stonefish - Venomous fish camouflaged on the ocean floor.",
    "Sea Urchins - Sharp spines, some venomous, can cause painful injuries.",
    "Moray Eels - Deliver painful bites if disturbed.",
    "Cone Snails - Highly venomous sting that can cause paralysis.",
  ],

  "Promenade Beach": [
    "Jellyfish - Species like Portuguese Man o' War can cause painful stings.",
    "Stingrays - Found in shallow waters, their sting can be painful.",
    "Sea Snakes - Venomous but rarely bite unless provoked.",
    "Lionfish - Venomous spines causing intense pain.",
    "Stonefish - Venomous and camouflaged on the ocean floor.",
    "Crown-of-Thorns Starfish - Sharp venomous spines that can cause severe pain.",
  ],

  "Auroville Beach": [
    "Jellyfish - Various species with stings causing pain and irritation.",
    "Sea Snakes - Venomous, bites are rare but dangerous.",
    "Stingrays - Can cause painful injuries with their tail spines.",
    "Lionfish - Venomous spines that cause intense pain.",
    "Crown-of-Thorns Starfish - Venomous spines causing painful wounds.",
    "Bluebottle Jellyfish - Known to cause excruciating stings.",
  ],

  "Karaikal Beach": [
    "Sharks - Sightings are rare but possible in deeper waters.",
    "Sea Snakes - Highly venomous, though bites are uncommon.",
    "Jellyfish - Species like Box Jellyfish are dangerous with venomous stings.",
    "Lionfish - Venomous spines causing extreme pain.",
    "Stonefish - Camouflaged and venomous on the ocean floor.",
    "Moray Eels - Deliver painful bites if provoked.",
  ],

  "Serenity Beach": [
    "Stingrays - Common in shallow waters, their sting can cause intense pain.",
    "Jellyfish - Painful stings from various species, including Portuguese Man o' War.",
    "Sea Urchins - Venomous spines can cause painful injuries.",
    "Crown-of-Thorns Starfish - Venomous spines causing severe pain.",
    "Moray Eels - Can deliver painful bites if disturbed.",
    "Cone Snails - Highly venomous, causing paralysis.",
  ],

  "Bheemunipatnam Beach": [
    "Sharks - Sightings of dangerous species are rare but possible.",
    "Sea Snakes - Extremely venomous but generally avoid human contact.",
    "Jellyfish - Some species have venomous stings causing pain.",
    "Lionfish - Venomous spines causing intense pain.",
    "Stonefish - Highly venomous and camouflaged on the ocean floor.",
    "Moray Eels - Can deliver painful bites if provoked.",
  ],

  "Marnginapudi Beach": [
    "Stingrays - Their sting can cause extreme pain and possible infection.",
    "Jellyfish - Some species, like Box Jellyfish, have venomous stings.",
    "Sea Snakes - Highly venomous, though bites are rare.",
    "Lionfish - Venomous spines causing intense pain.",
    "Stonefish - Camouflaged and highly venomous.",
    "Crocodiles - Rare sightings near rivers and estuaries.",
  ],

  "Uppada Beach": [
    "Jellyfish - Venomous stings from species like the Box Jellyfish.",
    "Sea Snakes - Extremely venomous, though generally shy.",
    "Sharks - Rare sightings in deeper waters, including potentially dangerous species.",
    "Lionfish - Venomous spines causing extreme pain.",
    "Stonefish - Highly venomous and camouflaged on the ocean floor.",
    "Moray Eels - Deliver painful bites if provoked.",
  ],

  "Suryalanka Beach": [
    "Jellyfish - Some species, including Portuguese Man o' War, can cause painful stings.",
    "Sea Snakes - Highly venomous but rarely bite humans.",
    "Stingrays - Found in shallow waters, their sting can be extremely painful.",
    "Cone Snails - Can cause paralysis with their venomous sting.",
    "Lionfish - Venomous spines causing intense pain.",
    "Stonefish - Highly venomous and camouflaged on the ocean floor.",
  ],

  "Kevla Beach": [
    "Jellyfish - Various species with venomous stings causing pain and irritation.",
    "Sea Urchins - Venomous spines that can cause painful injuries.",
    "Sharks - Sightings of dangerous species in deeper waters are rare.",
    "Lionfish - Venomous spines causing extreme pain.",
    "Cone Snails - Can cause paralysis with their sting.",
    "Moray Eels - Can deliver painful bites if disturbed.",
  ],

  "Hedvi Beach": [
    "Jellyfish - Some species have venomous stings, causing pain.",
    "Sea Snakes - Extremely venomous but generally avoid humans.",
    "Stingrays - Their sting can cause severe pain and swelling.",
    "Lionfish - Venomous spines causing intense pain.",
    "Stonefish - Camouflaged and highly venomous.",
    "Crown-of-Thorns Starfish - Sharp, venomous spines that cause severe pain.",
  ],

  "Tithal Beach": [
    "Jellyfish - Venomous stings from species like the Box Jellyfish.",
    "Sea Snakes - Highly venomous, though bites are rare.",
    "Stingrays - Found in shallow waters, their sting can cause intense pain.",
    "Lionfish - Venomous spines that cause extreme pain.",
    "Stonefish - Venomous and camouflaged on the ocean floor.",
    "Moray Eels - Can deliver painful bites if provoked.",
  ],

  "Bordi Beach": [
    "Jellyfish - Species like Portuguese Man o' War can cause painful stings.",
    "Sea Urchins - Sharp spines, some venomous, can cause painful injuries.",
    "Stingrays - Their sting can cause intense pain and possible infection.",
  ],

  "Chakratirth Beach": [
    "Jellyfish - Some species with venomous stings causing pain.",
    "Sea Snakes - Highly venomous but rarely bite unless provoked.",
    "Stingrays - Their sting can cause severe pain and swelling.",
  ],

  "Mobor Beach": [
    "Jellyfish - Venomous stings, including Box Jellyfish which can be fatal.",
    "Sea Snakes - Extremely venomous, though human interactions are rare.",
    "Sharks - Rare sightings of dangerous species in deeper waters.",
  ],

  "Pantam Beach": [
    "Jellyfish - Venomous species that can cause severe pain and irritation.",
    "Stingrays - Can cause painful injuries with their tail spines.",
    "Sea Snakes - Highly venomous, but bites are rare.",
  ],

  "Vypin Island Beach": [
    "Sharks - Occasional sightings of potentially dangerous species.",
    "Sea Urchins - Venomous spines can cause severe pain.",
    "Stingrays - Their sting can cause severe pain and infection.",
  ],

  "Ullal Beach": [
    "Jellyfish - Some species have venomous stings, causing pain.",
    "Sea Snakes - Extremely venomous but rarely bite humans.",
    "Stingrays - Their sting can cause intense pain and infection.",
  ],

  "Surathkal Beach": [
    "Jellyfish - Venomous species like Box Jellyfish are dangerous.",
    "Stingrays - Their sting can cause severe pain and possible infection.",
    "Sea Urchins - Sharp spines, some venomous, can cause painful injuries.",
  ],

  "Bhatkal Beach": [
    "Sharks - Rare sightings of dangerous species in deeper waters.",
    "Jellyfish - Venomous stings from species like the Box Jellyfish.",
    "Sea Snakes - Highly venomous but rarely bite unless provoked.",
  ],

  "Frasergunj Beach": [
    "Jellyfish - Some species have venomous stings causing pain.",
    "Sea Urchins - Venomous spines that can cause painful injuries.",
    "Stingrays - Found in shallow waters, their sting can be extremely painful.",
  ],

  "Shankar Pur Beach": [
    "Jellyfish - Various species with venomous stings causing pain and irritation.",
    "Sea Snakes - Highly venomous, though bites are rare.",
    "Stingrays - Their sting can cause intense pain and possible infection.",
  ],

  "Henry Island Beach": [
    "Jellyfish - Venomous stings, including Box Jellyfish that can be fatal.",
    "Sea Urchins - Sharp spines, some venomous, can cause painful injuries.",
    "Stingrays - Found in shallow waters, their sting can cause severe pain.",
  ],

  "Bora Bora Beach": [
    "Sharks - Species like Blacktip Reef Sharks and Lemon Sharks are common, though generally not aggressive towards humans.",
    "Stonefish - Venomous fish with spines that inject toxins, often camouflaged on the ocean floor.",
    "Lionfish - Venomous spines that cause extreme pain and potentially serious injury.",
    "Box Jellyfish - Highly venomous, with stings that can be fatal without treatment.",
    "Sea Urchins - Some species have venomous spines that can cause painful injuries.",
  ],
  "Rarotonga Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Moorea Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Himchari Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Kolatali Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Inani Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Cox's Bazar": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Marina Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Puri Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Pati Sonepur Sea Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Rushikonda Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Kovalam Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Minicoy Thundi Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Eden Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Kadmat Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Kappad Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Kasarkod Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Padubidri Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Ghoghla Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Shivrajpur Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Dalasri Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Passikutha Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Morgala Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Vaduva Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Silent Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Kalametia Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Urchin - Some species have venomous spines causing severe pain.",
  ],
  "Arisimale Beach": [
    "Box Jellyfish - Extremely venomous with potentially fatal stings.",
    "Lionfish - Venomous fish with spines that cause severe pain.",
    "Stonefish - Venomous fish with spines that inject toxins.",
    "Blue-Ringed Octopus - Highly venomous; its bite can be fatal.",
    "Sea Anemone - Can sting and cause irritation and pain.",
  ],
  "Medila Beach": [
    "Tiger Cowrie - A sea snail with a venomous mantle that can cause allergic reactions.",
    "Upside-Down Jellyfish - Jellyfish that can cause skin rashes and irritation with its stinging cells.",
    "Glass Fish - Transparent fish with venomous spines that can deliver painful stings.",
    "Spiny Lobster - Lobster with sharp spines that can cause cuts and infections.",
  ],
  "Thalaiyadi Beach": [
    "Moon Jellyfish - Jellyfish with a mild sting that can cause skin irritation and allergic reactions.",
    "Harlequin Tusk Fish - Fish with strong jaws that can cause painful bites and injury.",
    "Venomous Flatworm - Marine flatworm that secretes toxins that can cause skin irritation and nausea.",
  ],
  "Sahinmatha Beach": [
    "Saddleback Caterpillar - Caterpillar with venomous spines that can cause  pain and rash.",
    "Bearded Sea Cucumber - Sea cucumber that can release toxins causing skin irritation.",
    "Yellowtail Damselfish - Aggressive fish that can inflict painful bites and cause skin infections.",
  ],
  "Vannala Beach": [
    "Warty Sea Cucumber - Sea cucumber with toxic skin that can cause irritation and allergic reactions.",
    "Horned Sea Star - Starfish with venomous spines that can cause skin irritation and infection.",
    "Violet Sea Urchin - Sea urchin with sharp spines that can cause painful stings and potential infections.",
  ],
  "Peppara Beach": [
    "Crown-of-Thorns Starfish - A large starfish with spiny projections that can cause skin irritation.",
    "Stonefish - Camouflaged fish with venomous spines that can cause severe pain.",
    "Scorpaenid Fish - Venomous fish from the Scorpaenidae family, capable of causing  swelling.",
  ],
  "Thalassery Beach": [
    "Blue-Ringed Octopus - Small octopus with vibrant blue rings that release venom capable of causing paralysis.",
    "Cone Snail - Marine mollusk with a harpoon-like tooth that delivers neurotoxic venom, causing paralysis.",
    "Fire Coral - Coral species that can inflict painful stings, causing irritation, rash, and allergic reactions.",
  ],
  "Maravanthe Beach": [
    "Reef Triggerfish - Aggressive fish that can deliver painful bites and has strong jaws capable of causing injuries.",
    "Venomous Sea Snake - Snake with highly toxic venom, which can cause pain, paralysis, and respiratory failure.",
    "Mantis Shrimp - Marine crustacean known for its powerful strike that can cause injury and severe pain.",
  ],
  "Alleppey Beach": [
    "Portuguese Man-O-War - A colonial jellyfish with a venomous sting that can cause intense pain.",
    "Blue-Ringed Octopus - Small octopus with bright blue rings that can deliver a venomous bite, leading to paralysis.",
    "Stonefish - Camouflaged fish with venomous spines that can cause severe pain, swelling.",
  ],
  "Kochi Beach": [
    "Crown-of-Thorns Starfish - A large, venomous starfish with spiny, thorn-like projections that can cause skin irritation and pain.",
    "Blue-Ringed Octopus - Small octopus with vibrant blue rings that release venom capable of causing paralysis and respiratory failure.",
    "Fire Coral - Coral that can deliver a painful sting through its tentacles, causing irritation and a rash.",
  ],
  "Cherai Beach": [
    "Box Jellyfish - Transparent jellyfish with potent venom that can cause severe pain and cardiac arrest.",
    "Stonefish - Venomous fish resembling a rock, with spines that can inject toxins causing intense pain and swelling.",
    "Cone Snail - Marine mollusk with a harpoon-like tooth that delivers neurotoxic venom, potentially causing paralysis.",
  ],
};

function searchBeach() {
  const beachName = document.getElementById("searchBar").value.trim();
  const resultDiv = document.getElementById("result");

  if (beachSpecies[beachName]) {
    const speciesList = beachSpecies[beachName];
    resultDiv.innerHTML = `<strong><ul>${speciesList
      .map((species) => `<li>${species}</li>`)
      .join("")}</ul></strong>`;
  } else {
    resultDiv.innerHTML = `<p>No information available for ${beachName}</p>`;
  }
}
