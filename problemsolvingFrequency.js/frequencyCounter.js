function  findFrequencies(ele)
    {
        var freq = 1;
        var idx = 1;
        var element = ele[0];
        while (idx < ele.length)
        {
         
            // check if the current element is equal to
            // previous element.
            if (ele[idx - 1] == ele[idx]) {
                freq++;
                idx++;
            }
            else
            {
               console.log(element + " " + freq);
                element = ele[idx];
                idx++;
                 
                // reset the frequency
                freq = 1;
            }
        }
         
        // print the last element and its frequency
       console.log(element + " " + freq);
    }
     
    // Driver code
        let element=[1,3,4,5,3,3,2,1]
        console.log(findFrequencies(element));