import json

from models import Animal, Dog, Cat

DATA_FILE = "data.json"


def save_animals(animals: list, filepath: str = DATA_FILE) -> None:
    try:
        # List comprehension: convert every animal object to a dict
        data = [animal.to_dict() for animal in animals]

        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4)

        print(f"Saved {len(data)} animal(s) to '{filepath}'.")

    except TypeError as e:
        print(f"[TypeError] Could not serialize data: {e}")
    except OSError as e:
        print(f"[OSError] Could not write to '{filepath}': {e}")
    finally:
        print("save_animals() finished.")


def load_animals(filepath: str = DATA_FILE) -> list:
    animals = []
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)

        for entry in data:
            animal_type = entry.get("type")

            if animal_type == "Dog":
                animal = Dog(
                    name=entry["name"],
                    age=int(entry["age"]),
                    breed=entry["breed"],
                )
            elif animal_type == "Cat":
                animal = Cat(
                    name=entry["name"],
                    age=int(entry["age"]),
                    indoor=bool(entry["indoor"]),
                )
            elif animal_type == "Animal":
                animal = Animal(
                    name=entry["name"],
                    age=int(entry["age"]),
                    species=entry["species"],
                )
            else:
                print(f"[Warning] Unknown animal type '{animal_type}' — skipping.")
                continue

            animals.append(animal)

        print(f"✓ Loaded {len(animals)} animal(s) from '{filepath}'.")

    except FileNotFoundError:
        print(f"[FileNotFoundError] '{filepath}' not found. No data loaded.")
    except json.JSONDecodeError as e:
        print(f"[JSONDecodeError] Failed to parse '{filepath}': {e}")
    except (ValueError, KeyError) as e:
        print(f"[DataError] Invalid data while loading animals: {e}")
    finally:
        print("load_animals() finished.")

    return animals


def get_young_animals(animals: list, max_age: int = 3) -> list:
    return [a for a in animals if a.age <= max_age]
