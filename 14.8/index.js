/*
Используя Intl.Collator, отсортируйте массив:

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК

В этом примере порядок сортировки не должен зависеть от регистра.
Что касается буквы "ё", то мы следуем обычным правилам сортировки буквы ё, по которым «е» и «ё» считаются одной и той же буквой, за исключением случая, когда два слова отличаются только в позиции буквы «е» / «ё» – тогда слово с «е» ставится первым. */

//Здесь подойдут стандартные параметры сравнения:

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort((a, b) => collator.compare(a, b));

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК

// А вот, что было бы при обычном вызове sort():

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

alert( animals.sort() ); // АИСТ,ЯК,енот,ехидна,тигр,ёж