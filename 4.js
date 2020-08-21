let x=parseInt(prompt("Внеси X"))
let y=parseInt(prompt("Внеси Y"))
if(x>0&&y>0){
  alert("Квадрант 1")
}
else if(x<0&&y>0){
  alert("Квадрант 2")
}
else if(x<0&&y<0){
  alert("Квадрант 3")
}
else if(x>0&&y<0){
  alert("Квадрант 4")
}
else if(x==0&&y==0){
  alert("Точката  лежи на координатниот почеток")
}
else if(x==0){
  alert("Се наоѓа на Х оска")
}
else if(y==0){
  alert("Се наоѓа на Y оска")
}