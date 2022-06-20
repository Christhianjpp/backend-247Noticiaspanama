

export const activeLabel = (etiquetas, checkedLabelState) => {
    console.log(checkedLabelState)
    console.log(etiquetas)


    const position = []

    etiquetas.forEach((etiqueta) => {
        position.push(etiqueta.uid)
    })


    // checkedLabelState.reduce((asd, currentState, index) => {

    //     if (position.includes(index)) {
    //         return jkl.push(true)
    //     } else {
    //         return jkl.push(false)
    //     }
    // }, 0)

    const checkedLabels = checkedLabelState.map((label, index) =>
        position.includes(index) ? true : false)

    // checkedLabelState.map((element, index) => {

    // })

    return checkedLabels

}