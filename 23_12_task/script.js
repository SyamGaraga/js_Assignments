let students=[
    {id: 1, s_name: "pavan", city: "Hyd" },
    {id: 2, s_name: "Arjun", city: "sec" },
    {id: 3, s_name: "Meena", city: "vizag" },
    {id: 4, s_name: "Rahul", city: "Bengaluru" },
    {id: 5, s_name: "Sita", city: "Chennai" },
    {id: 6, s_name: "vijay", city: "Mumbai" },
];
console.log("using for-in loop---------->")
for(let i in students){
    console.log(`${students[i].s_name} from ${students[i].city}`)
}
console.log("\nusing for-of loop----------->")
for(let i of students){
    console.log(`${i.s_name} from ${i.city}`)
}   