import IMyDataStructure from "../dataStructure/interface/MyDataStructure";
import IMyIterator from "./interface/MyIterator";

class MyDefaultIterator<T> implements IMyIterator<T> {
    private _index = 0

    constructor(private readonly queue: IMyDataStructure<T>) {}

    reset(): void {
        this._index = 0
    }

    next(): IteratorResult<T> {
        const returnValue = {
            value: this.queue.getAll()[this._index],
            done: this._index >= this.queue.size(),
        }

        this._index++

        return returnValue
    }
}

export default MyDefaultIterator
