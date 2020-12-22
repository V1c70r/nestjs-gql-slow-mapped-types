import { Field, ObjectType, PickType, OmitType } from '@nestjs/graphql';

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

console.log('created 1 simple types, total 1');

console.time('pick 1');
@ObjectType() export class PickTest1 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 1');

console.time('omit 1');
@ObjectType() export class OmitTest1 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 1');

console.time('pick 2');
@ObjectType() export class PickTest2 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 2');

console.time('omit 2');
@ObjectType() export class OmitTest2 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 2');

console.time('pick 3');
@ObjectType() export class PickTest3 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 3');

console.time('omit 3');
@ObjectType() export class OmitTest3 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 3');

console.time('pick 4');
@ObjectType() export class PickTest4 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 4');

console.time('omit 4');
@ObjectType() export class OmitTest4 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 4');

console.time('pick 5');
@ObjectType() export class PickTest5 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 5');

console.time('omit 5');
@ObjectType() export class OmitTest5 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 5');

console.log('create 5 pick/omit types, total 5');

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

console.log('created 100 simple types, total 101');

console.time('pick 6');
@ObjectType() export class PickTest6 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 6');

console.time('omit 6');
@ObjectType() export class OmitTest6 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 6');

console.time('pick 7');
@ObjectType() export class PickTest7 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 7');

console.time('omit 7');
@ObjectType() export class OmitTest7 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 7');

console.time('pick 8');
@ObjectType() export class PickTest8 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 8');

console.time('omit 8');
@ObjectType() export class OmitTest8 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 8');

console.time('pick 9');
@ObjectType() export class PickTest9 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 9');

console.time('omit 9');
@ObjectType() export class OmitTest9 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 9');

console.time('pick 10');
@ObjectType() export class PickTest10 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 10');

console.time('omit 10');
@ObjectType() export class OmitTest10 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 10');

console.log('create 5 pick/omit types, total 10');

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

console.log('created 100 simple types, total 201');

console.time('pick 11');
@ObjectType() export class PickTest11 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 11');

console.time('omit 11');
@ObjectType() export class OmitTest11 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 11');

console.time('pick 12');
@ObjectType() export class PickTest12 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 12');

console.time('omit 12');
@ObjectType() export class OmitTest12 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 12');

console.time('pick 13');
@ObjectType() export class PickTest13 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 13');

console.time('omit 13');
@ObjectType() export class OmitTest13 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 13');

console.time('pick 14');
@ObjectType() export class PickTest14 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 14');

console.time('omit 14');
@ObjectType() export class OmitTest14 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 14');

console.time('pick 15');
@ObjectType() export class PickTest15 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 15');

console.time('omit 15');
@ObjectType() export class OmitTest15 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 15');

console.log('create 5 pick/omit types, total 15');

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

console.log('created 100 simple types, total 301');

console.time('pick 16');
@ObjectType() export class PickTest16 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 16');

console.time('omit 16');
@ObjectType() export class OmitTest16 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 16');

console.time('pick 17');
@ObjectType() export class PickTest17 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 17');

console.time('omit 17');
@ObjectType() export class OmitTest17 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 17');

console.time('pick 18');
@ObjectType() export class PickTest18 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 18');

console.time('omit 18');
@ObjectType() export class OmitTest18 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 18');

console.time('pick 19');
@ObjectType() export class PickTest19 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 19');

console.time('omit 19');
@ObjectType() export class OmitTest19 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 19');

console.time('pick 20');
@ObjectType() export class PickTest20 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 20');

console.time('omit 20');
@ObjectType() export class OmitTest20 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 20');

console.log('create 5 pick/omit types, total 20');

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

console.log('created 100 simple types, total 401');

console.time('pick 21');
@ObjectType() export class PickTest21 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 21');

console.time('omit 21');
@ObjectType() export class OmitTest21 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 21');

console.time('pick 22');
@ObjectType() export class PickTest22 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 22');

console.time('omit 22');
@ObjectType() export class OmitTest22 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 22');

console.time('pick 23');
@ObjectType() export class PickTest23 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 23');

console.time('omit 23');
@ObjectType() export class OmitTest23 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 23');

console.time('pick 24');
@ObjectType() export class PickTest24 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 24');

console.time('omit 24');
@ObjectType() export class OmitTest24 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 24');

console.time('pick 25');
@ObjectType() export class PickTest25 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 25');

console.time('omit 25');
@ObjectType() export class OmitTest25 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 25');

console.log('create 5 pick/omit types, total 25');

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

console.log('created 100 simple types, total 501');

console.time('pick 26');
@ObjectType() export class PickTest26 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 26');

console.time('omit 26');
@ObjectType() export class OmitTest26 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 26');

console.time('pick 27');
@ObjectType() export class PickTest27 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 27');

console.time('omit 27');
@ObjectType() export class OmitTest27 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 27');

console.time('pick 28');
@ObjectType() export class PickTest28 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 28');

console.time('omit 28');
@ObjectType() export class OmitTest28 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 28');

console.time('pick 29');
@ObjectType() export class PickTest29 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 29');

console.time('omit 29');
@ObjectType() export class OmitTest29 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 29');

console.time('pick 30');
@ObjectType() export class PickTest30 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 30');

console.time('omit 30');
@ObjectType() export class OmitTest30 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 30');

console.log('create 5 pick/omit types, total 30');

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

console.log('created 100 simple types, total 601');

console.time('pick 31');
@ObjectType() export class PickTest31 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 31');

console.time('omit 31');
@ObjectType() export class OmitTest31 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 31');

console.time('pick 32');
@ObjectType() export class PickTest32 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 32');

console.time('omit 32');
@ObjectType() export class OmitTest32 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 32');

console.time('pick 33');
@ObjectType() export class PickTest33 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 33');

console.time('omit 33');
@ObjectType() export class OmitTest33 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 33');

console.time('pick 34');
@ObjectType() export class PickTest34 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 34');

console.time('omit 34');
@ObjectType() export class OmitTest34 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 34');

console.time('pick 35');
@ObjectType() export class PickTest35 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 35');

console.time('omit 35');
@ObjectType() export class OmitTest35 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 35');

console.log('create 5 pick/omit types, total 35');

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

console.log('created 100 simple types, total 701');

console.time('pick 36');
@ObjectType() export class PickTest36 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 36');

console.time('omit 36');
@ObjectType() export class OmitTest36 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 36');

console.time('pick 37');
@ObjectType() export class PickTest37 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 37');

console.time('omit 37');
@ObjectType() export class OmitTest37 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 37');

console.time('pick 38');
@ObjectType() export class PickTest38 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 38');

console.time('omit 38');
@ObjectType() export class OmitTest38 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 38');

console.time('pick 39');
@ObjectType() export class PickTest39 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 39');

console.time('omit 39');
@ObjectType() export class OmitTest39 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 39');

console.time('pick 40');
@ObjectType() export class PickTest40 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 40');

console.time('omit 40');
@ObjectType() export class OmitTest40 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 40');

console.log('create 5 pick/omit types, total 40');

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

console.log('created 100 simple types, total 801');

console.time('pick 41');
@ObjectType() export class PickTest41 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 41');

console.time('omit 41');
@ObjectType() export class OmitTest41 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 41');

console.time('pick 42');
@ObjectType() export class PickTest42 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 42');

console.time('omit 42');
@ObjectType() export class OmitTest42 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 42');

console.time('pick 43');
@ObjectType() export class PickTest43 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 43');

console.time('omit 43');
@ObjectType() export class OmitTest43 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 43');

console.time('pick 44');
@ObjectType() export class PickTest44 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 44');

console.time('omit 44');
@ObjectType() export class OmitTest44 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 44');

console.time('pick 45');
@ObjectType() export class PickTest45 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 45');

console.time('omit 45');
@ObjectType() export class OmitTest45 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 45');

console.log('create 5 pick/omit types, total 45');

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

console.log('created 100 simple types, total 901');

console.time('pick 46');
@ObjectType() export class PickTest46 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 46');

console.time('omit 46');
@ObjectType() export class OmitTest46 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 46');

console.time('pick 47');
@ObjectType() export class PickTest47 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 47');

console.time('omit 47');
@ObjectType() export class OmitTest47 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 47');

console.time('pick 48');
@ObjectType() export class PickTest48 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 48');

console.time('omit 48');
@ObjectType() export class OmitTest48 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 48');

console.time('pick 49');
@ObjectType() export class PickTest49 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 49');

console.time('omit 49');
@ObjectType() export class OmitTest49 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 49');

console.time('pick 50');
@ObjectType() export class PickTest50 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 50');

console.time('omit 50');
@ObjectType() export class OmitTest50 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 50');

console.log('create 5 pick/omit types, total 50');

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

console.log('created 100 simple types, total 1001');

console.time('pick 51');
@ObjectType() export class PickTest51 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 51');

console.time('omit 51');
@ObjectType() export class OmitTest51 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 51');

console.time('pick 52');
@ObjectType() export class PickTest52 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 52');

console.time('omit 52');
@ObjectType() export class OmitTest52 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 52');

console.time('pick 53');
@ObjectType() export class PickTest53 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 53');

console.time('omit 53');
@ObjectType() export class OmitTest53 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 53');

console.time('pick 54');
@ObjectType() export class PickTest54 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 54');

console.time('omit 54');
@ObjectType() export class OmitTest54 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 54');

console.time('pick 55');
@ObjectType() export class PickTest55 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 55');

console.time('omit 55');
@ObjectType() export class OmitTest55 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 55');

console.log('create 5 pick/omit types, total 55');

@ObjectType()
export class SimpleType1002 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1003 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1004 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1005 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1006 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1007 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1008 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1009 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1010 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1011 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1012 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1013 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1014 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1015 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1016 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1017 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1018 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1019 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1020 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1021 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1022 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1023 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1024 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1025 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1026 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1027 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1028 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1029 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1030 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1031 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1032 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1033 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1034 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1035 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1036 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1037 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1038 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1039 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1040 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1041 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1042 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1043 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1044 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1045 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1046 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1047 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1048 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1049 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1050 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1051 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1052 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1053 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1054 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1055 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1056 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1057 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1058 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1059 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1060 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1061 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1062 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1063 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1064 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1065 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1066 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1067 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1068 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1069 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1070 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1071 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1072 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1073 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1074 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1075 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1076 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1077 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1078 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1079 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1080 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1081 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1082 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1083 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1084 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1085 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1086 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1087 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1088 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1089 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1090 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1091 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1092 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1093 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1094 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1095 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1096 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1097 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1098 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1099 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1100 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1101 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 1101');

console.time('pick 56');
@ObjectType() export class PickTest56 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 56');

console.time('omit 56');
@ObjectType() export class OmitTest56 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 56');

console.time('pick 57');
@ObjectType() export class PickTest57 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 57');

console.time('omit 57');
@ObjectType() export class OmitTest57 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 57');

console.time('pick 58');
@ObjectType() export class PickTest58 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 58');

console.time('omit 58');
@ObjectType() export class OmitTest58 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 58');

console.time('pick 59');
@ObjectType() export class PickTest59 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 59');

console.time('omit 59');
@ObjectType() export class OmitTest59 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 59');

console.time('pick 60');
@ObjectType() export class PickTest60 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 60');

console.time('omit 60');
@ObjectType() export class OmitTest60 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 60');

console.log('create 5 pick/omit types, total 60');

@ObjectType()
export class SimpleType1102 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1103 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1104 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1105 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1106 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1107 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1108 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1109 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1110 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1111 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1112 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1113 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1114 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1115 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1116 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1117 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1118 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1119 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1120 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1121 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1122 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1123 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1124 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1125 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1126 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1127 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1128 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1129 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1130 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1131 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1132 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1133 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1134 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1135 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1136 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1137 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1138 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1139 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1140 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1141 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1142 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1143 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1144 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1145 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1146 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1147 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1148 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1149 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1150 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1151 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1152 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1153 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1154 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1155 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1156 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1157 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1158 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1159 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1160 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1161 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1162 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1163 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1164 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1165 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1166 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1167 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1168 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1169 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1170 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1171 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1172 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1173 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1174 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1175 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1176 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1177 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1178 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1179 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1180 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1181 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1182 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1183 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1184 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1185 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1186 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1187 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1188 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1189 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1190 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1191 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1192 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1193 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1194 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1195 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1196 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1197 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1198 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1199 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1200 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1201 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 1201');

console.time('pick 61');
@ObjectType() export class PickTest61 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 61');

console.time('omit 61');
@ObjectType() export class OmitTest61 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 61');

console.time('pick 62');
@ObjectType() export class PickTest62 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 62');

console.time('omit 62');
@ObjectType() export class OmitTest62 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 62');

console.time('pick 63');
@ObjectType() export class PickTest63 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 63');

console.time('omit 63');
@ObjectType() export class OmitTest63 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 63');

console.time('pick 64');
@ObjectType() export class PickTest64 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 64');

console.time('omit 64');
@ObjectType() export class OmitTest64 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 64');

console.time('pick 65');
@ObjectType() export class PickTest65 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 65');

console.time('omit 65');
@ObjectType() export class OmitTest65 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 65');

console.log('create 5 pick/omit types, total 65');

@ObjectType()
export class SimpleType1202 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1203 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1204 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1205 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1206 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1207 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1208 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1209 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1210 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1211 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1212 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1213 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1214 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1215 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1216 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1217 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1218 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1219 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1220 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1221 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1222 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1223 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1224 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1225 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1226 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1227 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1228 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1229 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1230 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1231 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1232 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1233 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1234 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1235 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1236 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1237 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1238 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1239 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1240 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1241 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1242 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1243 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1244 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1245 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1246 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1247 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1248 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1249 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1250 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1251 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1252 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1253 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1254 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1255 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1256 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1257 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1258 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1259 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1260 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1261 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1262 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1263 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1264 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1265 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1266 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1267 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1268 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1269 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1270 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1271 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1272 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1273 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1274 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1275 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1276 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1277 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1278 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1279 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1280 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1281 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1282 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1283 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1284 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1285 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1286 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1287 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1288 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1289 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1290 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1291 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1292 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1293 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1294 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1295 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1296 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1297 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1298 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1299 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1300 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1301 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 1301');

console.time('pick 66');
@ObjectType() export class PickTest66 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 66');

console.time('omit 66');
@ObjectType() export class OmitTest66 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 66');

console.time('pick 67');
@ObjectType() export class PickTest67 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 67');

console.time('omit 67');
@ObjectType() export class OmitTest67 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 67');

console.time('pick 68');
@ObjectType() export class PickTest68 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 68');

console.time('omit 68');
@ObjectType() export class OmitTest68 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 68');

console.time('pick 69');
@ObjectType() export class PickTest69 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 69');

console.time('omit 69');
@ObjectType() export class OmitTest69 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 69');

console.time('pick 70');
@ObjectType() export class PickTest70 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 70');

console.time('omit 70');
@ObjectType() export class OmitTest70 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 70');

console.log('create 5 pick/omit types, total 70');

@ObjectType()
export class SimpleType1302 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1303 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1304 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1305 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1306 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1307 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1308 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1309 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1310 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1311 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1312 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1313 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1314 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1315 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1316 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1317 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1318 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1319 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1320 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1321 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1322 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1323 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1324 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1325 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1326 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1327 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1328 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1329 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1330 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1331 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1332 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1333 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1334 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1335 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1336 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1337 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1338 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1339 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1340 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1341 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1342 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1343 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1344 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1345 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1346 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1347 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1348 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1349 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1350 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1351 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1352 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1353 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1354 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1355 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1356 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1357 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1358 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1359 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1360 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1361 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1362 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1363 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1364 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1365 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1366 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1367 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1368 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1369 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1370 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1371 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1372 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1373 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1374 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1375 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1376 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1377 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1378 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1379 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1380 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1381 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1382 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1383 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1384 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1385 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1386 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1387 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1388 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1389 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1390 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1391 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1392 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1393 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1394 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1395 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1396 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1397 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1398 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1399 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1400 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1401 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 1401');

console.time('pick 71');
@ObjectType() export class PickTest71 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 71');

console.time('omit 71');
@ObjectType() export class OmitTest71 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 71');

console.time('pick 72');
@ObjectType() export class PickTest72 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 72');

console.time('omit 72');
@ObjectType() export class OmitTest72 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 72');

console.time('pick 73');
@ObjectType() export class PickTest73 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 73');

console.time('omit 73');
@ObjectType() export class OmitTest73 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 73');

console.time('pick 74');
@ObjectType() export class PickTest74 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 74');

console.time('omit 74');
@ObjectType() export class OmitTest74 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 74');

console.time('pick 75');
@ObjectType() export class PickTest75 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 75');

console.time('omit 75');
@ObjectType() export class OmitTest75 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 75');

console.log('create 5 pick/omit types, total 75');

@ObjectType()
export class SimpleType1402 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1403 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1404 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1405 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1406 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1407 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1408 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1409 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1410 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1411 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1412 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1413 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1414 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1415 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1416 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1417 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1418 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1419 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1420 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1421 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1422 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1423 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1424 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1425 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1426 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1427 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1428 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1429 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1430 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1431 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1432 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1433 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1434 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1435 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1436 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1437 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1438 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1439 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1440 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1441 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1442 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1443 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1444 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1445 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1446 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1447 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1448 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1449 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1450 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1451 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1452 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1453 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1454 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1455 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1456 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1457 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1458 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1459 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1460 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1461 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1462 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1463 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1464 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1465 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1466 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1467 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1468 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1469 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1470 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1471 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1472 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1473 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1474 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1475 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1476 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1477 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1478 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1479 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1480 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1481 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1482 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1483 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1484 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1485 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1486 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1487 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1488 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1489 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1490 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1491 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1492 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1493 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1494 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1495 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1496 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1497 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1498 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1499 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1500 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

@ObjectType()
export class SimpleType1501 {
  @Field() a: string;
  @Field() b: string;
  @Field() c: string;
  @Field() d: string;
  @Field() e: string;
  @Field() f: string;
  @Field() g: string;
  @Field() h: string;
}

console.log('created 100 simple types, total 1501');

console.time('pick 76');
@ObjectType() export class PickTest76 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 76');

console.time('omit 76');
@ObjectType() export class OmitTest76 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 76');

console.time('pick 77');
@ObjectType() export class PickTest77 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 77');

console.time('omit 77');
@ObjectType() export class OmitTest77 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 77');

console.time('pick 78');
@ObjectType() export class PickTest78 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 78');

console.time('omit 78');
@ObjectType() export class OmitTest78 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 78');

console.time('pick 79');
@ObjectType() export class PickTest79 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 79');

console.time('omit 79');
@ObjectType() export class OmitTest79 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 79');

console.time('pick 80');
@ObjectType() export class PickTest80 extends PickType(SimpleType1, ['a', 'c', 'f', 'h']) {}
console.timeEnd('pick 80');

console.time('omit 80');
@ObjectType() export class OmitTest80 extends OmitType(SimpleType1, ['b', 'c', 'h']) {}
console.timeEnd('omit 80');

console.log('create 5 pick/omit types, total 80');

