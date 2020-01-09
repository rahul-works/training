

class Cycled{
    constructor(steps) {
        this.steps = steps;
        this.index = 0;
    }

    get index() {
        return this._index;
    }

    set index(value){
        if(value<0){
            while(value<0){
                value += this.steps.length;
            }
            
        } 
        this._index = value;
    }

    current(){
        if(this.index<0){
            while(this.index>=0){
                console.log(this.index);
                this.index += this.steps.length;
            }
        }
        return this.steps[this.index];
    }

    next(){
        this.index = (this.index+1)%this.steps.length;
        return this.steps[this.index];
    }

    step(num){
        this.index = (this.index+num)%this.steps.length;
        return this.steps[this.index];
    }

    previous(){
        if(this.index==0){
            this.index = this.steps.length-1;
        } else {
            this.index = (this.index-1)%this.steps.length;
        }
        
        return this.steps[this.index];
    }

    reversed(){
        this.steps = this.steps.reverse();
        return this;
    }
}

const fixture = [1, 2, 3];
let c = new Cycled(fixture);

module.exports = Cycled;

