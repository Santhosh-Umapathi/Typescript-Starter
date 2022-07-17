// Partial - Makes all properties optional
interface Starship {
  name: string;
  length: number;
}

const updateStars = (id: number, star: Partial<Starship>) => {
  console.log(id, star);
};

updateStars(1, { name: "Enterprise" });

// Required - Makes all properties required
interface StarshipTwo {
  name?: string;
  length?: number;
}

const updateStarsTwo = (id: number, star: Required<StarshipTwo>) => {
  console.log(id, star);
};

updateStarsTwo(1, { name: "Enterprise", length: 10 });

// Read Only - Makes all properties read only
interface StarshipThree {
  name?: string;
  length?: number;
}

const updateStarsThree = (id: number, star: Readonly<StarshipThree>) => {
  console.log(id, star);
};

updateStarsThree(1, { name: "Enterprise", length: 10 });

// Record - Makes all properties key/value pairs
interface StarshipFour {
  name?: string;
  length?: number;
}

const fourship: Record<string, Starship> = {
  // Key, Value
  Enterprise: {
    name: "Enterprise",
    length: 10,
  },
};
