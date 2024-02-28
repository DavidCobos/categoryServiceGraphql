

export const getCategory = async (
    _: any,
    { level }: Args,
    { clients: { category, categoryerp } }: Context
) => {

    const categoryTree = await category.getCategoryTree(level)
    
    const clientResponse = categoryTree.map(async element => {

        const resultC = await categoryerp.getCategoryPicture(element.id.toString())

        let catRes:categoryResponse = {
            id: element.id,
            nombre: element.name,
            title: element. Title,
            imageUrl: resultC.imageUrl,
            special: resultC.special
        }

        return catRes
    });

    let categorias:categoryResponse[] = []

    await Promise.all(clientResponse).then((respuesta) => categorias = respuesta)

    return categorias
}