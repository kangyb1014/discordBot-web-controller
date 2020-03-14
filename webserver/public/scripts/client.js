
window.onload = function(){
    $.get('/server/channel/trigger_response/all',function(data){
        refreshTriggerResponse(data)
    })
}

var deleteRow = function(row){
    objectID =  row.attr('objectID')
    $.ajax({
        "url": "/server/channel/trigger_response/"+objectID,
        "type": "DELETE",  
        success: function(result) {
          if(result['nModified'] == 0){
                alert('변경 없음')
          }
          else{
                alert('삭제 완료')
          }
          $.get('/server/channel/trigger_response/all',function(data){
            refreshTriggerResponse(data)
        })
        }
    });    
}


var postResponse = function(row){
    triggers_entry = row.contents().find('.triggers_entry')
    response_entry = row.contents().find('.response_entry')
    triggers_list = triggers_entry.val().split('\n')
    response_list = response_entry.val().split('\n')
    $.ajax({
        "url": "/server/channel/trigger_response",
        "type": "POST",  
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "server": "server",
            "channel": "channel",
            "ping": triggers_list,
            "pong": response_list
        }),
        success: function(result) {
          if(result['nModified'] == 0){
                alert('추가 실패')
          }
          else{
                alert('추가 완료')
          }
          $.get('/server/channel/trigger_response/all',function(data){
            refreshTriggerResponse(data)
        })
        }
    });    
}


var refreshTriggerResponse = function(data){
    trigger_response_tbody = $('.trigger_response_list > tbody')
    trigger_response_tbody.empty()
    data.forEach(function(element, index){
        index = index + 1
        var id = element['_id']
        var pings = element['ping'].join('\n')
        var pongs = element['pong'].join('\n')
        addTriggerResponse(trigger_response_tbody, index, id, pings, pongs)
    });

    var newTriggerResponse = addTriggerResponse(trigger_response_tbody, 'new', '', '', '')
    newTriggerResponse.contents().find('.remove_btn').remove()
    newTriggerResponse.contents().find('.putResponseBtn').text('add')
    newTriggerResponse.contents().find('.putResponseBtn').attr('onclick',"postResponse($(this).closest('tr'))")
    newTriggerResponse.contents().find('.putResponseBtn').attr('class','postResponseBtn')
}

var addTriggerResponse = function(parent, index, id, pings, pongs){
    var row =  $('<tr>').attr('objectID',id).append(               
        $('<td>').append(
            $('<div>')
                .attr("class","response_index")
                .text(index)
        ),
        $('<td>').append(
            $('<textarea>')
                .attr("class","triggers_entry")
                .attr("placeholder","when someone says...")
                .attr("style","overflow:hidden; overflow-wrap: break-work; height:61px;")
                .text(pings)
        ),
        $('<td>').append(
            $('<textarea>')
                .attr("class","response_entry")
                .attr("placeholder","response...")
                .attr("style","overflow:hidden; overflow-wrap: break-work; height:61px;")
                .text(pongs)
        ), 
        $('<td>').append(
            $('<button>')
                .attr("class","putResponseBtn")
                .attr("data-style","expand-right")
                .attr("style","display-inline;")
                .text("save")
                .attr("onclick","putResponse($(this).closest('tr'))")
                ,
            $('<button>')
            .attr("class","remove_btn")
            .attr("data-style","expand-right")
            .attr("style","display-inline;")
            .text("remove")
            .attr("onclick","deleteRow($(this).closest('tr'))")
        )
    )
    trigger_response_tbody.append(row)
    return row
}