export class Option {
    constructor($option, id) {
        this.$option = $option;  
        this.id = id;
    }

    select() {
       return this.id;
    }

}