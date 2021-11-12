const serializer =({_id,nome, cnpj,atividades,endereco, isFilial})=>{
    return {_id,nome, cnpj,atividades,endereco, isFilial}
      
}

const paginatedSerialiser=({docs,totalDocs,limit,totalPages,page}) =>{
return{ 
    locadora:docs.map(serializer),
    limit,
    total:totalDocs,
    offset:page,
    offsets:totalPages,
}
}

module.exports={
    serializer,
    paginatedSerialiser
}