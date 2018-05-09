import { Meteor } from  'meteor/meteor';



Meteor.methods({
'printSomething':(arrItems)=>{
  console.log(`The message is our : ${arrItems[0]} ${arrItems[1]} ${arrItems[2]}`);
 return arrItems
},
// 'finisher': () => {
//   console.log("")
  
});
