class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const itemHandler=(item)=>{
  switch(item.name){
    case "Aged Brie":
      item.quality<=50 ? item.quality+=1 : item.quality=50
      item.sellIn>=0 ? item.sellIn-=1 : item.sellIn=0
      break;

    case "Backstage passes to a TAFKAL80ETC concert": 
      if(item.sellIn>10){
        item.quality<=50 ? item.quality+=1 : item.quality=50
        item.sellIn-=1 
      }else if((item.sellIn<=10) && (item.sellIn>5)){
        item.quality<=48 ? item.quality+=2 : item.quality=50
        item.sellIn-=1 
      }else if((item.sellIn<=5) && (item.sellIn>0)){
        
        item.quality<48 ? item.quality+=3 : item.quality=50
        item.sellIn-=1 
      }else{
        item.quality=0
        item.sellIn=0
      }
      break;
    case "Sulfuras, Hand of Ragnaros":
      break;
    default: 
    item.quality<=50 ? item.quality+=1 : item.quality=50
    item.sellIn>=0 ? item.sellIn-=1 : item.sellIn=0
  }
return item;
}
class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    let newItemArray=[]
    for (let i = 0; i < this.items.length; i++) {
      newItemArray[i]=itemHandler(this.items[i])
    }
    console.log(newItemArray)
    this.items=newItemArray
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
