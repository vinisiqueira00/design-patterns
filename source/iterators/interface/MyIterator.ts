interface IMyIterator<T> extends Iterator<T> {
    /**
     * Função responsável por restaurar o estado do iterador para o estado inicial
     */
    reset(): void
}

export default IMyIterator
