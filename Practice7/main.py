from models import Animal, Dog, Cat
from storage import save_animals, load_animals, get_young_animals


def demonstrate_polymorphism(animals: list) -> None:
    print("=== Polymorphism Demo: speak() ===")
    for animal in animals:
        print(animal.speak())
    print()


def demonstrate_descriptions(animals: list) -> None:
    print("=== Descriptions (inherited method) ===")
    for animal in animals:
        print(animal.describe())
    print()


def demonstrate_unique_methods(animals: list) -> None:
    print("=== Unique Methods ===")
    for animal in animals:
        if isinstance(animal, Dog):
            print(animal.fetch("tennis ball"))
        elif isinstance(animal, Cat):
            print(animal.purr())
            print(animal.habitat())
    print()


def main() -> None:
    generic = Animal(name="Generic", age=5, species="Unknown")
    dog1 = Dog(name="Rex", age=3, breed="German Shepherd")
    dog2 = Dog(name="Buddy", age=5, breed="Golden Retriever")
    cat1 = Cat(name="Whiskers", age=2, indoor=True)
    cat2 = Cat(name="Shadow", age=4, indoor=False)

    animals = [generic, dog1, dog2, cat1, cat2]

    print("=== All Animals (__str__) ===")
    for animal in animals:
        print(animal)
    print()

    demonstrate_polymorphism(animals)
    demonstrate_descriptions(animals)
    demonstrate_unique_methods(animals)

    print("=== Saving to data.json ===")
    save_animals(animals)
    print()

    print("=== Loading from data.json ===")
    loaded_animals = load_animals()
    print()

    print("=== Loaded objects ===")
    for animal in loaded_animals:
        print(animal)
    print()

    print("=== Young Animals (age ≤ 3) ===")
    young = get_young_animals(loaded_animals, max_age=3)
    for animal in young:
        print(f"  {animal.name} ({animal.species}, age {animal.age})")
    print()

    print("=== Error Handling Demo: missing file ===")
    load_animals("nonexistent_file.json")
    print()

    print("=== Error Handling Demo: corrupted JSON ===")
    with open("bad_data.json", "w") as f:
        f.write("{this is not valid json}")
    load_animals("bad_data.json")


if __name__ == "__main__":
    main()
