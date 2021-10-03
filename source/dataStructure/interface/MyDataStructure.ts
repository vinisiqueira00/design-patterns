import IMyIterator from "../../iterators/interface/MyIterator";

interface IMyDataStructure<T> {
    /**
     * Função responsável por inserir item na estrutura de dados
     * @param item Item a ser inserido da estrutura de dados
     */
    add(item: T): void

    /**
     * Função responsável por remover item da estrutura de dados e retorná-lo
     * @returns Retorna o dado removido ou, se não encontrar, retorna undefined
     */
    remove(): T | undefined

    /**
     * Função responsável por informar a quantidade de dados armazenados atualmente nesta estrutura de dados
     * @returns Retorna um inteiro representando a quantidade de dados armazenados atualmente nesta estrutura de dados
     */
    size(): number

    /**
     * Função responsável por informar todo o conteúdo armazenado nesta estrutura de dados
     * @returns Retorna um array contendo os dados atualmente armazenados nesta estrutura de dados
     */
    getAll(): T[]

    /**
     * Função responsável por informar qual o iterador será resposável pela iteração desta estrutura de dados
     * @param iterator Iterador a ser usado nesta estrutura de dados
     */
    setIterator(iterator: IMyIterator<T>): void
}

export default IMyDataStructure
