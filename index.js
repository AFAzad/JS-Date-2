//The JS Date object has many useful properties.

//Implement the function whichDay, which returns takes a Date object and returns a string
//like this "It is the first day of the week" depedning on dat object it will show return string which day of the week it is. (Use JS built in functions)

//Note:- Sunday is "last" day of the week while rest all days are first, second, third, fourth, fifth and sixth day





function whichDay(date) {
    let day=date.getDay();
    let str="";
  switch(day)
  {
      case 0:
          str="Today is the last day of the week";
          break;
      case 1:
          str="Today is the first day of the week";
          break;
      case 2:
          str ="Today is the second day of the week";
          break;
      case 3:
          str ="Today is the third day of the week";
          break;
      case 4:
          str ="Today is the fourth day of the week";
          break;
      case 5:
          str ="Today is the fifth day of the week";
          break;
      case 6:
          str ="Today is the sixth day of the week";
          break;
  }
  return str;
  }