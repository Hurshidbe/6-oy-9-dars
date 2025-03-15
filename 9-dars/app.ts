// type a = string;
// type b = number;
// type c = a | b;
// const array: c[] = [12, "vrevrev"];
// console.log(array);

interface Iuser {
  username: string;
  password: string;
  is_email_verified: boolean;
  age: number;
  is_phone_verified?: boolean;
}

const person: Iuser = {
  username: "hurshidbe",
  is_email_verified: true,
  password: "salomaat",
  age: 19,
  is_phone_verified: true,
};

console.log(person);

interface IAuthors {
  firstname: string;
  lastname: string;
}

interface IPost {
  title: string;
  description: string;
  page_count?: number;
  authors?: IAuthors[];
}

const posts: IPost[] = [
  {
    title: "atomic habits",
    description: "successfully habit growing",
    page_count: 256,
    authors: [{ firstname: "James", lastname: "Clear" }],
  },
  {
    title: "money psycalogy",
    description: "how to serve money truly",
    page_count: 256,
    authors: [{ firstname: "Morgan", lastname: "Khauzel" }],
  },
];

console.log(JSON.stringify(posts));

type kinolar = "lolaopa" | "loki";

interface Imovie {
  title: kinolar;
}

const film: Imovie = {
  title: "lolaopa",
};

console.log(film);

interface Igeneric<T> {
  title: T;
}

const genericType: Igeneric<string> = {
  title: "otti beli",
};

console.log(genericType);
