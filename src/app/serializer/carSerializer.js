const serializer =({_id,modelo, cor, ano, acessorios, quantidadePassageiros})=>{
    return {_id,modelo, cor, ano, acessorios, quantidadePassageiros}
      
}

const paginatedSerialiser=({docs,totalDocs,limit,totalPages,page}) =>{
return{ 
    veiculos:docs.map(serializer),
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