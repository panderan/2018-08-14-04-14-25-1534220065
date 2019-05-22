module.exports = function main(numstr) {
    numstr_templates_top = ["._.","...","._.","._.","...","._.","._.","._.","._.","._."]
    numstr_templates_mid = ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"]
    numstr_templates_bom = ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]
    
    line_top = ""
    line_mid = ""
    line_bom = ""
    for (var i=0; i < numstr.length; i++) {
        idx = parseInt(numstr[i])
        line_top += numstr_templates_top[idx] + " "
        line_mid += numstr_templates_mid[idx] + " "
        line_bom += numstr_templates_bom[idx] + " "
    }
    
    line_top = line_top.trim()
    line_mid = line_mid.trim()
    line_bom = line_bom.trim()    
    return line_top+"\n"+line_mid+"\n"+line_bom+"\n"
};
