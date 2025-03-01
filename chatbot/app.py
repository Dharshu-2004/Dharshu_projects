from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

recipes = {
    "idli": "Ingredients: Rice, Urad Dal, Salt. Instructions: Soak, grind, ferment, steam.",
    "dosa": "Ingredients: Rice, Urad Dal, Salt. Instructions: Soak, grind, ferment, fry."
}

@app.route('/get_recipe', methods=['GET'])
def get_recipe():
    name = request.args.get('name', '').lower()
    recipe = recipes.get(name, "Recipe not found")
    return jsonify({"recipe": recipe})

if __name__ == '__main__':
    app.run(debug=True)
