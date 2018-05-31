import { Meteor } from  'meteor/meteor';
import Infoz from "./collections.js";
import {Categories} from './collections.js';
import {Demo} from './collections.js';




Meteor.methods({
  'infoz.create':(info)=>{
   const res = Infoz.insert(info);
   console.log(res);
   return res;
  }
});

Meteor.methods({
  'categories.create':(category)=>{
   const res = Categories.insert(category);
   console.log(res);
   return res;
  }
});

Meteor.methods({
  'infoz.deleteAccount':(user)=> Meteor.users.remove(this.userId)  
});

// Meteor.methods({
//   'infoz.deleteAccount':(info)=>Infoz.remove(info)
// });