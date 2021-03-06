
QUnit.module("Setup Tests");
QUnit.test( "QUnit Configuration Test", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Test Make Relative", function( assert ) {
	var relative = make_relative("Bob", "MALE");
	assert.equal(relative.name, "Bob", "Name is Bob");
	assert.equal(relative.gender, "MALE", "Gender is MALE");
});

QUnit.test( "Test Make Personal Information", function( assert ) {
	var pi = make_personal_information()
	
	assert.equal(pi.father.name, "Father", "Father's name is 'Father'");
	assert.equal(pi.father.gender, "MALE", "Father's Gender is MALE");
	assert.equal(pi.mother.name, "Mother", "Mother's name is 'Mother'");
	assert.equal(pi.mother.gender, "FEMALE", "Mother's gender is FEMALE");
});

var personal_information;
QUnit.test( "Test Add Relative", function( assert ) {
	personal_information = make_personal_information();
	var relative = make_relative("Bob", "MALE");
	person = add_relative("self", relative);
	assert.equal(person.n, "Bob", "Relative added name is 'Bob'");
	assert.equal(person.s, "M", "Relative's gender is 'M'");
});


// Sinon test 
test( "Test Sinon", function( assert ) {
    var stub = this.stub();
    var spy1 = this.spy();
    var spy2 = this.spy();

		stub();
		spy1();
		spy2();

    ok(spy1.called);
    ok(spy2.called);
    ok(stub.calledBefore(spy1));
});


/// ***
// Support functions


function make_relative (name, gender) {
	var relative = {};
	relative.id = guid();
	relative.name = name;
	relative.gender = gender;
	return relative;	
}

function make_personal_information () {
	var pi = {};
	pi.father = make_relative("Father", "MALE");
	pi.mother = make_relative("Mother", "FEMALE");
	pi.paternal_grandfather = make_relative("Paternal Grandfather", "MALE");
	pi.paternal_grandmother = make_relative("Paternal Grandmother", "FEMALE");
	pi.maternal_grandfather = make_relative("Maternal Grandfather", "MALE");
	pi.maternal_grandmother = make_relative("Maternal Grandmother", "FEMALE");
	return pi;
}

function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
	});
}
