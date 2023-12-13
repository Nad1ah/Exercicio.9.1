const myNumber: number = 50

const myString: string = 'Nadiah'

const myNumArr: number[] = [1,2,3,4]

const stringsNumbersNull: (string | number | null) [] = ['Nadiah', 6987, null]


// const objectveStringNumber: Record<string, number> = {
// const objectveStringNumber: { [key in (number | string)]}

const objectveStringNumber: Record<string|number, number> = {
    'key1': 12,
    'key2': 5,
    'key3': 243546,
1: 88,
}


///////////////////////////////////////

function sum( a: number, b: number) {
    return a + b;
}
  
  const ten = sum(5, 5);

  console.log(ten);
  