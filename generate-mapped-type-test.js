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
}

@ArgsType()
export class ArgsType${baseTypeIndex} {
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
console.timeEnd('omit ${pickTypeIndex}');

console.time('pick args ${pickTypeIndex}');
@ObjectType() export class PickArgsTest${pickTypeIndex} extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args ${pickTypeIndex}');

console.time('omit args ${pickTypeIndex}');
@ArgsType() export class OmitArgsTest${pickTypeIndex} extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args ${pickTypeIndex}');
\n`);
  }

  console.log(`console.log('created ${num} pick/omit types, total ${2 * pickTypeIndex}');\n`);
}

console.log("import { Field, ObjectType, PickType, OmitType, ArgsType } from '@nestjs/graphql';\n");
printSimpleTypes(1);
printPickOmitTypes(2);
for (let i = 0; i < 10; i++) {
  printSimpleTypes(100);
  printPickOmitTypes(2);
}
