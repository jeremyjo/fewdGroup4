var table = document.getElementsByTagName("table");
var tableChildrenTR = table[0].children[0].children;
var tableChildrenTD;

// console.log(table);
// console.log(tableChildrenTR);

// cycles through all <tr>'s
Array.from(tableChildrenTR).forEach(function(tr){
    // console.log(tr.children);

    let temp = 0;
    let trColorChosen = "";

    if (tr.className.includes("color") ){
        console.log(tr);        
        let trColor = tr.className;
        console.log(trColor);
        for(var i = 0; i<trColor.length; i++){
            
            if(temp){
                trColorChosen += trColor.charAt(i);
            }

            if(trColor.charAt(i) == '-') {
                temp = 1;
            }

        }       // end of for()
        console.log(trColorChosen);
        tr.style.color = trColorChosen;
    }           // end of if()

    // cycles through all <th>'s and <td>'s
    Array.from(tr.children).forEach(function(td) {
        
        let tempTD = 0;
        let tdColorChosen = "";

        if (td.className.includes("color") ) {
            let tdColor = td.className;
            for(var i = 0; i<tdColor.length; i++){
            
                if(tempTD){
                    tdColorChosen += tdColor.charAt(i);
                }
    
                if(tdColor.charAt(i) == '-') {
                    tempTD = 1;
                }
    
            }       // end of for()
            td.style.color = tdColorChosen;
        }
    });     // end of Array.from(tr.children)

});         // end of Array.from(tableChildrenTR)
