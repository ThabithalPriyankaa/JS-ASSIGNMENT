function reverse(n)
{
	let rev = 0;
	while (n > 0)
	{
		let d = n % 10;
		rev = rev * 10 + d;
		n = parseInt(n / 10);
	}
	return rev;
}
function isPalin(n)
{
	return (n == reverse(n));
}
function countDigits(n)
{
	let c = 0;
	while (n > 0)
	{
		n = parseInt(n / 10);
		c++;
	}
	return c;
}
function countPalinDigits(arr, n)
{
	let s = 0;
	for (let i = 0; i < n; i++)
	{
		if (arr[i] < 10 || isPalin(arr[i]))
		{
			s += countDigits(arr[i]);
		}
	}
	return s;
}
	let arr = [ 5,7,8,9 ,76];
	let n = arr.length;
	console.log(countPalinDigits(arr, n)); 