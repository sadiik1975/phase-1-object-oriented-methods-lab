// Define the BoardMember constructor function
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  // Add the veto method
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  
  // Add the approve method
  BoardMember.prototype.approve = function() {
    return "You can do that!";
  };
  
  // Add the doCharity method
  BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
  };
  
  // Add the releasePressStatement method
  BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };
  
  // Add the sayHi method
  BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
  
  // Example usage:
  const boardMember = new BoardMember("John", "New York", "Finance");
  
  console.log(boardMember.veto()); // "No, I must disagree"
  console.log(boardMember.approve()); // "You can do that!"
  console.log(boardMember.doCharity()); // "I like to help people."
  console.log(boardMember.releasePressStatement()); // "You will see great things from Scuber."
  console.log(boardMember.sayHi()); // "Hi, my name is John. I am from New York, and I was trained in Finance."
  