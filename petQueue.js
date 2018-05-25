'use strict';

class _Node {
    constructor(value) {
        this.value=value,
        this.next=null,
        this.prec=null;
    }
}
class petQueue {
    constructor(){
        this.first = null;
        this.last = null;
    }
    enqueue(data){
        const node = new _Node(data);
        if(this.first === null){
            this.first = node;
        }
        if(this.last){
            node.next = this.last;
            this.last.prev = node;
        }
        this.last = node;
    }
    dequeue(){
        if(this.first === null){
            return;
        }
        const node = this.first;
        this.first = node.prev;
        if(node === this.lase){
            this.last = null;
        }
        return node.value;
    }
    peek(){
        if(!this.first){
            return;
        }
        else{
            return this.first.value;
        }
    }
}


    let catQueue = new petQueue();
    let dogQueue = new petQueue();
    catQueue.enqueue({
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
      });
    catQueue.enqueue({
        imageURL:'https://visualhunt.com/photo/201247/', 
        imageDescription: 'Siamese cat with blue eyes',
        name: 'Precious',
        sex: 'Female',
        age: 1,
        breed: 'Siamese',
        story: 'Found in abandoned house'
      });
    catQueue.enqueue({
        imageURL:'https://visualhunt.com/photo/190693/', 
        imageDescription: 'Calico cat lounging on the sidewalk',
        name: 'Cutie',
        sex: 'Female',
        age: 8,
        breed: 'Calico',
        story: 'Found in abandoned house'
      });
    dogQueue.enqueue({
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away'
      });
    dogQueue.enqueue({
        imageURL: 'https://www.dogmal.com/dog-photos/#bwg1/66',
        imageDescription: 'A chocolate pitbull with a spikey collar',
        name: 'Champ',
        sex: 'Male',
        age: 5,
        breed: 'Pitbull',
        story: 'Owner died'
      });
    dogQueue.enqueue({
        imageURL: 'https://www.indiamart.com/proddetail/spitz-dog-puppy-15509775091.html',
        imageDescription: 'A white fluffy puppy',
        name: 'Bunny',
        sex: 'Male',
        age: 1,
        breed: 'Spitz',
        story: 'Found on the side of the highway'
      });
      catQueue.peek();
    //   peek(dogQueue);
    //   console.log(catQueue);
    //   console.log(dogQueue);


module.exports = { petQueue, catQueue, dogQueue };