const calculateProfitLoss = (arr, buy, sell) => {
  if (arr.length > buy && arr.length > sell) {
    if (arr[buy] > arr[sell]) {
     console.log("loss ", arr[sell] - arr[buy]);
    } else if (arr[buy] < arr[sell]) {
      return console.log("profit ", arr[sell] - arr[buy]);
    }
  }
//   else{
//     console.log('THE SIZE IS NOT APPROPRIATE');
//   }
};

calculateProfitLoss([1,2,34,4],2,3);