import { randomUUID } from "crypto"


export class DatabaseMemory{
    #livros = new Map()

list(search){
    return Array.from(this.#livros.entries()).map((livroArray) => {
        const id = livroArray[0]

        const data = livroArray[1]
        
        return{
            id,
            ...data,
        }
    }) 

    .filter(livro => {
        if (search) {
    return livro.titulo.includes(search)
    }
        return true
    })
}

    create(livro){
        const livroId = randomUUID()
        this.#livros.set(livroId, livro)
    }
    
    update(id, livro){
        this.#livros.set(id, livro)
    }

    delete(id, livro){
        this.#livros.delete(id, livro)
    }
}

