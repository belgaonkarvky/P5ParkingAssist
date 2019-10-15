class Slot {
    constructor(x,y, ht) {
        this.x = x;
        this.y = y;
        this.wd = 90;
        this.ht = ht;
        this.fillSlot = 255;
        this.slotStatus = false;
        this.carX = this.x;
        this.carY = this.y;
        this.carmX = this.x;
        this.carmove = 0;
        this.showSlot = function(){        
            fill(this.fillSlot);
            rect(this.carX, this.carY, this.wd, this.ht);
        }
    }
    disply() {
        if (this.slotStatus == true) {
            fill(0, 0, 100);
            rect(this.carX, this.carY, this.wd, this.ht);
            this.carmove = 0;
        }
    }
    moveCar() {
        
           
            if(this.carmove == 10){
                fill(0, 0, 100);
            rect(this.carmX, this.carY, this.wd, this.ht);
                this.carmX += this.carmove;
            }
            else{
                this.carmX = this.carX;
            }
            
            //this.carmove = 1;
        
    }
    emptySlot(mX, mY) {
        if (mX > this.x && mX < (this.x + this.wd) && mY > this.y && mY < (this.y + this.ht)) {
            console.log("clicked this box");
            this.fillSlot = 255;
            this.slotStatus = false;
            this.carmove = 10;
            return true;
        }
        else {
            return false;
        }
    }
}