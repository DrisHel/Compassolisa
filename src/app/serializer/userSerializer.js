const serializer =({_id,nome,cpf,data_nascimento,email,habilitado})=>{
    return {_id,nome,cpf,data_nascimento,email,habilitado}
      
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