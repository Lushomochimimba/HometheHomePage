import { Meteor } from 'meteor/meteor';
import Infoz from '../collections.js';

Meteor.publish('infoz',()=>{
    
    return Infoz.find();
});
