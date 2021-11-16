class Heap {
    constructor(){
        this.heap = [null]
    }
    add(val){
        if(this.heap[1] === undefined){
            this.heap.push(val)
            return this
        }
        //check parent
        let parent_idx = Math.floor(this.heap.length/2)
        if(this.heap[parent_idx] < val){
            this.heap.push(val)
            return this
        }
    
        let newIndex = this.heap.length
        while(this.heap[parent_idx] > val){
            if(this.heap[parent_idx] < val || this.heap[parent_idx] === null){
                return this
            }
            let parent = this.heap.splice(parent_idx, 1, val)
            this.heap.splice(newIndex, 1, parent[0]) //inserts into array
            newIndex = parent_idx
            parent_idx = Math.floor(parent_idx/2)
        }

    }
    //add themethod remove() to the heap class from Tuesday where it removes the minimum value in the heap. This method always takes out the smallest value from the min heap (index 1 since index 0 is null)-> going to remove and return that value. Upon removing the min value though, it will disorganize the heap, so you also have to reorganize the heap so it follows rules of a min heap where the parent is smaller than the children
    remove(){
        //store heap value and shift array
        let val = this.heap.splice(1,1)

        //redistributes the heap to become valid
        let p_idx = 1
        while(this.heap[p_idx] && this.heap[p_idx*2] && this.heap[(p_idx*2)+1] ){
            if(this.heap[p_idx] > this.heap[p_idx*2]){
                let temp = this.heap[p_idx]
                this.heap[p_idx] = this.heap[p_idx*2]
                this.heap[p_idx*2] = temp
            }
            if(this.heap[p_idx] > this.heap[p_idx*2+1]){
                let temp = this.heap[p_idx]
                this.heap[p_idx] = this.heap[p_idx*2+1]
                this.heap[p_idx*2+1] = temp
            }
            p_idx++
        }
        return val[0]
    }
}
let heap = new Heap()

heap.add(5)
heap.add(4)
heap.add(3)
heap.add(3)
heap.add(7)
heap.add(8)
heap.add(10)
heap.add(14)
heap.add(17)
heap.add(2)
heap.add(8)
heap.add(7)
heap.add(-7)
heap.add(17)
heap.add(18)
heap.add(6)



console.log(heap.heap)
console.log(heap.remove())
console.log(heap.heap)