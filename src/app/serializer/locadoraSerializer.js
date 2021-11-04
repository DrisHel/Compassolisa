const serializer =({_id,nome,cnpj,atividades,endereco})=>{
    return {_id,nome, cnpj, atividades, endereco}
      
}

const paginatedSerialiser=({docs,totalDocs,limit,totalPages,page}) =>{
return{ 
    pessoas:docs.map(serializer),
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