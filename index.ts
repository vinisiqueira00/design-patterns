import Queue from "./source/dataStructure/Queue"
import Stack from "./source/dataStructure/Stack"

import MyReverseIterator from "./source/iterators/MyReverseIterator"

interface ITask {
    title: string
    status: "TO_DO" | "DOING" | "DONE"
}

/**
 * Queue de tasks (Fila)
 * */

const queueClient = () => {
    const queue = new Queue<ITask>()

    queue.add({ title: "Task 01", status: "DONE" })
    queue.add({ title: "Task 02", status: "DONE" })
    queue.add({ title: "Task 03", status: "DOING" })
    queue.add({ title: "Task 04", status: "TO_DO" })

    /**
     * Desestruturação com iterator default
     * */
    const [queueTask1, queueTask2] = queue
    console.log("Desestruturados: ", queueTask1, queueTask2)

    /**
     * ForEach com iterator default
     * */
    for(const queueItem of queue) {
        console.log(queueItem)
    }

    queue.setIterator(new MyReverseIterator(queue))
    queue.remove()

    /**
     * Desestruturação com iterator reverso
     * */
    const [queueTask4, queueTask3] = queue
    console.log("Desestruturados: ", queueTask4, queueTask3)

    /**
     * ForEach com iterator reverso
     * */
    for(const queueItem of queue) {
        console.log(queueItem)
    }
}
queueClient()

/**
 * Stack de tasks (Pilha)
 * */

const stackClient = () => {
    const stack = new Stack<ITask>()

    stack.add({ title: "Task 01", status: "DONE" })
    stack.add({ title: "Task 02", status: "DONE" })
    stack.add({ title: "Task 03", status: "DOING" })
    stack.add({ title: "Task 04", status: "TO_DO" })

    /**
     * Desestruturação com iterator default
     * */
    const [stackTask1, stackTask2] = stack
    console.log("Desestruturados: ", stackTask1, stackTask2)

    /**
     * ForEach com iterator default
     * */
    for(const stackItem of stack) {
        console.log(stackItem)
    }

    stack.setIterator(new MyReverseIterator(stack))
    stack.remove()

    /**
     * Desestruturação com iterator reverso
     * */
    const [stackTask4, stackTask3] = stack
    console.log("Desestruturados: ", stackTask4, stackTask3)

    /**
     * ForEach com iterator reverso
     * */
    for(const stackItem of stack) {
        console.log(stackItem)
    }
}
stackClient()
