class Animal:
    def __init__(self, name: str, age: int, species: str):
        self.name = name
        self.age = age
        self.species = species

    def speak(self) -> str:
        return f"{self.name} makes a generic animal sound."

    def describe(self) -> str:
        return f"{self.name} is a {self.species} that is {self.age} year(s) old."

    def to_dict(self) -> dict:
        return {"type": "Animal", "name": self.name, "age": self.age, "species": self.species}

    def __str__(self) -> str:
        return f"Animal(name={self.name!r}, age={self.age}, species={self.species!r})"


class Dog(Animal):
    def __init__(self, name: str, age: int, breed: str):
        super().__init__(name, age, species="Dog")
        self.breed = breed

    def speak(self) -> str:
        return f"{self.name} says: Woof! Woof!"

    def fetch(self, item: str) -> str:
        return f"{self.name} fetches the {item} and brings it back!"

    def to_dict(self) -> dict:
        return {"type": "Dog", "name": self.name, "age": self.age, "breed": self.breed}

    def __str__(self) -> str:
        return f"Dog(name={self.name!r}, age={self.age}, breed={self.breed!r})"


class Cat(Animal):
    def __init__(self, name: str, age: int, indoor: bool):
        super().__init__(name, age, species="Cat")
        self.indoor = indoor

    def speak(self) -> str:
        return f"{self.name} says: Meow~"

    def purr(self) -> str:
        return f"{self.name} purrs contentedly... Purrrrr."

    def habitat(self) -> str:
        location = "indoor" if self.indoor else "outdoor"
        return f"{self.name} is an {location} cat."

    def to_dict(self) -> dict:
        return {"type": "Cat", "name": self.name, "age": self.age, "indoor": self.indoor}

    def __str__(self) -> str:
        return f"Cat(name={self.name!r}, age={self.age}, indoor={self.indoor})"
