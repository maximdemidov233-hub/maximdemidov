export class Select {
    constructor($select) {
        this.$select = $select;
        
    }
    
    open(elem) {
        this.elem = elem;
        this.$select.after(this.elem); 
    }
    
    close() {   
        this.elem.remove();
    }
}