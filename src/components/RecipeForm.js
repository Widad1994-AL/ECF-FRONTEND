import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../store/recipeActions";
import history from "../history";
import "../styles/RecipeForm.css";

function RecipeForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = (fields) => {
    const newErrors = { ...errors };

    if ("title" in fields) {
      newErrors.title =
        !fields.title.trim()
          ? "Le titre est requis."
          : fields.title.trim().length < 3
          ? "Le titre doit faire au moins 3 caractères."
          : "";
    }

    if ("description" in fields) {
      newErrors.description = !fields.description.trim()
        ? "La description est requise."
        : "";
    }

    if ("ingredients" in fields) {
      newErrors.ingredients =
        fields.ingredients.length === 0 ||
        fields.ingredients.some((ing) => !ing.trim())
          ? "Tous les ingrédients sont requis."
          : "";
    }

    if ("steps" in fields) {
      newErrors.steps =
        fields.steps.length === 0 || fields.steps.some((s) => !s.trim())
          ? "Toutes les étapes sont requises."
          : "";
    }

    if ("category" in fields) {
      newErrors.category = !fields.category.trim()
        ? "La catégorie est requise."
        : "";
    }

    setErrors(newErrors);
  };

  const isFormValid = () => {
    return (
      title.trim().length >= 3 &&
      description.trim().length > 0 &&
      category.trim() !== "" &&
      ingredients.length > 0 &&
      steps.length > 0 &&
      !ingredients.some((i) => i.trim() === "") &&
      !steps.some((s) => s.trim() === "")
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setImage(reader.result);
      reader.onerror = (err) => console.error("Erreur image", err);
    }
  };

  const handleIngredientChange = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
    validate({ ingredients: updated });
  };

  const addIngredient = () => setIngredients([...ingredients, ""]);

  const removeIngredient = (index) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
    validate({ ingredients: updated });
  };

  const handleStepChange = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
    validate({ steps: updated });
  };

  const addStep = () => setSteps([...steps, ""]);

  const removeStep = (index) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
    validate({ steps: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      title,
      description,
      ingredients,
      steps,
      category,
      image,
      isFavorite: false,
    };

    dispatch(addRecipe(newRecipe));
    history.push("/");
  };

  return (
    <div className="recipe-form-container">
      <h2>Ajouter une Recette</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              validate({ title: e.target.value });
            }}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              validate({ description: e.target.value });
            }}
          ></textarea>
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>

        <div>
          <label>Ingrédients :</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "5px" }}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) =>
                  handleIngredientChange(index, e.target.value)
                }
                style={{ flex: 1 }}
              />
              {ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  style={{ marginLeft: "5px" }}
                >
                  -
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addIngredient}>
            Ajouter un ingrédient
          </button>
          {errors.ingredients && (
            <span className="error">{errors.ingredients}</span>
          )}
        </div>

        <div>
          <label>Étapes :</label>
          {steps.map((step, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "5px" }}>
              <textarea
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                style={{ flex: 1 }}
              />
              {steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStep(index)}
                  style={{ marginLeft: "5px" }}
                >
                  -
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addStep}>
            Ajouter une étape
          </button>
          {errors.steps && <span className="error">{errors.steps}</span>}
        </div>

        <div>
          <label>Catégorie:</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              validate({ category: e.target.value });
            }}
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="entrees">Entrées</option>
            <option value="plats">Plats</option>
            <option value="desserts">Desserts</option>
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && (
            <img src={image} alt="Preview" className="image-preview" />
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid()}
          className={!isFormValid() ? "submit-disabled" : ""}
        >
          Ajouter la recette
        </button>
      </form>
    </div>
  );
}

export default RecipeForm;
