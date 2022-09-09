function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for(i=0;i<cars.length;i++){
    let flag=cars.length-i-1
    for(j=0;j<flag;j++){
      let x=cars[j]
      let y=cars[j+1]
      if(cars[j].year<cars[j+1].year){
        cars[j]=y
        cars[j+1]=x
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return cars;
}
