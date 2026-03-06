class Footballer:
    def __init__(self, name, attack, defense, speed, passing, kick):
        self.name = name
        self.attack = attack
        self.defense = defense
        self.speed = speed
        self.passing = passing
        self.kick = kick

    def role(self):
        return "Footballer"

    def power(self):
        return (self.attack + self.defense + self.kick + self.kick + self.speed + self.passing) / 6

    def __str__(self):
        return f"{self.name} ({self.role()}): {self.power()}"


class Defender(Footballer):
    def __init__(self, name, attack, defense, speed, passing, kick, tackles):
        super().__init__(name, attack, defense, speed, passing, kick)
        self.tackles = tackles

    def role(self):
        return "Defender"

    def tackle(self):
        return f"{self.name} makes a strong tackle!"

    def benched(self):
        return f"{self.name} is benched."


class Striker(Footballer):
    def __init__(self, name, attack, defense, speed, passing, kick, goals):
        super().__init__(name, attack, defense, speed, passing, kick)
        self.goals = goals

    def role(self):
        return "Striker"

    def scoreGoal(self):
        self.goals += 1
        return f"{self.name} scores a goal!"


class Goalkeeper(Footballer):
    def __init__(self, name, attack, defense, speed, passing, kick, saves):
        super().__init__(name, attack, defense, speed, passing, kick)
        self.saves = saves

    def role(self):
        return "Goalkeeper"

    def saveGoal(self):
        self.saves += 1
        return f"{self.name} makes a save!"