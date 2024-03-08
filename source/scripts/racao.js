function calcularRacao(){
    const pesoKG = Number(frm.inQuantidade.value)
    const consumo = Number(frm.inConsumo.value)

    const pesoGR = pesoKG * 1000;
    const dias = Math.floor(pesoGR/consumo);
    const sobra = pesoGR % consumo
    outResp1.innerText = `A ração irá durar ${dias} dias`
    outResp2.innerText = `Irá sobrar ${sobra}gr`
}

export {calcularRacao};



