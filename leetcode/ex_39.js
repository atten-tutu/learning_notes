39
这种计算竟然也是全排列，呃呃呃
这是觉得剪枝还是很重要滴
那就是还是固定的思想，result记录的是下标
函数（固定的值，sum）
  终止条件就是，sum等于target
  遍历一下
  然后选第二位固定的值（可以重复的那种）
bt(7,i,0)
难得我想哭
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []

    function bt(i,target,it){
        // console.log(i,target,it)
        if(target==0){
            // console.log(it)
            result.push([...it])
            console.log(result)
            return
        }
        if(target<0){
            
            return
        }
        for(let j = i;j < candidates.length;j++){
            it.push(candidates[j])
            bt(j,target-candidates[j],it)
            it.pop()
            
        }
    }
    bt(0,target,[])
    console.log(result)
    return result
};