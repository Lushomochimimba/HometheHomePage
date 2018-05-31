import {Mongo} from 'meteor/mongo';


const Infoz = new Mongo.Collection('infoz');
export const Demo = new Mongo.Collection('demo');
export const Categories = new Mongo.Collection('categories');
export default Infoz;