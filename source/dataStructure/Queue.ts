import MyDefaultIterator from "../iterators/MyDefaultIterator"
import IMyIterator from "../iterators/interface/MyIterator"
import IMyDataStructure from "./interface/MyDataStructure"

class Queue<T> implements IMyDataStructure<T> {
    private _data: T[] = []
    private _iterator: IMyIterator<T> = new MyDefaultIterator(this)

    public add(item: T): void {
        this._data.push(item)
    }

    public remove(): T | undefined {
        return this._data.shift()
    }

    public size(): number {
        return this._data.length
    }

    public getAll(): T[] {
        return this._data
    }

    public setIterator(iterator: IMyIterator<T>): void {
        this._iterator = iterator
    }

    private [Symbol.iterator](): IMyIterator<T> {
        this._iterator.reset()
        return this._iterator
    }
}

export default Queue
