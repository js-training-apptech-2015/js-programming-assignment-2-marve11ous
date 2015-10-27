function solution1(A)
{
	A.sort();
	var min = 1;
	for (var i=0; i<A.length; i++)
	{
		if (A[i]<=0) continue;
		if (A[i]>min) return min;
		min++;
	}
	return min;
}

function solution2(S) {
	var brackets = "[]{}()";
	var stack = [];
	for(var i=0; i < S.length; i++) 
	{
		var pos = brackets.indexOf(S[i]);
    if(pos === -1) continue;
		if(pos % 2 === 0)
		{
			stack.push(pos + 1);
		}
		else if(stack.pop() !== pos)
		{
			return false;
		}
	}
	return stack.length === 0;
}
