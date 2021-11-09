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
}
let heap = new Heap()

heap.add(heap, 5)
heap.add(heap, 4)
heap.add(heap, 3)
heap.add(heap, 3)
heap.add(heap, 7)
heap.add(heap, 8)
heap.add(heap, 10)
heap.add(heap, 14)
heap.add(heap, 17)
heap.add(heap, 2)
heap.add(heap, 8)
heap.add(heap, 7)
heap.add(heap, -7)
heap.add(heap, 17)
heap.add(heap, 18)
heap.add(heap, 6)


console.log(heap.heap)