const ages = [3, 5, 44, 7, 33, 33, 17, 90, 8, 12, 3, 24, 120, 7, 100];

const ranges = [
	[7,15],
	[4,40],
	[11,125]
];

for(let i=0; i<ranges.length; i++){
    let temp=0;
    for(let j=0; j<ages.length; j++){
        if(ages[j] >= ranges[i][0] && ages[j] <= ranges[i][1])
            temp++;
    }
    console.log(temp);
}