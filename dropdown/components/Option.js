export class Option {
    constructor($option, id) {
        this.$option = $option;  
        this.id = id;
    }

    select() {
        console.log(this.id);
       return this.id;
    }

}