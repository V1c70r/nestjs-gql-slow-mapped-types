'use strict';

let baseTypeIndex = 0;
function printSimpleTypes(num) {
  for (let i = 1; i <= num; i++) {
    baseTypeIndex++;
console.log(`@ObjectType()
export class SimpleType${baseTypeIndex} {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}\n`);
  }

  console.log(`console.log('created ${num} simple types, total ${baseTypeIndex}');\n`);
}

let pickTypeIndex = 0;
function printPickOmitTypes(num) {
  for (let z = 1; z <= num; z++) {
    pickTypeIndex++;
    console.log(`console.time('pick ${pickTypeIndex}');
@ObjectType() export class PickTest${pickTypeIndex} extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick ${pickTypeIndex}');

console.time('omit ${pickTypeIndex}');
@ObjectType() export class OmitTest${pickTypeIndex} extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit ${pickTypeIndex}');\n`);
  }

  console.log(`console.log('create ${num} pick/omit types, total ${pickTypeIndex}');\n`);
}

console.log("import { Field, ObjectType, PickType, OmitType } from '@nestjs/graphql';\n");
printSimpleTypes(1);
printPickOmitTypes(5);
for (let i = 0; i < 15; i++) {
  printSimpleTypes(100);
  printPickOmitTypes(5);
}
