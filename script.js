function memoFib(num,cache){
//NOW YOU CHECK IF THE NUMBER IS INSIDE THE CACHE
	if(cache[num])return cache[num];
	else{
		if(cache[num]<3) return 1
		else{
			cache[index]=memoFib(num - 1,cache) + memoFib(num - 2,cache)
			}
		}
return cache[num]
}
memoFib(5,[])
