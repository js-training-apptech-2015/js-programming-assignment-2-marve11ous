function solution1(A)
{
	var B = [true], i;
	for (i=0; i<A.length; i++)
	{
    		if (A[i]>0) B[A[i]] = true;
	}
	for (i=0; i<B.length; i++)
	{
    		if (B[i] === undefined) break;
	}
	return i;
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

function solution3(A, F)
{
	var f = /(.*)=>(.*)/.exec(F);
        return A.map(new Function(f[1].replace(/[\(\)]/g, ''),'return '+f[2]));
}
