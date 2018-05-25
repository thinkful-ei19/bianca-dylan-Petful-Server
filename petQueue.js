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
        imageURL:'https://visualhunt.com/photos/7/pet-cat-eye.jpg?s=s', 
        imageDescription: 'Siamese cat with blue eyes',
        name: 'Precious',
        sex: 'Female',
        age: 1,
        breed: 'Siamese',
        story: 'Found in abandoned house'
      });
    catQueue.enqueue({
        imageURL:'https://images.unsplash.com/photo-1507984211203-76701d7bb120?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eacbf50fac29a13afba26ad7499cedee&w=1000&q=80', 
        imageDescription: 'Calico cat lounging on the grass',
        name: 'Cutie',
        sex: 'Female',
        age: 8,
        breed: 'Calico',
        story: 'Found in abandoned house'
      });
    catQueue.enqueue({
        imageURL:'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', 
        imageDescription: 'Bengal cat snarling',
        name: 'Mongo',
        sex: 'Female',
        age: 1,
        breed: 'Bengal',
        story: 'Found walking with wolves'
      });
      catQueue.enqueue({
        imageURL:'https://i.pinimg.com/originals/27/c0/c9/27c0c96704f754cea899cddd9d554ee6.png', 
        imageDescription: '',
        name: '',
        sex: '',
        age: 0,
        breed: '',
        story: 'No more cats available'
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
        imageURL: 'https://www.askideas.com/media/26/Pit-Bull-Dog-Walking-On-Grass.jpg',
        imageDescription: 'A chocolate pitbull with a spikey collar',
        name: 'Champ',
        sex: 'Male',
        age: 5,
        breed: 'Pitbull',
        story: 'Owner died'
      });
    dogQueue.enqueue({
        imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        imageDescription: 'A white fluffy puppy',
        name: 'Bunny',
        sex: 'Male',
        age: 1,
        breed: 'Spitz',
        story: 'Found on the side of the highway'
      });
      dogQueue.enqueue({
        imageURL: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
        imageDescription: 'A scary dog showing his teeth',
        name: 'Rex',
        sex: 'Female',
        age: 4,
        breed: 'Mix',
        story: 'Too aggressive with owners'
      });
      dogQueue.enqueue({
        imageURL:'https://thumbs.dreamstime.com/b/no-dog-sign-14337767.jpg',
        imageDescription: '',
        name: '',
        sex: '',
        age: 0,
        breed: '',
        story: 'No more dogs available.'
      });
      catQueue.peek();
    //   peek(dogQueue);
    //   console.log(catQueue);
    //   console.log(dogQueue);


module.exports = { petQueue, catQueue, dogQueue };