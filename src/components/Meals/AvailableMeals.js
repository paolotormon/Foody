import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "1",
    name: "Spicy Salmon Sushi",
    description: "Spicy salmon, sticky rice, and nori (seaweed)",
    price: 22.99,
  },
  {
    id: "2",
    name: "Hungarian Sausage",
    description: "Made from Ground Pork, arlic, black pepper, allspice",
    price: 10.5,
  },
  {
    id: "3",
    name: "Ramen King",
    description: "Thin japanese noodles served in fish-based soy sauce broth, with sliced pork, nori, menma, and scallions",
    price: 15.99,
  },
  {
    id: "4",
    name: "Caesar Salad",
    description:
      "Romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper",
    price: 13.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} {...meal} id={meal.id}></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
