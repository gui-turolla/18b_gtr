$(() => {
    $("#adicionar").click(() =>{
        $("#table-dados tbody").append(
        `<tr>
            <td>#</td>   
            <td>Nome</td>   
            <td>SobreNome</td>   
            <td>01/01/1980</td>        
        </tr>`
        )
    })
})