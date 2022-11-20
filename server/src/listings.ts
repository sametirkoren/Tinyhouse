interface Listing {
    id: string;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating: number;
}

export const listings: Listing[] = [
    {
        id: "001",
        title: "Clean and fully furnished apartment. 5 min away from CN Tower",
        image: "",
        address: "Test",
        price: 100000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
    },
    {
        id: "002",
        title: "Test",
        image: "",
        address: "Test",
        price: 200000,
        numOfGuests: 4,
        numOfBeds: 3,
        numOfBaths: 2,
        rating: 4
    }
]