var dateDiffInDays = function (date1, date2) {
  //   write your code here
	  // Convert dates to milliseconds since the UTC epoch
    const utcDate1 = Date.UTC(
        parseInt(date1.substring(0, 4)),
        parseInt(date1.substring(5, 7)) - 1,
        parseInt(date1.substring(8, 10))
    );
    const utcDate2 = Date.UTC(
        parseInt(date2.substring(0, 4)),
        parseInt(date2.substring(5, 7)) - 1,
        parseInt(date2.substring(8, 10))
    );

    // Calculate the difference in milliseconds
    const diffInMs = utcDate2 - utcDate1;

    // Convert the difference to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
