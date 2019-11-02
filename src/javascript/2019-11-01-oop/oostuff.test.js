import {Person,functions} from "./oostuff"
test('hello world',() => {
    console.log("hello world!");
    functions.helloWorld();

});
test('check the class',() => {
    const l = new Person("Larry", 5);
    const dean = new Person("Dean",29);
    expect(l.getName()).toBe("Larry");
    expect(dean.getName()).toBe("Dean");
    expect(l.getAge()).toBe(5);
    l.birthday();
    expect(l.getAge()).toBe(6);
    expect(dean.getAge()).toBe(29);
})