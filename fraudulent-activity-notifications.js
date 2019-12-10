//NOT A WORKING SOLUTION!! FAILS TESTS DUE TO TIMEOUT

function median(arr){
    let median;
    let avg;
	median = (arr.length+1)/2
	median%2 === 0 ? avg = arr[median-1] : avg = (arr[Math.floor(median)-1] + arr[Math.round(median)-1])/2
	return avg;
}

function activityNotifications(expenditure, d) {
    let notifications = 0;
    let arr = [];
    let median= 0;
    let i = 0;
    // let j =0;
    while (i<expenditure.length-d){
        // while (j<d){
        //     arr.push(expenditure[i+j])
        //     // arr.sort((a,b)=>a-b)
        //     j++;
        // }
        arr = expenditure.slice(i, i+d)
        median = median(arr);
        expenditure[arr.length+i] >= median*2 ? notifications++ : notifications
        arr = []
        i++;
        j=0;
    }
    return notifications;
}