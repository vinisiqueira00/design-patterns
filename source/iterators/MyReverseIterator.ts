import IMyDataStructure from "../dataStructure/interface/MyDataStructure";
import IMyIterator from "./interface/MyIterator";

class MyReverseIterator<T> implements IMyIterator<T> {
    private _index = this.queue.size()

    constructor(private readonly queue: IMyDataStructure<T>) {}

    reset(): void {
        this._index = this.queue.size()
    }

    next(): IteratorResult<T> {
        this._index--

        const returnValue = {
            value: this.queue.getAll()[this._index],
            done: this._index < 0,
        }

        return returnValue
    }
}

export default MyReverseIterator
