import { Field, ObjectType, PickType, OmitType, ArgsType } from '@nestjs/graphql';

@ObjectType()
export class SimpleType1 {
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
export class ArgsType1 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 1 simple types, total 1');

console.time('pick 1');
@ObjectType() export class PickTest1 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 1');

console.time('omit 1');
@ObjectType() export class OmitTest1 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 1');

console.time('pick args 1');
@ObjectType() export class PickArgsTest1 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 1');

console.time('omit args 1');
@ArgsType() export class OmitArgsTest1 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 1');


console.time('pick 2');
@ObjectType() export class PickTest2 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 2');

console.time('omit 2');
@ObjectType() export class OmitTest2 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 2');

console.time('pick args 2');
@ObjectType() export class PickArgsTest2 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 2');

console.time('omit args 2');
@ArgsType() export class OmitArgsTest2 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 2');


console.log('created 2 pick/omit types, total 4');

@ObjectType()
export class SimpleType2 {
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
export class ArgsType2 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType3 {
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
export class ArgsType3 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType4 {
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
export class ArgsType4 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType5 {
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
export class ArgsType5 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType6 {
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
export class ArgsType6 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType7 {
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
export class ArgsType7 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType8 {
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
export class ArgsType8 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType9 {
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
export class ArgsType9 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType10 {
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
export class ArgsType10 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType11 {
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
export class ArgsType11 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType12 {
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
export class ArgsType12 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType13 {
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
export class ArgsType13 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType14 {
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
export class ArgsType14 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType15 {
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
export class ArgsType15 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType16 {
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
export class ArgsType16 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType17 {
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
export class ArgsType17 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType18 {
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
export class ArgsType18 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType19 {
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
export class ArgsType19 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType20 {
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
export class ArgsType20 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType21 {
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
export class ArgsType21 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType22 {
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
export class ArgsType22 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType23 {
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
export class ArgsType23 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType24 {
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
export class ArgsType24 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType25 {
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
export class ArgsType25 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType26 {
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
export class ArgsType26 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType27 {
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
export class ArgsType27 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType28 {
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
export class ArgsType28 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType29 {
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
export class ArgsType29 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType30 {
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
export class ArgsType30 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType31 {
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
export class ArgsType31 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType32 {
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
export class ArgsType32 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType33 {
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
export class ArgsType33 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType34 {
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
export class ArgsType34 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType35 {
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
export class ArgsType35 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType36 {
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
export class ArgsType36 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType37 {
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
export class ArgsType37 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType38 {
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
export class ArgsType38 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType39 {
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
export class ArgsType39 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType40 {
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
export class ArgsType40 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType41 {
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
export class ArgsType41 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType42 {
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
export class ArgsType42 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType43 {
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
export class ArgsType43 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType44 {
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
export class ArgsType44 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType45 {
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
export class ArgsType45 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType46 {
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
export class ArgsType46 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType47 {
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
export class ArgsType47 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType48 {
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
export class ArgsType48 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType49 {
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
export class ArgsType49 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType50 {
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
export class ArgsType50 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType51 {
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
export class ArgsType51 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType52 {
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
export class ArgsType52 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType53 {
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
export class ArgsType53 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType54 {
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
export class ArgsType54 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType55 {
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
export class ArgsType55 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType56 {
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
export class ArgsType56 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType57 {
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
export class ArgsType57 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType58 {
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
export class ArgsType58 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType59 {
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
export class ArgsType59 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType60 {
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
export class ArgsType60 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType61 {
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
export class ArgsType61 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType62 {
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
export class ArgsType62 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType63 {
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
export class ArgsType63 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType64 {
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
export class ArgsType64 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType65 {
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
export class ArgsType65 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType66 {
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
export class ArgsType66 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType67 {
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
export class ArgsType67 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType68 {
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
export class ArgsType68 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType69 {
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
export class ArgsType69 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType70 {
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
export class ArgsType70 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType71 {
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
export class ArgsType71 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType72 {
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
export class ArgsType72 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType73 {
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
export class ArgsType73 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType74 {
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
export class ArgsType74 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType75 {
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
export class ArgsType75 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType76 {
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
export class ArgsType76 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType77 {
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
export class ArgsType77 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType78 {
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
export class ArgsType78 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType79 {
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
export class ArgsType79 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType80 {
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
export class ArgsType80 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType81 {
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
export class ArgsType81 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType82 {
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
export class ArgsType82 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType83 {
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
export class ArgsType83 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType84 {
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
export class ArgsType84 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType85 {
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
export class ArgsType85 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType86 {
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
export class ArgsType86 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType87 {
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
export class ArgsType87 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType88 {
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
export class ArgsType88 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType89 {
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
export class ArgsType89 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType90 {
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
export class ArgsType90 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType91 {
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
export class ArgsType91 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType92 {
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
export class ArgsType92 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType93 {
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
export class ArgsType93 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType94 {
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
export class ArgsType94 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType95 {
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
export class ArgsType95 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType96 {
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
export class ArgsType96 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType97 {
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
export class ArgsType97 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType98 {
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
export class ArgsType98 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType99 {
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
export class ArgsType99 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType100 {
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
export class ArgsType100 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType101 {
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
export class ArgsType101 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 101');

console.time('pick 3');
@ObjectType() export class PickTest3 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 3');

console.time('omit 3');
@ObjectType() export class OmitTest3 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 3');

console.time('pick args 3');
@ObjectType() export class PickArgsTest3 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 3');

console.time('omit args 3');
@ArgsType() export class OmitArgsTest3 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 3');


console.time('pick 4');
@ObjectType() export class PickTest4 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 4');

console.time('omit 4');
@ObjectType() export class OmitTest4 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 4');

console.time('pick args 4');
@ObjectType() export class PickArgsTest4 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 4');

console.time('omit args 4');
@ArgsType() export class OmitArgsTest4 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 4');


console.log('created 2 pick/omit types, total 8');

@ObjectType()
export class SimpleType102 {
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
export class ArgsType102 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType103 {
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
export class ArgsType103 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType104 {
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
export class ArgsType104 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType105 {
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
export class ArgsType105 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType106 {
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
export class ArgsType106 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType107 {
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
export class ArgsType107 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType108 {
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
export class ArgsType108 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType109 {
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
export class ArgsType109 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType110 {
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
export class ArgsType110 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType111 {
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
export class ArgsType111 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType112 {
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
export class ArgsType112 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType113 {
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
export class ArgsType113 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType114 {
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
export class ArgsType114 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType115 {
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
export class ArgsType115 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType116 {
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
export class ArgsType116 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType117 {
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
export class ArgsType117 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType118 {
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
export class ArgsType118 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType119 {
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
export class ArgsType119 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType120 {
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
export class ArgsType120 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType121 {
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
export class ArgsType121 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType122 {
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
export class ArgsType122 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType123 {
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
export class ArgsType123 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType124 {
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
export class ArgsType124 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType125 {
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
export class ArgsType125 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType126 {
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
export class ArgsType126 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType127 {
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
export class ArgsType127 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType128 {
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
export class ArgsType128 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType129 {
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
export class ArgsType129 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType130 {
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
export class ArgsType130 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType131 {
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
export class ArgsType131 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType132 {
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
export class ArgsType132 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType133 {
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
export class ArgsType133 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType134 {
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
export class ArgsType134 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType135 {
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
export class ArgsType135 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType136 {
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
export class ArgsType136 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType137 {
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
export class ArgsType137 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType138 {
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
export class ArgsType138 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType139 {
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
export class ArgsType139 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType140 {
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
export class ArgsType140 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType141 {
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
export class ArgsType141 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType142 {
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
export class ArgsType142 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType143 {
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
export class ArgsType143 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType144 {
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
export class ArgsType144 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType145 {
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
export class ArgsType145 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType146 {
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
export class ArgsType146 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType147 {
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
export class ArgsType147 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType148 {
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
export class ArgsType148 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType149 {
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
export class ArgsType149 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType150 {
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
export class ArgsType150 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType151 {
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
export class ArgsType151 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType152 {
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
export class ArgsType152 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType153 {
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
export class ArgsType153 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType154 {
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
export class ArgsType154 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType155 {
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
export class ArgsType155 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType156 {
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
export class ArgsType156 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType157 {
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
export class ArgsType157 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType158 {
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
export class ArgsType158 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType159 {
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
export class ArgsType159 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType160 {
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
export class ArgsType160 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType161 {
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
export class ArgsType161 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType162 {
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
export class ArgsType162 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType163 {
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
export class ArgsType163 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType164 {
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
export class ArgsType164 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType165 {
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
export class ArgsType165 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType166 {
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
export class ArgsType166 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType167 {
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
export class ArgsType167 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType168 {
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
export class ArgsType168 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType169 {
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
export class ArgsType169 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType170 {
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
export class ArgsType170 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType171 {
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
export class ArgsType171 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType172 {
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
export class ArgsType172 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType173 {
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
export class ArgsType173 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType174 {
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
export class ArgsType174 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType175 {
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
export class ArgsType175 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType176 {
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
export class ArgsType176 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType177 {
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
export class ArgsType177 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType178 {
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
export class ArgsType178 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType179 {
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
export class ArgsType179 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType180 {
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
export class ArgsType180 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType181 {
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
export class ArgsType181 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType182 {
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
export class ArgsType182 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType183 {
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
export class ArgsType183 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType184 {
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
export class ArgsType184 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType185 {
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
export class ArgsType185 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType186 {
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
export class ArgsType186 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType187 {
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
export class ArgsType187 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType188 {
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
export class ArgsType188 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType189 {
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
export class ArgsType189 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType190 {
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
export class ArgsType190 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType191 {
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
export class ArgsType191 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType192 {
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
export class ArgsType192 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType193 {
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
export class ArgsType193 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType194 {
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
export class ArgsType194 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType195 {
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
export class ArgsType195 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType196 {
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
export class ArgsType196 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType197 {
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
export class ArgsType197 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType198 {
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
export class ArgsType198 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType199 {
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
export class ArgsType199 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType200 {
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
export class ArgsType200 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType201 {
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
export class ArgsType201 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 201');

console.time('pick 5');
@ObjectType() export class PickTest5 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 5');

console.time('omit 5');
@ObjectType() export class OmitTest5 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 5');

console.time('pick args 5');
@ObjectType() export class PickArgsTest5 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 5');

console.time('omit args 5');
@ArgsType() export class OmitArgsTest5 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 5');


console.time('pick 6');
@ObjectType() export class PickTest6 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 6');

console.time('omit 6');
@ObjectType() export class OmitTest6 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 6');

console.time('pick args 6');
@ObjectType() export class PickArgsTest6 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 6');

console.time('omit args 6');
@ArgsType() export class OmitArgsTest6 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 6');


console.log('created 2 pick/omit types, total 12');

@ObjectType()
export class SimpleType202 {
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
export class ArgsType202 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType203 {
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
export class ArgsType203 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType204 {
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
export class ArgsType204 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType205 {
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
export class ArgsType205 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType206 {
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
export class ArgsType206 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType207 {
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
export class ArgsType207 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType208 {
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
export class ArgsType208 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType209 {
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
export class ArgsType209 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType210 {
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
export class ArgsType210 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType211 {
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
export class ArgsType211 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType212 {
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
export class ArgsType212 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType213 {
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
export class ArgsType213 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType214 {
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
export class ArgsType214 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType215 {
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
export class ArgsType215 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType216 {
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
export class ArgsType216 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType217 {
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
export class ArgsType217 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType218 {
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
export class ArgsType218 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType219 {
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
export class ArgsType219 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType220 {
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
export class ArgsType220 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType221 {
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
export class ArgsType221 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType222 {
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
export class ArgsType222 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType223 {
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
export class ArgsType223 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType224 {
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
export class ArgsType224 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType225 {
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
export class ArgsType225 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType226 {
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
export class ArgsType226 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType227 {
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
export class ArgsType227 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType228 {
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
export class ArgsType228 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType229 {
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
export class ArgsType229 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType230 {
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
export class ArgsType230 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType231 {
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
export class ArgsType231 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType232 {
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
export class ArgsType232 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType233 {
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
export class ArgsType233 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType234 {
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
export class ArgsType234 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType235 {
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
export class ArgsType235 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType236 {
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
export class ArgsType236 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType237 {
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
export class ArgsType237 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType238 {
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
export class ArgsType238 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType239 {
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
export class ArgsType239 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType240 {
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
export class ArgsType240 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType241 {
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
export class ArgsType241 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType242 {
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
export class ArgsType242 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType243 {
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
export class ArgsType243 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType244 {
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
export class ArgsType244 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType245 {
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
export class ArgsType245 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType246 {
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
export class ArgsType246 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType247 {
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
export class ArgsType247 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType248 {
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
export class ArgsType248 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType249 {
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
export class ArgsType249 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType250 {
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
export class ArgsType250 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType251 {
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
export class ArgsType251 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType252 {
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
export class ArgsType252 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType253 {
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
export class ArgsType253 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType254 {
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
export class ArgsType254 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType255 {
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
export class ArgsType255 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType256 {
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
export class ArgsType256 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType257 {
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
export class ArgsType257 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType258 {
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
export class ArgsType258 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType259 {
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
export class ArgsType259 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType260 {
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
export class ArgsType260 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType261 {
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
export class ArgsType261 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType262 {
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
export class ArgsType262 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType263 {
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
export class ArgsType263 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType264 {
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
export class ArgsType264 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType265 {
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
export class ArgsType265 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType266 {
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
export class ArgsType266 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType267 {
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
export class ArgsType267 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType268 {
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
export class ArgsType268 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType269 {
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
export class ArgsType269 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType270 {
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
export class ArgsType270 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType271 {
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
export class ArgsType271 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType272 {
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
export class ArgsType272 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType273 {
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
export class ArgsType273 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType274 {
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
export class ArgsType274 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType275 {
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
export class ArgsType275 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType276 {
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
export class ArgsType276 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType277 {
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
export class ArgsType277 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType278 {
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
export class ArgsType278 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType279 {
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
export class ArgsType279 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType280 {
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
export class ArgsType280 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType281 {
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
export class ArgsType281 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType282 {
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
export class ArgsType282 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType283 {
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
export class ArgsType283 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType284 {
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
export class ArgsType284 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType285 {
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
export class ArgsType285 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType286 {
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
export class ArgsType286 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType287 {
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
export class ArgsType287 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType288 {
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
export class ArgsType288 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType289 {
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
export class ArgsType289 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType290 {
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
export class ArgsType290 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType291 {
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
export class ArgsType291 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType292 {
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
export class ArgsType292 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType293 {
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
export class ArgsType293 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType294 {
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
export class ArgsType294 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType295 {
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
export class ArgsType295 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType296 {
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
export class ArgsType296 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType297 {
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
export class ArgsType297 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType298 {
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
export class ArgsType298 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType299 {
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
export class ArgsType299 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType300 {
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
export class ArgsType300 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType301 {
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
export class ArgsType301 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 301');

console.time('pick 7');
@ObjectType() export class PickTest7 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 7');

console.time('omit 7');
@ObjectType() export class OmitTest7 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 7');

console.time('pick args 7');
@ObjectType() export class PickArgsTest7 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 7');

console.time('omit args 7');
@ArgsType() export class OmitArgsTest7 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 7');


console.time('pick 8');
@ObjectType() export class PickTest8 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 8');

console.time('omit 8');
@ObjectType() export class OmitTest8 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 8');

console.time('pick args 8');
@ObjectType() export class PickArgsTest8 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 8');

console.time('omit args 8');
@ArgsType() export class OmitArgsTest8 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 8');


console.log('created 2 pick/omit types, total 16');

@ObjectType()
export class SimpleType302 {
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
export class ArgsType302 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType303 {
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
export class ArgsType303 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType304 {
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
export class ArgsType304 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType305 {
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
export class ArgsType305 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType306 {
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
export class ArgsType306 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType307 {
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
export class ArgsType307 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType308 {
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
export class ArgsType308 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType309 {
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
export class ArgsType309 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType310 {
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
export class ArgsType310 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType311 {
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
export class ArgsType311 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType312 {
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
export class ArgsType312 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType313 {
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
export class ArgsType313 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType314 {
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
export class ArgsType314 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType315 {
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
export class ArgsType315 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType316 {
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
export class ArgsType316 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType317 {
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
export class ArgsType317 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType318 {
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
export class ArgsType318 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType319 {
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
export class ArgsType319 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType320 {
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
export class ArgsType320 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType321 {
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
export class ArgsType321 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType322 {
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
export class ArgsType322 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType323 {
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
export class ArgsType323 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType324 {
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
export class ArgsType324 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType325 {
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
export class ArgsType325 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType326 {
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
export class ArgsType326 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType327 {
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
export class ArgsType327 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType328 {
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
export class ArgsType328 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType329 {
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
export class ArgsType329 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType330 {
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
export class ArgsType330 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType331 {
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
export class ArgsType331 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType332 {
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
export class ArgsType332 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType333 {
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
export class ArgsType333 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType334 {
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
export class ArgsType334 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType335 {
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
export class ArgsType335 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType336 {
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
export class ArgsType336 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType337 {
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
export class ArgsType337 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType338 {
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
export class ArgsType338 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType339 {
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
export class ArgsType339 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType340 {
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
export class ArgsType340 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType341 {
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
export class ArgsType341 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType342 {
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
export class ArgsType342 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType343 {
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
export class ArgsType343 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType344 {
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
export class ArgsType344 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType345 {
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
export class ArgsType345 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType346 {
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
export class ArgsType346 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType347 {
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
export class ArgsType347 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType348 {
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
export class ArgsType348 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType349 {
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
export class ArgsType349 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType350 {
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
export class ArgsType350 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType351 {
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
export class ArgsType351 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType352 {
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
export class ArgsType352 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType353 {
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
export class ArgsType353 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType354 {
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
export class ArgsType354 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType355 {
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
export class ArgsType355 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType356 {
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
export class ArgsType356 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType357 {
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
export class ArgsType357 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType358 {
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
export class ArgsType358 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType359 {
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
export class ArgsType359 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType360 {
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
export class ArgsType360 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType361 {
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
export class ArgsType361 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType362 {
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
export class ArgsType362 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType363 {
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
export class ArgsType363 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType364 {
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
export class ArgsType364 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType365 {
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
export class ArgsType365 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType366 {
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
export class ArgsType366 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType367 {
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
export class ArgsType367 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType368 {
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
export class ArgsType368 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType369 {
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
export class ArgsType369 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType370 {
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
export class ArgsType370 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType371 {
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
export class ArgsType371 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType372 {
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
export class ArgsType372 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType373 {
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
export class ArgsType373 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType374 {
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
export class ArgsType374 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType375 {
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
export class ArgsType375 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType376 {
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
export class ArgsType376 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType377 {
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
export class ArgsType377 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType378 {
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
export class ArgsType378 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType379 {
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
export class ArgsType379 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType380 {
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
export class ArgsType380 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType381 {
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
export class ArgsType381 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType382 {
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
export class ArgsType382 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType383 {
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
export class ArgsType383 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType384 {
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
export class ArgsType384 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType385 {
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
export class ArgsType385 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType386 {
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
export class ArgsType386 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType387 {
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
export class ArgsType387 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType388 {
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
export class ArgsType388 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType389 {
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
export class ArgsType389 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType390 {
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
export class ArgsType390 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType391 {
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
export class ArgsType391 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType392 {
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
export class ArgsType392 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType393 {
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
export class ArgsType393 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType394 {
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
export class ArgsType394 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType395 {
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
export class ArgsType395 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType396 {
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
export class ArgsType396 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType397 {
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
export class ArgsType397 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType398 {
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
export class ArgsType398 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType399 {
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
export class ArgsType399 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType400 {
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
export class ArgsType400 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType401 {
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
export class ArgsType401 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 401');

console.time('pick 9');
@ObjectType() export class PickTest9 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 9');

console.time('omit 9');
@ObjectType() export class OmitTest9 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 9');

console.time('pick args 9');
@ObjectType() export class PickArgsTest9 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 9');

console.time('omit args 9');
@ArgsType() export class OmitArgsTest9 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 9');


console.time('pick 10');
@ObjectType() export class PickTest10 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 10');

console.time('omit 10');
@ObjectType() export class OmitTest10 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 10');

console.time('pick args 10');
@ObjectType() export class PickArgsTest10 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 10');

console.time('omit args 10');
@ArgsType() export class OmitArgsTest10 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 10');


console.log('created 2 pick/omit types, total 20');

@ObjectType()
export class SimpleType402 {
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
export class ArgsType402 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType403 {
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
export class ArgsType403 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType404 {
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
export class ArgsType404 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType405 {
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
export class ArgsType405 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType406 {
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
export class ArgsType406 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType407 {
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
export class ArgsType407 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType408 {
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
export class ArgsType408 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType409 {
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
export class ArgsType409 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType410 {
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
export class ArgsType410 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType411 {
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
export class ArgsType411 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType412 {
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
export class ArgsType412 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType413 {
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
export class ArgsType413 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType414 {
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
export class ArgsType414 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType415 {
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
export class ArgsType415 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType416 {
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
export class ArgsType416 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType417 {
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
export class ArgsType417 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType418 {
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
export class ArgsType418 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType419 {
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
export class ArgsType419 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType420 {
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
export class ArgsType420 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType421 {
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
export class ArgsType421 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType422 {
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
export class ArgsType422 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType423 {
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
export class ArgsType423 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType424 {
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
export class ArgsType424 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType425 {
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
export class ArgsType425 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType426 {
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
export class ArgsType426 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType427 {
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
export class ArgsType427 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType428 {
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
export class ArgsType428 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType429 {
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
export class ArgsType429 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType430 {
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
export class ArgsType430 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType431 {
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
export class ArgsType431 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType432 {
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
export class ArgsType432 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType433 {
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
export class ArgsType433 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType434 {
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
export class ArgsType434 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType435 {
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
export class ArgsType435 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType436 {
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
export class ArgsType436 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType437 {
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
export class ArgsType437 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType438 {
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
export class ArgsType438 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType439 {
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
export class ArgsType439 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType440 {
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
export class ArgsType440 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType441 {
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
export class ArgsType441 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType442 {
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
export class ArgsType442 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType443 {
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
export class ArgsType443 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType444 {
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
export class ArgsType444 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType445 {
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
export class ArgsType445 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType446 {
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
export class ArgsType446 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType447 {
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
export class ArgsType447 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType448 {
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
export class ArgsType448 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType449 {
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
export class ArgsType449 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType450 {
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
export class ArgsType450 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType451 {
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
export class ArgsType451 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType452 {
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
export class ArgsType452 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType453 {
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
export class ArgsType453 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType454 {
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
export class ArgsType454 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType455 {
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
export class ArgsType455 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType456 {
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
export class ArgsType456 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType457 {
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
export class ArgsType457 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType458 {
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
export class ArgsType458 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType459 {
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
export class ArgsType459 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType460 {
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
export class ArgsType460 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType461 {
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
export class ArgsType461 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType462 {
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
export class ArgsType462 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType463 {
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
export class ArgsType463 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType464 {
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
export class ArgsType464 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType465 {
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
export class ArgsType465 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType466 {
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
export class ArgsType466 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType467 {
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
export class ArgsType467 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType468 {
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
export class ArgsType468 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType469 {
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
export class ArgsType469 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType470 {
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
export class ArgsType470 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType471 {
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
export class ArgsType471 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType472 {
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
export class ArgsType472 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType473 {
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
export class ArgsType473 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType474 {
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
export class ArgsType474 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType475 {
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
export class ArgsType475 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType476 {
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
export class ArgsType476 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType477 {
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
export class ArgsType477 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType478 {
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
export class ArgsType478 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType479 {
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
export class ArgsType479 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType480 {
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
export class ArgsType480 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType481 {
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
export class ArgsType481 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType482 {
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
export class ArgsType482 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType483 {
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
export class ArgsType483 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType484 {
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
export class ArgsType484 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType485 {
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
export class ArgsType485 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType486 {
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
export class ArgsType486 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType487 {
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
export class ArgsType487 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType488 {
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
export class ArgsType488 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType489 {
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
export class ArgsType489 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType490 {
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
export class ArgsType490 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType491 {
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
export class ArgsType491 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType492 {
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
export class ArgsType492 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType493 {
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
export class ArgsType493 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType494 {
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
export class ArgsType494 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType495 {
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
export class ArgsType495 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType496 {
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
export class ArgsType496 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType497 {
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
export class ArgsType497 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType498 {
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
export class ArgsType498 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType499 {
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
export class ArgsType499 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType500 {
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
export class ArgsType500 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType501 {
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
export class ArgsType501 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 501');

console.time('pick 11');
@ObjectType() export class PickTest11 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 11');

console.time('omit 11');
@ObjectType() export class OmitTest11 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 11');

console.time('pick args 11');
@ObjectType() export class PickArgsTest11 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 11');

console.time('omit args 11');
@ArgsType() export class OmitArgsTest11 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 11');


console.time('pick 12');
@ObjectType() export class PickTest12 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 12');

console.time('omit 12');
@ObjectType() export class OmitTest12 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 12');

console.time('pick args 12');
@ObjectType() export class PickArgsTest12 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 12');

console.time('omit args 12');
@ArgsType() export class OmitArgsTest12 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 12');


console.log('created 2 pick/omit types, total 24');

@ObjectType()
export class SimpleType502 {
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
export class ArgsType502 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType503 {
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
export class ArgsType503 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType504 {
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
export class ArgsType504 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType505 {
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
export class ArgsType505 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType506 {
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
export class ArgsType506 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType507 {
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
export class ArgsType507 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType508 {
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
export class ArgsType508 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType509 {
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
export class ArgsType509 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType510 {
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
export class ArgsType510 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType511 {
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
export class ArgsType511 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType512 {
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
export class ArgsType512 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType513 {
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
export class ArgsType513 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType514 {
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
export class ArgsType514 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType515 {
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
export class ArgsType515 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType516 {
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
export class ArgsType516 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType517 {
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
export class ArgsType517 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType518 {
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
export class ArgsType518 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType519 {
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
export class ArgsType519 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType520 {
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
export class ArgsType520 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType521 {
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
export class ArgsType521 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType522 {
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
export class ArgsType522 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType523 {
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
export class ArgsType523 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType524 {
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
export class ArgsType524 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType525 {
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
export class ArgsType525 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType526 {
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
export class ArgsType526 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType527 {
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
export class ArgsType527 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType528 {
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
export class ArgsType528 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType529 {
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
export class ArgsType529 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType530 {
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
export class ArgsType530 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType531 {
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
export class ArgsType531 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType532 {
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
export class ArgsType532 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType533 {
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
export class ArgsType533 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType534 {
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
export class ArgsType534 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType535 {
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
export class ArgsType535 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType536 {
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
export class ArgsType536 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType537 {
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
export class ArgsType537 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType538 {
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
export class ArgsType538 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType539 {
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
export class ArgsType539 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType540 {
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
export class ArgsType540 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType541 {
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
export class ArgsType541 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType542 {
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
export class ArgsType542 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType543 {
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
export class ArgsType543 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType544 {
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
export class ArgsType544 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType545 {
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
export class ArgsType545 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType546 {
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
export class ArgsType546 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType547 {
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
export class ArgsType547 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType548 {
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
export class ArgsType548 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType549 {
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
export class ArgsType549 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType550 {
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
export class ArgsType550 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType551 {
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
export class ArgsType551 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType552 {
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
export class ArgsType552 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType553 {
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
export class ArgsType553 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType554 {
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
export class ArgsType554 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType555 {
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
export class ArgsType555 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType556 {
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
export class ArgsType556 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType557 {
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
export class ArgsType557 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType558 {
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
export class ArgsType558 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType559 {
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
export class ArgsType559 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType560 {
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
export class ArgsType560 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType561 {
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
export class ArgsType561 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType562 {
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
export class ArgsType562 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType563 {
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
export class ArgsType563 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType564 {
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
export class ArgsType564 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType565 {
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
export class ArgsType565 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType566 {
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
export class ArgsType566 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType567 {
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
export class ArgsType567 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType568 {
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
export class ArgsType568 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType569 {
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
export class ArgsType569 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType570 {
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
export class ArgsType570 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType571 {
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
export class ArgsType571 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType572 {
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
export class ArgsType572 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType573 {
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
export class ArgsType573 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType574 {
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
export class ArgsType574 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType575 {
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
export class ArgsType575 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType576 {
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
export class ArgsType576 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType577 {
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
export class ArgsType577 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType578 {
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
export class ArgsType578 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType579 {
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
export class ArgsType579 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType580 {
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
export class ArgsType580 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType581 {
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
export class ArgsType581 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType582 {
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
export class ArgsType582 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType583 {
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
export class ArgsType583 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType584 {
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
export class ArgsType584 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType585 {
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
export class ArgsType585 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType586 {
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
export class ArgsType586 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType587 {
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
export class ArgsType587 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType588 {
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
export class ArgsType588 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType589 {
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
export class ArgsType589 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType590 {
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
export class ArgsType590 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType591 {
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
export class ArgsType591 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType592 {
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
export class ArgsType592 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType593 {
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
export class ArgsType593 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType594 {
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
export class ArgsType594 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType595 {
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
export class ArgsType595 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType596 {
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
export class ArgsType596 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType597 {
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
export class ArgsType597 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType598 {
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
export class ArgsType598 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType599 {
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
export class ArgsType599 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType600 {
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
export class ArgsType600 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType601 {
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
export class ArgsType601 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 601');

console.time('pick 13');
@ObjectType() export class PickTest13 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 13');

console.time('omit 13');
@ObjectType() export class OmitTest13 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 13');

console.time('pick args 13');
@ObjectType() export class PickArgsTest13 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 13');

console.time('omit args 13');
@ArgsType() export class OmitArgsTest13 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 13');


console.time('pick 14');
@ObjectType() export class PickTest14 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 14');

console.time('omit 14');
@ObjectType() export class OmitTest14 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 14');

console.time('pick args 14');
@ObjectType() export class PickArgsTest14 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 14');

console.time('omit args 14');
@ArgsType() export class OmitArgsTest14 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 14');


console.log('created 2 pick/omit types, total 28');

@ObjectType()
export class SimpleType602 {
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
export class ArgsType602 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType603 {
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
export class ArgsType603 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType604 {
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
export class ArgsType604 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType605 {
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
export class ArgsType605 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType606 {
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
export class ArgsType606 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType607 {
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
export class ArgsType607 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType608 {
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
export class ArgsType608 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType609 {
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
export class ArgsType609 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType610 {
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
export class ArgsType610 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType611 {
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
export class ArgsType611 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType612 {
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
export class ArgsType612 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType613 {
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
export class ArgsType613 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType614 {
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
export class ArgsType614 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType615 {
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
export class ArgsType615 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType616 {
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
export class ArgsType616 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType617 {
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
export class ArgsType617 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType618 {
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
export class ArgsType618 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType619 {
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
export class ArgsType619 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType620 {
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
export class ArgsType620 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType621 {
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
export class ArgsType621 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType622 {
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
export class ArgsType622 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType623 {
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
export class ArgsType623 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType624 {
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
export class ArgsType624 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType625 {
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
export class ArgsType625 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType626 {
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
export class ArgsType626 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType627 {
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
export class ArgsType627 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType628 {
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
export class ArgsType628 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType629 {
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
export class ArgsType629 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType630 {
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
export class ArgsType630 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType631 {
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
export class ArgsType631 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType632 {
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
export class ArgsType632 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType633 {
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
export class ArgsType633 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType634 {
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
export class ArgsType634 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType635 {
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
export class ArgsType635 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType636 {
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
export class ArgsType636 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType637 {
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
export class ArgsType637 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType638 {
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
export class ArgsType638 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType639 {
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
export class ArgsType639 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType640 {
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
export class ArgsType640 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType641 {
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
export class ArgsType641 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType642 {
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
export class ArgsType642 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType643 {
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
export class ArgsType643 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType644 {
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
export class ArgsType644 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType645 {
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
export class ArgsType645 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType646 {
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
export class ArgsType646 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType647 {
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
export class ArgsType647 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType648 {
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
export class ArgsType648 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType649 {
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
export class ArgsType649 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType650 {
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
export class ArgsType650 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType651 {
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
export class ArgsType651 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType652 {
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
export class ArgsType652 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType653 {
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
export class ArgsType653 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType654 {
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
export class ArgsType654 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType655 {
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
export class ArgsType655 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType656 {
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
export class ArgsType656 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType657 {
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
export class ArgsType657 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType658 {
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
export class ArgsType658 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType659 {
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
export class ArgsType659 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType660 {
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
export class ArgsType660 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType661 {
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
export class ArgsType661 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType662 {
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
export class ArgsType662 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType663 {
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
export class ArgsType663 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType664 {
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
export class ArgsType664 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType665 {
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
export class ArgsType665 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType666 {
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
export class ArgsType666 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType667 {
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
export class ArgsType667 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType668 {
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
export class ArgsType668 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType669 {
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
export class ArgsType669 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType670 {
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
export class ArgsType670 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType671 {
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
export class ArgsType671 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType672 {
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
export class ArgsType672 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType673 {
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
export class ArgsType673 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType674 {
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
export class ArgsType674 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType675 {
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
export class ArgsType675 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType676 {
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
export class ArgsType676 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType677 {
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
export class ArgsType677 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType678 {
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
export class ArgsType678 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType679 {
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
export class ArgsType679 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType680 {
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
export class ArgsType680 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType681 {
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
export class ArgsType681 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType682 {
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
export class ArgsType682 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType683 {
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
export class ArgsType683 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType684 {
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
export class ArgsType684 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType685 {
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
export class ArgsType685 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType686 {
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
export class ArgsType686 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType687 {
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
export class ArgsType687 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType688 {
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
export class ArgsType688 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType689 {
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
export class ArgsType689 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType690 {
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
export class ArgsType690 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType691 {
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
export class ArgsType691 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType692 {
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
export class ArgsType692 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType693 {
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
export class ArgsType693 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType694 {
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
export class ArgsType694 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType695 {
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
export class ArgsType695 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType696 {
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
export class ArgsType696 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType697 {
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
export class ArgsType697 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType698 {
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
export class ArgsType698 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType699 {
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
export class ArgsType699 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType700 {
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
export class ArgsType700 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType701 {
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
export class ArgsType701 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 701');

console.time('pick 15');
@ObjectType() export class PickTest15 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 15');

console.time('omit 15');
@ObjectType() export class OmitTest15 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 15');

console.time('pick args 15');
@ObjectType() export class PickArgsTest15 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 15');

console.time('omit args 15');
@ArgsType() export class OmitArgsTest15 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 15');


console.time('pick 16');
@ObjectType() export class PickTest16 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 16');

console.time('omit 16');
@ObjectType() export class OmitTest16 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 16');

console.time('pick args 16');
@ObjectType() export class PickArgsTest16 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 16');

console.time('omit args 16');
@ArgsType() export class OmitArgsTest16 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 16');


console.log('created 2 pick/omit types, total 32');

@ObjectType()
export class SimpleType702 {
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
export class ArgsType702 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType703 {
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
export class ArgsType703 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType704 {
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
export class ArgsType704 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType705 {
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
export class ArgsType705 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType706 {
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
export class ArgsType706 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType707 {
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
export class ArgsType707 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType708 {
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
export class ArgsType708 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType709 {
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
export class ArgsType709 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType710 {
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
export class ArgsType710 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType711 {
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
export class ArgsType711 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType712 {
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
export class ArgsType712 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType713 {
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
export class ArgsType713 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType714 {
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
export class ArgsType714 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType715 {
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
export class ArgsType715 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType716 {
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
export class ArgsType716 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType717 {
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
export class ArgsType717 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType718 {
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
export class ArgsType718 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType719 {
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
export class ArgsType719 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType720 {
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
export class ArgsType720 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType721 {
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
export class ArgsType721 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType722 {
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
export class ArgsType722 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType723 {
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
export class ArgsType723 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType724 {
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
export class ArgsType724 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType725 {
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
export class ArgsType725 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType726 {
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
export class ArgsType726 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType727 {
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
export class ArgsType727 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType728 {
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
export class ArgsType728 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType729 {
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
export class ArgsType729 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType730 {
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
export class ArgsType730 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType731 {
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
export class ArgsType731 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType732 {
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
export class ArgsType732 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType733 {
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
export class ArgsType733 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType734 {
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
export class ArgsType734 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType735 {
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
export class ArgsType735 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType736 {
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
export class ArgsType736 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType737 {
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
export class ArgsType737 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType738 {
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
export class ArgsType738 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType739 {
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
export class ArgsType739 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType740 {
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
export class ArgsType740 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType741 {
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
export class ArgsType741 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType742 {
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
export class ArgsType742 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType743 {
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
export class ArgsType743 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType744 {
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
export class ArgsType744 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType745 {
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
export class ArgsType745 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType746 {
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
export class ArgsType746 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType747 {
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
export class ArgsType747 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType748 {
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
export class ArgsType748 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType749 {
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
export class ArgsType749 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType750 {
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
export class ArgsType750 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType751 {
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
export class ArgsType751 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType752 {
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
export class ArgsType752 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType753 {
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
export class ArgsType753 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType754 {
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
export class ArgsType754 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType755 {
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
export class ArgsType755 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType756 {
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
export class ArgsType756 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType757 {
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
export class ArgsType757 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType758 {
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
export class ArgsType758 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType759 {
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
export class ArgsType759 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType760 {
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
export class ArgsType760 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType761 {
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
export class ArgsType761 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType762 {
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
export class ArgsType762 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType763 {
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
export class ArgsType763 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType764 {
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
export class ArgsType764 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType765 {
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
export class ArgsType765 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType766 {
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
export class ArgsType766 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType767 {
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
export class ArgsType767 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType768 {
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
export class ArgsType768 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType769 {
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
export class ArgsType769 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType770 {
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
export class ArgsType770 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType771 {
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
export class ArgsType771 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType772 {
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
export class ArgsType772 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType773 {
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
export class ArgsType773 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType774 {
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
export class ArgsType774 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType775 {
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
export class ArgsType775 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType776 {
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
export class ArgsType776 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType777 {
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
export class ArgsType777 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType778 {
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
export class ArgsType778 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType779 {
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
export class ArgsType779 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType780 {
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
export class ArgsType780 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType781 {
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
export class ArgsType781 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType782 {
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
export class ArgsType782 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType783 {
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
export class ArgsType783 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType784 {
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
export class ArgsType784 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType785 {
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
export class ArgsType785 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType786 {
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
export class ArgsType786 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType787 {
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
export class ArgsType787 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType788 {
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
export class ArgsType788 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType789 {
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
export class ArgsType789 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType790 {
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
export class ArgsType790 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType791 {
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
export class ArgsType791 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType792 {
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
export class ArgsType792 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType793 {
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
export class ArgsType793 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType794 {
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
export class ArgsType794 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType795 {
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
export class ArgsType795 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType796 {
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
export class ArgsType796 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType797 {
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
export class ArgsType797 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType798 {
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
export class ArgsType798 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType799 {
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
export class ArgsType799 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType800 {
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
export class ArgsType800 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType801 {
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
export class ArgsType801 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 801');

console.time('pick 17');
@ObjectType() export class PickTest17 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 17');

console.time('omit 17');
@ObjectType() export class OmitTest17 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 17');

console.time('pick args 17');
@ObjectType() export class PickArgsTest17 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 17');

console.time('omit args 17');
@ArgsType() export class OmitArgsTest17 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 17');


console.time('pick 18');
@ObjectType() export class PickTest18 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 18');

console.time('omit 18');
@ObjectType() export class OmitTest18 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 18');

console.time('pick args 18');
@ObjectType() export class PickArgsTest18 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 18');

console.time('omit args 18');
@ArgsType() export class OmitArgsTest18 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 18');


console.log('created 2 pick/omit types, total 36');

@ObjectType()
export class SimpleType802 {
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
export class ArgsType802 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType803 {
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
export class ArgsType803 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType804 {
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
export class ArgsType804 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType805 {
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
export class ArgsType805 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType806 {
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
export class ArgsType806 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType807 {
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
export class ArgsType807 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType808 {
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
export class ArgsType808 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType809 {
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
export class ArgsType809 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType810 {
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
export class ArgsType810 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType811 {
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
export class ArgsType811 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType812 {
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
export class ArgsType812 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType813 {
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
export class ArgsType813 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType814 {
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
export class ArgsType814 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType815 {
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
export class ArgsType815 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType816 {
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
export class ArgsType816 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType817 {
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
export class ArgsType817 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType818 {
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
export class ArgsType818 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType819 {
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
export class ArgsType819 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType820 {
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
export class ArgsType820 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType821 {
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
export class ArgsType821 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType822 {
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
export class ArgsType822 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType823 {
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
export class ArgsType823 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType824 {
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
export class ArgsType824 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType825 {
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
export class ArgsType825 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType826 {
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
export class ArgsType826 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType827 {
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
export class ArgsType827 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType828 {
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
export class ArgsType828 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType829 {
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
export class ArgsType829 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType830 {
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
export class ArgsType830 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType831 {
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
export class ArgsType831 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType832 {
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
export class ArgsType832 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType833 {
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
export class ArgsType833 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType834 {
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
export class ArgsType834 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType835 {
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
export class ArgsType835 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType836 {
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
export class ArgsType836 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType837 {
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
export class ArgsType837 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType838 {
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
export class ArgsType838 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType839 {
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
export class ArgsType839 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType840 {
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
export class ArgsType840 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType841 {
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
export class ArgsType841 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType842 {
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
export class ArgsType842 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType843 {
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
export class ArgsType843 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType844 {
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
export class ArgsType844 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType845 {
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
export class ArgsType845 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType846 {
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
export class ArgsType846 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType847 {
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
export class ArgsType847 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType848 {
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
export class ArgsType848 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType849 {
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
export class ArgsType849 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType850 {
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
export class ArgsType850 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType851 {
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
export class ArgsType851 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType852 {
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
export class ArgsType852 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType853 {
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
export class ArgsType853 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType854 {
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
export class ArgsType854 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType855 {
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
export class ArgsType855 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType856 {
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
export class ArgsType856 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType857 {
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
export class ArgsType857 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType858 {
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
export class ArgsType858 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType859 {
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
export class ArgsType859 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType860 {
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
export class ArgsType860 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType861 {
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
export class ArgsType861 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType862 {
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
export class ArgsType862 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType863 {
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
export class ArgsType863 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType864 {
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
export class ArgsType864 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType865 {
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
export class ArgsType865 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType866 {
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
export class ArgsType866 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType867 {
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
export class ArgsType867 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType868 {
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
export class ArgsType868 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType869 {
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
export class ArgsType869 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType870 {
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
export class ArgsType870 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType871 {
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
export class ArgsType871 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType872 {
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
export class ArgsType872 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType873 {
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
export class ArgsType873 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType874 {
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
export class ArgsType874 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType875 {
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
export class ArgsType875 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType876 {
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
export class ArgsType876 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType877 {
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
export class ArgsType877 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType878 {
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
export class ArgsType878 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType879 {
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
export class ArgsType879 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType880 {
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
export class ArgsType880 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType881 {
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
export class ArgsType881 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType882 {
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
export class ArgsType882 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType883 {
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
export class ArgsType883 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType884 {
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
export class ArgsType884 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType885 {
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
export class ArgsType885 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType886 {
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
export class ArgsType886 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType887 {
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
export class ArgsType887 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType888 {
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
export class ArgsType888 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType889 {
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
export class ArgsType889 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType890 {
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
export class ArgsType890 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType891 {
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
export class ArgsType891 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType892 {
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
export class ArgsType892 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType893 {
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
export class ArgsType893 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType894 {
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
export class ArgsType894 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType895 {
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
export class ArgsType895 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType896 {
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
export class ArgsType896 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType897 {
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
export class ArgsType897 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType898 {
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
export class ArgsType898 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType899 {
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
export class ArgsType899 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType900 {
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
export class ArgsType900 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType901 {
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
export class ArgsType901 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 901');

console.time('pick 19');
@ObjectType() export class PickTest19 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 19');

console.time('omit 19');
@ObjectType() export class OmitTest19 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 19');

console.time('pick args 19');
@ObjectType() export class PickArgsTest19 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 19');

console.time('omit args 19');
@ArgsType() export class OmitArgsTest19 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 19');


console.time('pick 20');
@ObjectType() export class PickTest20 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 20');

console.time('omit 20');
@ObjectType() export class OmitTest20 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 20');

console.time('pick args 20');
@ObjectType() export class PickArgsTest20 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 20');

console.time('omit args 20');
@ArgsType() export class OmitArgsTest20 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 20');


console.log('created 2 pick/omit types, total 40');

@ObjectType()
export class SimpleType902 {
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
export class ArgsType902 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType903 {
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
export class ArgsType903 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType904 {
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
export class ArgsType904 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType905 {
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
export class ArgsType905 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType906 {
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
export class ArgsType906 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType907 {
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
export class ArgsType907 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType908 {
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
export class ArgsType908 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType909 {
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
export class ArgsType909 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType910 {
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
export class ArgsType910 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType911 {
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
export class ArgsType911 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType912 {
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
export class ArgsType912 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType913 {
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
export class ArgsType913 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType914 {
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
export class ArgsType914 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType915 {
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
export class ArgsType915 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType916 {
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
export class ArgsType916 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType917 {
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
export class ArgsType917 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType918 {
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
export class ArgsType918 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType919 {
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
export class ArgsType919 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType920 {
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
export class ArgsType920 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType921 {
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
export class ArgsType921 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType922 {
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
export class ArgsType922 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType923 {
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
export class ArgsType923 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType924 {
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
export class ArgsType924 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType925 {
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
export class ArgsType925 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType926 {
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
export class ArgsType926 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType927 {
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
export class ArgsType927 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType928 {
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
export class ArgsType928 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType929 {
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
export class ArgsType929 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType930 {
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
export class ArgsType930 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType931 {
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
export class ArgsType931 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType932 {
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
export class ArgsType932 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType933 {
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
export class ArgsType933 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType934 {
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
export class ArgsType934 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType935 {
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
export class ArgsType935 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType936 {
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
export class ArgsType936 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType937 {
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
export class ArgsType937 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType938 {
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
export class ArgsType938 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType939 {
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
export class ArgsType939 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType940 {
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
export class ArgsType940 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType941 {
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
export class ArgsType941 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType942 {
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
export class ArgsType942 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType943 {
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
export class ArgsType943 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType944 {
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
export class ArgsType944 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType945 {
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
export class ArgsType945 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType946 {
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
export class ArgsType946 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType947 {
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
export class ArgsType947 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType948 {
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
export class ArgsType948 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType949 {
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
export class ArgsType949 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType950 {
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
export class ArgsType950 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType951 {
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
export class ArgsType951 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType952 {
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
export class ArgsType952 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType953 {
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
export class ArgsType953 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType954 {
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
export class ArgsType954 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType955 {
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
export class ArgsType955 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType956 {
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
export class ArgsType956 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType957 {
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
export class ArgsType957 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType958 {
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
export class ArgsType958 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType959 {
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
export class ArgsType959 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType960 {
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
export class ArgsType960 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType961 {
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
export class ArgsType961 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType962 {
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
export class ArgsType962 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType963 {
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
export class ArgsType963 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType964 {
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
export class ArgsType964 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType965 {
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
export class ArgsType965 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType966 {
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
export class ArgsType966 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType967 {
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
export class ArgsType967 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType968 {
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
export class ArgsType968 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType969 {
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
export class ArgsType969 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType970 {
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
export class ArgsType970 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType971 {
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
export class ArgsType971 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType972 {
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
export class ArgsType972 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType973 {
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
export class ArgsType973 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType974 {
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
export class ArgsType974 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType975 {
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
export class ArgsType975 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType976 {
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
export class ArgsType976 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType977 {
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
export class ArgsType977 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType978 {
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
export class ArgsType978 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType979 {
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
export class ArgsType979 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType980 {
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
export class ArgsType980 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType981 {
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
export class ArgsType981 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType982 {
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
export class ArgsType982 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType983 {
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
export class ArgsType983 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType984 {
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
export class ArgsType984 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType985 {
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
export class ArgsType985 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType986 {
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
export class ArgsType986 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType987 {
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
export class ArgsType987 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType988 {
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
export class ArgsType988 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType989 {
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
export class ArgsType989 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType990 {
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
export class ArgsType990 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType991 {
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
export class ArgsType991 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType992 {
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
export class ArgsType992 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType993 {
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
export class ArgsType993 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType994 {
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
export class ArgsType994 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType995 {
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
export class ArgsType995 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType996 {
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
export class ArgsType996 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType997 {
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
export class ArgsType997 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType998 {
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
export class ArgsType998 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType999 {
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
export class ArgsType999 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1000 {
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
export class ArgsType1000 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1001 {
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
export class ArgsType1001 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 1001');

console.time('pick 21');
@ObjectType() export class PickTest21 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 21');

console.time('omit 21');
@ObjectType() export class OmitTest21 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 21');

console.time('pick args 21');
@ObjectType() export class PickArgsTest21 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 21');

console.time('omit args 21');
@ArgsType() export class OmitArgsTest21 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 21');


console.time('pick 22');
@ObjectType() export class PickTest22 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 22');

console.time('omit 22');
@ObjectType() export class OmitTest22 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 22');

console.time('pick args 22');
@ObjectType() export class PickArgsTest22 extends PickType(ArgsType1, ['a', 'c', 'f', 'h'], ArgsType) {}
console.timeEnd('pick args 22');

console.time('omit args 22');
@ArgsType() export class OmitArgsTest22 extends OmitType(ArgsType1, ['b', 'c', 'h'], ArgsType) {}
console.timeEnd('omit args 22');


console.log('created 2 pick/omit types, total 44');

