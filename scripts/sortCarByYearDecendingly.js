function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for(i=0;i<result.length;i++){
    let flag=result.length-i-1
    for(j=0;j<flag;j++){
      let x=result[j]
      let y=result[j+1]
      if(result[j].year<result[j+1].year){
        result[j]=y
        result[j+1]=x
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
