// add

$(function(){
    $("#add").on('click',function(){
        $("#tbody").append(`
        <tr >
        <td>
          <div class="icon-holder" id="save">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
          </svg>
          <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </div>
        </td>
        <td>
            <input id="mablagh-kol" type="text">
        </td>
        <td>
            <input id="maliat" type="text">
        </td>
        <td>
            <input id="takhfif" type="text">
        </td>
        <td>
            <input id="mablagh" type="text">
        </td>
        <td>
            <input id="tedad" type="text">
        </td>
        <td>
            <input id="vahed" type="text">
        </td>
        <td>
            <input id="sharh" type="text">
        </td>
        <td>
            <select id="select" aria-placeholder="select...">
                <option value="">کالا</option>
                <option value="">خدمات</option>
            </select>
                
        </td>
        <td>1</td>
        </tr>
        `)
    })

    $("#save").on('click',function(){
        console.log("hi");
        $("#tbody").append(`
        <tr >
        <td>
          <div class="icon-holder">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
          </svg>
          <svg id="save" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save-fill" viewBox="0 0 16 16">
            <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
          </svg>
        </div>
        </td>
        <td>
            <p>$("#mablagh-kol").value</p>
        </td>
        <td>
        <p>$("#maliat").value</p>
        </td>
        <td>
        <p>$("#takhfif").value</p>
        </td>
        <td>
        <p>$("#mablagh").value</p>
        </td>
        <td>
        <p>$("#tedad").value</p>
        </td>
        <td>
        <p>$("#vahed").value</p>
        </td>
        <td>
        <p>$("#sharh").value</p>
        </td>
        <td>
        <p>$("#select").value</p>
        </td>
        <td>1</td>
        </tr>
        `)
    })
})