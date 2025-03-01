document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".input-field input");
    const sendButton = document.querySelector(".input-field button");
    const chatBox = document.querySelector(".box");

    // Recipes stored in JS
    const recipes = {
    "chicken_biryani": {
        "ingredients": ["Chicken", "Basmati Rice", "Onions", "Tomatoes", "Yogurt", "Spices", "Ghee", "Coriander", "Mint"],
        "recipe": [
            "Step 1: Wash and soak basmati rice for 30 minutes.",
            "Step 2: Sauté onions, tomatoes, and spices in ghee.",
            "Step 3: Add chicken and cook until tender.",
            "Step 4: Add yogurt and mix well.",
            "Step 5: Add rice and water, cook until done.",
            "Step 6: Garnish with coriander and mint."
        ]
    },
    "mutton_biryani": {
        "ingredients": ["Mutton", "Basmati Rice", "Onions", "Tomatoes", "Yogurt", "Spices", "Ghee", "Coriander", "Mint"],
        "recipe": [
            "Step 1: Wash and soak basmati rice for 30 minutes.",
            "Step 2: Sauté onions, tomatoes, and spices in ghee.",
            "Step 3: Add mutton and cook until tender.",
            "Step 4: Add yogurt and mix well.",
            "Step 5: Add rice and water, cook until done.",
            "Step 6: Garnish with coriander and mint."
        ]
    },
    "beef_biryani": {
        "ingredients": ["Beef", "Basmati Rice", "Onions", "Tomatoes", "Yogurt", "Spices", "Ghee", "Coriander", "Mint"],
        "recipe": [
            "Step 1: Wash and soak basmati rice for 30 minutes.",
            "Step 2: Sauté onions, tomatoes, and spices in ghee.",
            "Step 3: Add beef and cook until tender.",
            "Step 4: Add yogurt and mix well.",
            "Step 5: Add rice and water, cook until done.",
            "Step 6: Garnish with coriander and mint."
        ]
    },
    "hyderabadi_biryani": {
        "ingredients": ["Chicken/Mutton", "Basmati Rice", "Onions", "Tomatoes", "Curd", "Spices", "Saffron", "Ghee", "Coriander", "Mint"],
        "recipe": [
            "Step 1: Wash and soak basmati rice for 30 minutes.",
            "Step 2: Marinate meat with yogurt and spices for 2 hours.",
            "Step 3: Sauté onions, tomatoes, and whole spices in ghee.",
            "Step 4: Cook meat partially, then layer with rice.",
            "Step 5: Add saffron milk and cook on dum.",
            "Step 6: Garnish with fried onions, coriander, and mint."
        ]
    },
    "sambar": {
        "ingredients": ["Toor Dal", "Tamarind", "Drumsticks", "Carrots", "Tomatoes", "Spices", "Mustard Seeds", "Curry Leaves"],
        "recipe": [
            "Step 1: Cook toor dal until soft.",
            "Step 2: Extract tamarind pulp and set aside.",
            "Step 3: Sauté mustard seeds, curry leaves, and onions.",
            "Step 4: Add vegetables, tamarind pulp, and spices.",
            "Step 5: Let it boil and cook until veggies are tender.",
            "Step 6: Mix dal, simmer for a few minutes, and serve hot."
        ]
    },
    "rasam": {
        "ingredients": ["Tamarind", "Tomatoes", "Black Pepper", "Cumin", "Garlic", "Mustard Seeds", "Curry Leaves", "Coriander"],
        "recipe": [
            "Step 1: Extract tamarind pulp.",
            "Step 2: Crush black pepper, cumin, and garlic.",
            "Step 3: Boil tamarind water with tomatoes and spices.",
            "Step 4: Temper mustard seeds and curry leaves.",
            "Step 5: Mix everything, simmer for 5 minutes.",
            "Step 6: Garnish with coriander and serve hot."
        ]
    },
    "kootu": {
        "ingredients": ["Any vegetable (Bottle Gourd, Pumpkin, etc.)", "Moong Dal", "Coconut", "Cumin", "Mustard Seeds", "Green Chilies", "Curry Leaves"],
        "recipe": [
            "Step 1: Cook moong dal until soft.",
            "Step 2: Cook vegetables with water and salt.",
            "Step 3: Grind coconut and cumin into a paste.",
            "Step 4: Mix dal, veggies, and coconut paste.",
            "Step 5: Temper mustard seeds and curry leaves.",
            "Step 6: Mix well and serve hot."
        ]
    },
    "poriyal": {
        "ingredients": ["Any vegetable (Beans, Carrot, Cabbage, etc.)", "Mustard Seeds", "Curry Leaves", "Green Chilies", "Coconut"],
        "recipe": [
            "Step 1: Chop vegetables finely.",
            "Step 2: Sauté mustard seeds, curry leaves, and chilies.",
            "Step 3: Add vegetables and stir-fry until cooked.",
            "Step 4: Add grated coconut and mix well.",
            "Step 5: Serve as a side dish."
        ]
    },
    "french_fries": {
        "ingredients": ["Potatoes", "Salt", "Oil"],
        "recipe": [
            "Step 1: Peel and cut potatoes into thin strips.",
            "Step 2: Soak them in cold water for 30 minutes.",
            "Step 3: Heat oil in a deep pan.",
            "Step 4: Fry potatoes until golden and crisp.",
            "Step 5: Drain excess oil and season with salt."
        ]
    },
    "puli_kulambu": {
        "ingredients": ["Tamarind", "Brinjal/Okra", "Onions", "Tomatoes", "Garlic", "Mustard Seeds", "Spices"],
        "recipe": [
            "Step 1: Extract tamarind pulp.",
            "Step 2: Sauté mustard seeds, curry leaves, onions, and garlic.",
            "Step 3: Add tomatoes and cook until soft.",
            "Step 4: Add tamarind pulp, vegetables, and spices.",
            "Step 5: Let it boil until thickened.",
            "Step 6: Serve hot with rice."
        ]
    },
    "payasam": {
        "ingredients": ["Milk", "Rice/Sago/Vermicelli", "Jaggery/Sugar", "Cardamom", "Cashews", "Raisins", "Ghee"],
        "recipe": [
            "Step 1: Heat milk and bring to a boil.",
            "Step 2: Add cooked rice/sago/vermicelli.",
            "Step 3: Stir in jaggery or sugar and mix well.",
            "Step 4: Fry cashews and raisins in ghee and add.",
            "Step 5: Add cardamom for flavor.",
            "Step 6: Serve warm or chilled."
        ]
    },
    "chicken_burger": {
        "ingredients": ["Chicken Patty", "Burger Bun", "Lettuce", "Tomato", "Mayonnaise", "Cheese"],
        "recipe": [
            "Step 1: Cook or grill the chicken patty.",
            "Step 2: Toast the burger bun slightly.",
            "Step 3: Spread mayonnaise on the bun.",
            "Step 4: Place lettuce, tomato, and cheese on the bun.",
            "Step 5: Add the cooked chicken patty.",
            "Step 6: Cover with the top bun and serve."
        ]
    },
    "chicken_pizza": {
        "ingredients": ["Pizza Dough", "Chicken", "Tomato Sauce", "Cheese", "Bell Peppers", "Onions", "Oregano"],
        "recipe": [
            "Step 1: Roll out the pizza dough.",
            "Step 2: Spread tomato sauce evenly.",
            "Step 3: Add cooked chicken pieces and veggies.",
            "Step 4: Sprinkle cheese generously.",
            "Step 5: Bake in a preheated oven at 200°C for 15 minutes.",
            "Step 6: Serve hot with oregano seasoning."
        ]
    },
    "paneer_pizza": {
        "ingredients": ["Pizza Dough", "Paneer", "Tomato Sauce", "Cheese", "Bell Peppers", "Onions", "Oregano"],
        "recipe": [
            "Step 1: Roll out the pizza dough.",
            "Step 2: Spread tomato sauce evenly.",
            "Step 3: Add cubed paneer and veggies.",
            "Step 4: Sprinkle cheese generously.",
            "Step 5: Bake in a preheated oven at 200°C for 15 minutes.",
            "Step 6: Serve hot with oregano seasoning."
        ]
    },
    "curd_rice": {
        "ingredients": ["Rice", "Curd", "Mustard Seeds", "Green Chilies", "Ginger", "Curry Leaves"],
        "recipe": [
            "Step 1: Cook rice and let it cool.",
            "Step 2: Mix curd with the rice.",
            "Step 3: Temper mustard seeds, chilies, ginger, and curry leaves.",
            "Step 4: Add tempering to the rice.",
            "Step 5: Mix well and serve chilled."
        ]
    },
    "lemon_rice": {
        "ingredients": ["Rice", "Lemon", "Mustard Seeds", "Green Chilies", "Turmeric", "Curry Leaves"],
        "recipe": [
            "Step 1: Cook rice and let it cool.",
            "Step 2: Heat oil, add mustard seeds, chilies, turmeric, and curry leaves.",
            "Step 3: Add the cooked rice and mix well.",
            "Step 4: Squeeze fresh lemon juice over the rice.",
            "Step 5: Mix and serve with papad."
        ]
    },
    "tamarind_rice": {
        "ingredients": ["Rice", "Tamarind Pulp", "Mustard Seeds", "Red Chilies", "Peanuts", "Curry Leaves"],
        "recipe": [
            "Step 1: Cook rice and let it cool.",
            "Step 2: Prepare tamarind paste by boiling tamarind pulp with spices.",
            "Step 3: Temper mustard seeds, chilies, peanuts, and curry leaves.",
            "Step 4: Add tamarind paste and mix with rice.",
            "Step 5: Let it rest for 30 minutes for better flavor."
        ]
    },
    "tomato_rice": {
        "ingredients": ["Rice", "Tomatoes", "Onions", "Green Chilies", "Spices", "Coriander"],
        "recipe": [
            "Step 1: Cook rice and set aside.",
            "Step 2: Sauté onions, tomatoes, and spices in oil.",
            "Step 3: Cook until tomatoes turn mushy.",
            "Step 4: Add cooked rice and mix well.",
            "Step 5: Garnish with coriander and serve."
        ]
    },
    "pulav": {
        "ingredients": ["Basmati Rice", "Carrots", "Peas", "Beans", "Spices", "Ghee"],
        "recipe": [
            "Step 1: Wash and soak basmati rice for 20 minutes.",
            "Step 2: Sauté spices in ghee, then add vegetables.",
            "Step 3: Add rice and water, cook until done.",
            "Step 4: Garnish with coriander and serve hot."
        ]
    },
    "veg_fried_rice": {
        "ingredients": ["Rice", "Carrots", "Beans", "Capsicum", "Soy Sauce", "Pepper"],
        "recipe": [
            "Step 1: Cook rice and let it cool.",
            "Step 2: Stir-fry veggies in oil.",
            "Step 3: Add cooked rice, soy sauce, and pepper.",
            "Step 4: Mix well and serve hot."
        ]
    },
    "egg_fried_rice": {
        "ingredients": ["Rice", "Eggs", "Soy Sauce", "Pepper", "Garlic", "Spring Onions"],
        "recipe": [
            "Step 1: Cook rice and let it cool.",
            "Step 2: Scramble eggs and set aside.",
            "Step 3: Sauté garlic, then add rice, soy sauce, and eggs.",
            "Step 4: Mix well and garnish with spring onions."
        ]
    },
    "chicken_fried_rice": {
        "ingredients": ["Rice", "Chicken", "Soy Sauce", "Garlic", "Eggs", "Spring Onions"],
        "recipe": [
            "Step 1: Cook rice and let it cool.",
            "Step 2: Stir-fry chicken pieces until cooked.",
            "Step 3: Add scrambled eggs, garlic, and rice.",
            "Step 4: Mix in soy sauce and garnish with spring onions."
        ]
    },
    "paneer_momos": {
        "ingredients": ["Paneer", "All-Purpose Flour", "Cabbage", "Carrot", "Soy Sauce", "Garlic", "Ginger"],
        "recipe": [
            "Step 1: Prepare the dough using all-purpose flour and water.",
            "Step 2: Mix grated paneer with chopped cabbage, carrot, garlic, ginger, and soy sauce.",
            "Step 3: Roll out small dough circles, fill them with paneer mixture, and shape into momos.",
            "Step 4: Steam the momos for 10-12 minutes.",
            "Step 5: Serve hot with spicy chutney."
        ]
    },
    "chicken_momos": {
        "ingredients": ["Chicken Mince", "All-Purpose Flour", "Garlic", "Ginger", "Soy Sauce", "Spring Onions"],
        "recipe": [
            "Step 1: Prepare the dough using all-purpose flour and water.",
            "Step 2: Mix minced chicken with garlic, ginger, soy sauce, and spring onions.",
            "Step 3: Roll out small dough circles, fill them with chicken mixture, and shape into momos.",
            "Step 4: Steam the momos for 12-15 minutes.",
            "Step 5: Serve hot with chutney."
        ]
    },
    "fried_momos": {
        "ingredients": ["All-Purpose Flour", "Paneer/Chicken", "Garlic", "Soy Sauce", "Oil"],
        "recipe": [
            "Step 1: Prepare the dough and fill with paneer or chicken stuffing.",
            "Step 2: Steam the momos for 10 minutes.",
            "Step 3: Heat oil and deep-fry the steamed momos until golden brown.",
            "Step 4: Serve hot with chutney."
        ]
    },
    "chicken_noodles": {
        "ingredients": ["Noodles", "Chicken", "Soy Sauce", "Garlic", "Spring Onions", "Capsicum", "Carrots"],
        "recipe": [
            "Step 1: Boil the noodles and set aside.",
            "Step 2: Stir-fry chicken in oil until cooked.",
            "Step 3: Add garlic, capsicum, carrots, and spring onions.",
            "Step 4: Add boiled noodles, soy sauce, and mix well.",
            "Step 5: Serve hot with extra soy sauce."
        ]
    },
    "egg_noodles": {
        "ingredients": ["Noodles", "Eggs", "Soy Sauce", "Garlic", "Spring Onions", "Capsicum", "Carrots"],
        "recipe": [
            "Step 1: Boil the noodles and set aside.",
            "Step 2: Scramble eggs and set aside.",
            "Step 3: Stir-fry garlic, capsicum, and carrots in oil.",
            "Step 4: Add boiled noodles, scrambled eggs, and soy sauce.",
            "Step 5: Serve hot with spring onions."
        ]
    },
    "veg_noodles": {
        "ingredients": ["Noodles", "Capsicum", "Carrots", "Beans", "Soy Sauce", "Garlic", "Spring Onions"],
        "recipe": [
            "Step 1: Boil the noodles and set aside.",
            "Step 2: Stir-fry garlic, capsicum, carrots, and beans in oil.",
            "Step 3: Add boiled noodles and soy sauce.",
            "Step 4: Mix well and serve hot."
        ]
    },
    "mushroom_gravy": {
        "ingredients": ["Mushrooms", "Onions", "Tomatoes", "Garlic", "Ginger", "Spices", "Cream"],
        "recipe": [
            "Step 1: Sauté onions, garlic, and ginger in oil.",
            "Step 2: Add chopped tomatoes and cook until soft.",
            "Step 3: Add sliced mushrooms and cook well.",
            "Step 4: Add spices and mix well.",
            "Step 5: Pour in fresh cream and simmer for a few minutes.",
            "Step 6: Serve hot with rice or roti."
        ]
    },
    "chappathi": {
        "ingredients": ["Wheat Flour", "Water", "Salt"],
        "recipe": [
            "Step 1: Knead wheat flour with water and salt to form a dough.",
            "Step 2: Rest the dough for 30 minutes.",
            "Step 3: Roll out small portions into thin circles.",
            "Step 4: Cook on a hot pan until both sides puff up.",
            "Step 5: Serve hot with curry or chutney."
        ]
    },
    "poori": {
        "ingredients": ["Wheat Flour", "Water", "Salt", "Oil"],
        "recipe": [
            "Step 1: Knead wheat flour with water and salt to form a firm dough.",
            "Step 2: Roll out small portions into thin circles.",
            "Step 3: Heat oil and deep-fry until they puff up.",
            "Step 4: Serve hot with potato masala or gravy."
        ]
    },
    "idli": {
        "ingredients": ["Rice", "Urad Dal", "Fenugreek Seeds", "Salt"],
        "recipe": [
            "Step 1: Soak rice and urad dal separately for 6 hours.",
            "Step 2: Grind them to a smooth batter.",
            "Step 3: Ferment overnight.",
            "Step 4: Pour into idli molds and steam for 10 minutes.",
            "Step 5: Serve hot with chutney and sambar."
        ]
    },
    "dosa": {
        "ingredients": ["Rice", "Urad Dal", "Fenugreek Seeds", "Salt"],
        "recipe": [
            "Step 1: Soak rice and urad dal separately for 6 hours.",
            "Step 2: Grind them to a smooth batter.",
            "Step 3: Ferment overnight.",
            "Step 4: Spread a thin layer on a hot pan.",
            "Step 5: Cook until crispy and serve with chutney."
        ]
    },
     "paneer_butter_masala": {
        "ingredients": ["Paneer", "Butter", "Tomatoes", "Cream", "Cashews", "Ginger", "Garlic", "Spices"],
        "recipe": [
            "Step 1: Sauté onions, tomatoes, ginger, and garlic in butter.",
            "Step 2: Blend the mixture into a smooth paste.",
            "Step 3: Cook the paste with spices and cashew paste.",
            "Step 4: Add paneer cubes and fresh cream.",
            "Step 5: Simmer for a few minutes and serve hot with naan or rice."
        ]
    },
    "veg_fries": {
        "ingredients": ["Carrots", "Beans", "Potatoes", "Cornflour", "Spices", "Oil"],
        "recipe": [
            "Step 1: Cut vegetables into thin strips.",
            "Step 2: Coat with cornflour and spices.",
            "Step 3: Deep-fry until crispy.",
            "Step 4: Serve hot with ketchup."
        ]
    },
    "french_fries": {
        "ingredients": ["Potatoes", "Salt", "Oil"],
        "recipe": [
            "Step 1: Cut potatoes into thin strips.",
            "Step 2: Soak in cold water for 30 minutes.",
            "Step 3: Deep-fry twice for crispiness.",
            "Step 4: Sprinkle salt and serve."
        ]
    },
    "veg_masala": {
        "ingredients": ["Mixed Vegetables", "Onions", "Tomatoes", "Spices", "Ginger", "Garlic"],
        "recipe": [
            "Step 1: Sauté onions, tomatoes, ginger, and garlic.",
            "Step 2: Add chopped vegetables and cook with spices.",
            "Step 3: Simmer until vegetables are tender.",
            "Step 4: Serve hot with roti or rice."
        ]
    },
    "chola_poori": {
        "ingredients": ["Wheat Flour", "Salt", "Oil", "Chickpeas", "Onions", "Tomatoes", "Spices"],
        "recipe": [
            "Step 1: Knead wheat flour with water and salt, then roll into circles.",
            "Step 2: Deep-fry to make pooris.",
            "Step 3: Cook chickpeas with onions, tomatoes, and spices for chola.",
            "Step 4: Serve hot with pooris."
        ]
    },
    "chana_masala": {
        "ingredients": ["Chickpeas", "Onions", "Tomatoes", "Spices", "Ginger", "Garlic"],
        "recipe": [
            "Step 1: Soak and boil chickpeas.",
            "Step 2: Sauté onions, tomatoes, ginger, and garlic.",
            "Step 3: Add chickpeas and spices, then simmer.",
            "Step 4: Serve hot with rice or roti."
        ]
    },
    "chocolate_cake": {
        "ingredients": ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter", "Baking Powder"],
        "recipe": [
            "Step 1: Mix flour, cocoa powder, sugar, and baking powder.",
            "Step 2: Add eggs, butter, and mix well.",
            "Step 3: Bake at 180°C for 30 minutes.",
            "Step 4: Let cool and serve."
        ]
    },
    "cake": {
        "ingredients": ["Flour", "Sugar", "Eggs", "Butter", "Baking Powder"],
        "recipe": [
            "Step 1: Mix flour, sugar, and baking powder.",
            "Step 2: Add eggs and butter, then mix well.",
            "Step 3: Bake at 180°C for 30 minutes.",
            "Step 4: Let cool and serve."
        ]
    },
    "cupcakes": {
        "ingredients": ["Flour", "Sugar", "Eggs", "Butter", "Baking Powder", "Milk"],
        "recipe": [
            "Step 1: Mix flour, sugar, baking powder, and milk.",
            "Step 2: Add eggs and butter, then mix well.",
            "Step 3: Pour into cupcake molds and bake at 180°C for 20 minutes.",
            "Step 4: Let cool and serve."
        ]
    },
    "ice_creams": {
        "ingredients": ["Milk", "Sugar", "Vanilla Extract", "Cream"],
        "recipe": [
            "Step 1: Mix milk, sugar, and vanilla extract.",
            "Step 2: Whip cream and fold it into the mixture.",
            "Step 3: Freeze for 6 hours.",
            "Step 4: Scoop and serve."
        ]
    },
    "vada_pav": {
        "ingredients": ["Potatoes", "Chili Powder", "Garlic", "Gram Flour", "Pav Bread"],
        "recipe": [
            "Step 1: Mash boiled potatoes and mix with spices.",
            "Step 2: Make small balls and coat with gram flour batter.",
            "Step 3: Deep-fry until golden brown.",
            "Step 4: Serve in pav bread with chutney."
        ]
    },
    "vadai": {
        "ingredients": ["Urad Dal", "Onions", "Green Chilies", "Curry Leaves", "Oil"],
        "recipe": [
            "Step 1: Soak and grind urad dal into a thick batter.",
            "Step 2: Mix with chopped onions and chilies.",
            "Step 3: Shape into rounds and deep-fry.",
            "Step 4: Serve hot with chutney."
        ]
    },
    "bajji": {
        "ingredients": ["Vegetables (Banana, Potato, Eggplant)", "Gram Flour", "Spices", "Oil"],
        "recipe": [
            "Step 1: Make a batter using gram flour and spices.",
            "Step 2: Slice vegetables and dip into the batter.",
            "Step 3: Deep-fry until golden brown.",
            "Step 4: Serve hot with chutney."
        ]
    },
    "bonda": {
        "ingredients": ["Potatoes", "Gram Flour", "Spices", "Oil"],
        "recipe": [
            "Step 1: Boil and mash potatoes with spices.",
            "Step 2: Make small balls and coat with gram flour batter.",
            "Step 3: Deep-fry until golden brown.",
            "Step 4: Serve hot with chutney."
        ]
    },
    "jalebi": {
        "ingredients": ["Flour", "Yogurt", "Sugar", "Saffron", "Oil"],
        "recipe": [
            "Step 1: Make a batter with flour and yogurt, then ferment overnight.",
            "Step 2: Pipe into hot oil in spiral shapes.",
            "Step 3: Fry until crisp and dip into sugar syrup.",
            "Step 4: Serve hot."
        ]
    },
    "jangiri": {
        "ingredients": ["Urad Dal", "Sugar", "Saffron", "Oil"],
        "recipe": [
            "Step 1: Soak and grind urad dal into a thick batter.",
            "Step 2: Pipe batter into hot oil in a circular pattern.",
            "Step 3: Fry until golden and dip in sugar syrup.",
            "Step 4: Serve hot."
        ]
    }

};

    // Predefined responses for common phrases
    const greetings = ["hi", "hello", "hey", "help me"];
    const greetingResponse = "Hello! 😊 What would you like to cook today? Type the name of a dish, and I'll help you with the recipe!";
    const thanks=["thanks", "Thank you", "Thank you so much", "Thank you very much"];
    const thanksresp = ["Your welcome! 😊 "];
    // Function to send message
    function sendMessage() {
        let userText = inputField.value.trim().toLowerCase();
        if (userText === "") return;

        // Display user message instantly
        chatBox.innerHTML += `<div class="item right">
                                <div class="msg"><p>${userText}</p></div>
                              </div>`;

        // Clear input field
        inputField.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;

        // Show "thinking..." effect
        let thinkingElement = document.createElement("div");
        thinkingElement.className = "item";
        thinkingElement.innerHTML = `<div class="icon"><i class="fa fa-user"></i></div>
                                     <div class="msg"><p>Thinking...</p></div>`;
        chatBox.appendChild(thinkingElement);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate delay before showing actual response
        setTimeout(() => {
            chatBox.removeChild(thinkingElement); // Remove "thinking..."
            let botReply = getBotResponse(userText);

            chatBox.innerHTML += `<div class="item">
                                    <div class="icon"><i class="fa fa-user"></i></div>
                                    <div class="msg"><p>${botReply}</p></div>
                                  </div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 2000); // 2 seconds delay
    }

    // Chatbot logic
    function getBotResponse(input) {
        if (greetings.includes(input)) {
            return greetingResponse;
        }
        if (thanks.includes(input)) {
            return thanksresp;
        }

        for (let dish in recipes) {
            let normalizedDish = dish.replace(/_/g, " ");
            let formattedInput = input.replace(/\?|!|\./g, "");

            if (formattedInput.includes(normalizedDish) || formattedInput.replace(/ /g, "_") === dish) {
                let recipe = recipes[dish];
                return `<b>${normalizedDish.toUpperCase()}</b><br><br>
                        <b>Ingredients:</b><br> ${recipe.ingredients.join(", ")}<br><br>
                        <b>Steps:</b><br> ${recipe.recipe.join("<br>")}<br><br>
                        🍽️ Hope your dish turns out delicious! Let me know if you need more help. 😊`;
            }
        }
        return "Sorry, I don't have the recipe for that. Try asking differently!";
    }

    // Event listeners
    sendButton.addEventListener("click", sendMessage);
    inputField.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
    });
});
