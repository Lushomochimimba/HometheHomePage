import { Meteor } from 'meteor/meteor';
import Infoz from '../collections.js';
import {Categories} from '../collections.js';
import {Demo} from '../collections.js';



Meteor.publish('infoz',()=>{
    return Infoz.find();
});
Meteor.publish('categories',()=>{
    return Categories.find({});
});

Meteor.publish('demo',()=>{
    return Demo.find({});
});