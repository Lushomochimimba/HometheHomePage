import { Meteor } from  'meteor/meteor';
import Infoz from "./collections.js";


Meteor.methods({
  'infoz.create':(info)=>{
   const res = Infoz.insert(info);
   console.log(res);
   return res;
  }
});