
function Roll(flavor, glaze, cost, quantity) {
  this.flavor=flavor,
  this.glaze=glaze,
  this.cost=cost,
  this.quantity=quantity
}

if (localStorage.getItem('counter')>0){
  counter=parseInt(localStorage.getItem('counter'));
}
else {
  var counter=0;
}

var glazeSelected;
//change ATC button text based on scenario
function checkSelections() {
  //console.log("runningcheckSelections");
  var addtocartbutton=document.getElementsByClassName("atc")[0];
  if (addtocartbutton != null){
  //can add to pastry box
  if ($('.active.image2')[0] != null && glazeSelected != null && counter <3){
    //console.log('hit the case');
    var atcbutton = 'Add to Pastry Box';
    var link = document.createElement('a');
    link.href='pastrybox.html';
    if (link != null && $('.atc') != null){
      link.appendChild(document.createTextNode(atcbutton));
      addtocartbutton.removeChild(addtocartbutton.childNodes[0]);
      addtocartbutton.appendChild(link);
    };
  }
  //Not everything required is selected
  if (addtocartbutton.innerHTML=='' ){
    //console.log('hit the other case');
    var atcbutton = 'Please select a flavor and a glaze.';
    var link = document.createElement('div');
    if (link != null && $('.atc') != null){
      link.appendChild(document.createTextNode(atcbutton));
      addtocartbutton.appendChild(link);
    };
  }
  //your cart is full
  else if (counter==3){
    var atcbutton = 'Pastry Box is full. Go to Pastry Box >>';
    var link = document.createElement('a');
    link.href='pastrybox.html';
    if (link != null && $('.atc') != null){
      link.appendChild(document.createTextNode(atcbutton));
      addtocartbutton.removeChild(addtocartbutton.childNodes[0]);
      addtocartbutton.appendChild(link);
    };
  }
};
};
//change big image once flavor selected
//image comes from https://unsplash.com/photos/2Io2FzN1jOw
function swapBigImage(){
var currImage=document.getElementById('bigimage');
if (currImage != null){
currImage.src='assets/selected.png';
};
};

$(document).ready(function(){
  if (localStorage.getItem("counter") !=null){
    if ($('.cinnacount')[0] !=null){
      $('.cinnacount')[0].innerHTML=counter;
    };
    totalObjects=JSON.parse(localStorage.getItem("counter"));
    checkSelections();
    totalqty=0;
    for (i=1; i <= totalObjects; i++){
      totalqty=totalqty+parseInt(JSON.parse(localStorage.getItem("cinnamonRoll"+i)).quantity);
    };
    //console.log(totalqty);
    var finalprice=0;
    //add data about the first pastry box
    if (counter>=1){
      var description = document.getElementById("descrip");
      var qty= JSON.parse(localStorage.getItem("cinnamonRoll1")).quantity;
      var flavor = JSON.parse(localStorage.getItem("cinnamonRoll1")).flavor;
      var glaze = JSON.parse(localStorage.getItem("cinnamonRoll1")).glaze;
      if (glaze=='None'){
        glaze='no'
      };
      var cost = JSON.parse(localStorage.getItem("cinnamonRoll1")).cost;
      if (cost == '$2.75'){
        price = 2.75;
      } else if (cost == '$2.50'){
        price=2.50;
      }
      var totalprice=price*parseInt(qty)
      totalprice=totalprice.toFixed(2);
      var newItem=document.createElement('th');
      if (qty==1){
      details= qty +" "+ flavor +" cinnamon roll with " + glaze +" glaze: $"+ totalprice +" for the box";

      }
      else{
      details= qty +" "+ flavor +" cinnamon rolls with " + glaze +" glaze: $"+ totalprice +" for the box";
      };
      if (newItem != null && description != null){
        //console.log('test');
        newItem.appendChild(document.createTextNode(details));
        description.appendChild(newItem);
      };
      if ($('#totalcount')[0] != null){
        if (counter==1){
          $('#totalcount')[0].innerHTML="You have " + counter+ " pastry box in your cart."
        }
        else {
        $('#totalcount')[0].innerHTML="You have " + counter+ " pastry boxes in your cart."
      };
    };
      var tableDetails=document.getElementById('boxinfo');
      var rowInfo=document.createElement('tr');
      var col1Info=document.createElement('th');
      var col2Info=document.createElement('th');
      var col3Info=document.createElement('th');
      var col4Info=document.createElement('th');
      var detail1= "Box #1";
      if (qty==1){
      detail2= qty +" "+ flavor +" cinnamon roll with " + glaze +" glaze";

      }
      else{
      detail2= qty +" "+ flavor +" cinnamon rolls with " + glaze +" glaze";
      };
      detail3="$"+totalprice
      var removeButton=document.createElement('div');
      var detail4='Remove this item';
      var detail41=removeButton.appendChild(document.createTextNode(detail4));
      if (col1Info !=null && col2Info !=null && col3Info !=null && col4Info !=null && rowInfo != null && tableDetails != null){
      col1Info.appendChild(document.createTextNode(detail1));
      col2Info.appendChild(document.createTextNode(detail2));
      col3Info.appendChild(document.createTextNode(detail3));
      col4Info.appendChild(detail41);
      rowInfo.appendChild(col1Info);
      rowInfo.appendChild(col2Info);
      rowInfo.appendChild(col3Info);
      rowInfo.appendChild(col4Info);
      tableDetails.appendChild(rowInfo);
    };
    finalprice=finalprice+parseFloat(totalprice);
    //console.log(finalprice);
    if (document.getElementById("boxinfo")!= null){
    var removeRequest=document.getElementById("boxinfo").rows[0].cells[3];
  };
  //allow user to remove first pastry box added
    $(removeRequest).click(function(){
      //console.log('hello');
      var key = "cinnamonRoll1";
      localStorage.removeItem(key);
      localStorage.setItem("counter", JSON.stringify(counter-1));
      var cinroll2=localStorage.getItem("cinnamonRoll2");
      var cinroll3=localStorage.getItem("cinnamonRoll3");
      if (localStorage.getItem("cinnamonRoll2") != null){
        localStorage.setItem("cinnamonRoll1", cinroll2);
        localStorage.removeItem("cinnamonRoll2");
      }
      if (localStorage.getItem("cinnamonRoll3") != null){
        localStorage.setItem("cinnamonRoll2", cinroll3);
        localStorage.removeItem("cinnamonRoll3");
      }
      if (document.getElementsByClassName("boxinfo") !=null){
      document.getElementById("boxinfo").deleteRow(0);
    };
      if (document.getElementsByClassName("boxes")[0] !=null){
      document.getElementsByClassName("boxes")[0].deleteRow(0);
    };
    });
    };
    //add data about second pastry box
    if (counter>=2){

      //adding box 2
      var description = document.getElementById("descrip");
      var qty= JSON.parse(localStorage.getItem("cinnamonRoll2")).quantity;
      var flavor = JSON.parse(localStorage.getItem("cinnamonRoll2")).flavor;
      var glaze = JSON.parse(localStorage.getItem("cinnamonRoll2")).glaze;
      if (glaze=='None'){
        glaze='no'
      };
      var cost = JSON.parse(localStorage.getItem("cinnamonRoll2")).cost;
      if (cost == '$2.75'){
        price = 2.75;
      } else if (cost == '$2.50'){
        price=2.50;
      }
      var totalprice=price*parseInt(qty)
      totalprice=totalprice.toFixed(2);
      var newItem=document.createElement('th');
      if (qty==1){
      details= qty +" "+ flavor +" cinnamon roll with " + glaze +" glaze: $"+ totalprice +" for the box";

      }
      else{
      details= qty +" "+ flavor +" cinnamon rolls with " + glaze +" glaze: $"+ totalprice +" for the box";
      };      if (newItem != null && description != null){
        //console.log('test');
        newItem.appendChild(document.createTextNode(details));
        description.appendChild(newItem);
      };
      var image = document.getElementById("images");
      var newBox=document.createElement('img');
      var newRow=document.createElement('th');
      newBox.src="assets/pastrybox.png";
      if (newBox != null && image != null && newRow !=null){
        image.appendChild(newRow).appendChild(newBox);
      };
      var tableDetails=document.getElementById('boxinfo');
      var rowInfo=document.createElement('tr');
      var col1Info=document.createElement('th');
      var col2Info=document.createElement('th');
      var col3Info=document.createElement('th');
      var detail1= "Box #2";
      if (qty==1){
      detail2= qty +" "+ flavor +" cinnamon roll with " + glaze +" glaze";

      }
      else{
      detail2= qty +" "+ flavor +" cinnamon rolls with " + glaze +" glaze";
      };
      detail3="$"+totalprice
      if (col1Info !=null && col2Info !=null && col3Info !=null && rowInfo != null && tableDetails != null){
      col1Info.appendChild(document.createTextNode(detail1));
      col2Info.appendChild(document.createTextNode(detail2));
      col3Info.appendChild(document.createTextNode(detail3));
      rowInfo.appendChild(col1Info);
      rowInfo.appendChild(col2Info);
      rowInfo.appendChild(col3Info);
      tableDetails.appendChild(rowInfo);
      };
      finalprice=finalprice+parseFloat(totalprice);
      //console.log(finalprice);
      };
      //add data about third pastry box
    if (counter==3){
      //box 3
      var description = document.getElementById("descrip");
      var qty= JSON.parse(localStorage.getItem("cinnamonRoll3")).quantity;
      var flavor = JSON.parse(localStorage.getItem("cinnamonRoll3")).flavor;
      var glaze = JSON.parse(localStorage.getItem("cinnamonRoll3")).glaze;
      if (glaze=='None'){
        glaze='no'
      };
      var cost = JSON.parse(localStorage.getItem("cinnamonRoll3")).cost;
      if (cost == '$2.75'){
        price = 2.75;
      } else if (cost == '$2.50'){
        price=2.50;
      }
      var totalprice=price*parseInt(qty)
      totalprice=totalprice.toFixed(2);
      var newItem=document.createElement('th');
      if (qty==1){
      details= qty +" "+ flavor +" cinnamon roll with " + glaze +" glaze: $"+ totalprice +" for the box";

      }
      else{
      details= qty +" "+ flavor +" cinnamon rolls with " + glaze +" glaze: $"+ totalprice +" for the box";
      };      if (newItem != null && description != null){
        //console.log('test');
        newItem.appendChild(document.createTextNode(details));
        description.appendChild(newItem);
      };
      var image = document.getElementById("images");
      var newBox=document.createElement('img');
      var newRow=document.createElement('th');
      newBox.src="assets/pastrybox.png";
      if (newBox != null && image != null && newRow !=null){
        image.appendChild(newRow).appendChild(newBox);
      };
      var tableDetails=document.getElementById('boxinfo');
      var rowInfo=document.createElement('tr');
      var col1Info=document.createElement('th');
      var col2Info=document.createElement('th');
      var col3Info=document.createElement('th');
      var detail1= "Box #3";
      if (qty==1){
      detail2= qty +" "+ flavor +" cinnamon roll with " + glaze +" glaze";

      }
      else{
      detail2= qty +" "+ flavor +" cinnamon rolls with " + glaze +" glaze";
      };
      detail3="$"+totalprice
      if (col1Info !=null && col2Info !=null && col3Info !=null && rowInfo != null && tableDetails != null){
      col1Info.appendChild(document.createTextNode(detail1));
      col2Info.appendChild(document.createTextNode(detail2));
      col3Info.appendChild(document.createTextNode(detail3));
      rowInfo.appendChild(col1Info);
      rowInfo.appendChild(col2Info);
      rowInfo.appendChild(col3Info);
      tableDetails.appendChild(rowInfo);
    };
    finalprice=finalprice+parseFloat(totalprice);
    //console.log(finalprice);
    };
    if ($('#totalprice')[0] !=null){
    $('#totalprice')[0].innerHTML="$"+finalprice.toFixed(2)+"*";
  };
  };
  $(".image2").click(function(){
    $(".image2").removeClass("active");
    $(this).addClass("active");
    checkSelections();
    swapBigImage();
  });
  $(".glaze1").click(function(){
    $(".glaze1").removeClass("activeglaze");
    //console.log("removed");
    $(this).addClass("activeglaze");

    // console.log("added");
    glazeSelected=document.getElementsByClassName('activeglaze')[0].innerHTML;
    if (glazeSelected == 'None'){
      $('#money')[0].innerHTML = '$2.50';
    }
    if (glazeSelected != 'None'){
      $('#money')[0].innerHTML = '$2.75';
    }
    checkSelections();
  });

  $(".subtract").click(function(){
    $(".number")[0].innerHTML= parseInt($(".number")[0].innerHTML)-1;
    if ($(".number")[0].innerHTML==1){
      $(".subtract")[0].innerHTML='';
    };
  });
  $(".add").click(function(){
    $(".number")[0].innerHTML= parseInt($(".number")[0].innerHTML)+1;
    if ($(".number")[0].innerHTML>1){
      $(".subtract")[0].innerHTML='-';
    };
  });

//store the selections
  $('.atc').click(function(){
    if ($('div.atc')[0].innerHTML == '<a href="pastrybox.html">Add to Pastry Box</a>'){
    counter=counter+1;
    //console.log('test');
  //get selected flavor
    if ($('.active.image2')[0].src.indexOf('blackberry')>0){
      flavor = 'Blackberry'
    } ;
    if ($('.active.image2')[0].src.indexOf('gflogo')>0){
      flavor = 'Gluten-Free Original'
    } ;
    if ($('.active.image2')[0].src.indexOf('pecan')>0){
      flavor = 'Caramel Pecan'
    } ;
    if ($('.active.image2')[0].src.indexOf('pumpkin')>0){
      flavor = 'Pumpkin Spice'
    } ;
    if ($('.active.image2')[0].src.indexOf('original')>0){
      flavor = 'Original'
    } ;
    if ($('.active.image2')[0].src.indexOf('walnut')>0){
      flavor = 'Walnut'
    } ;

  //get selected glaze1
    glaze=glazeSelected;

  //get Price
    cost = $('#money')[0].innerHTML;

  //get qty
    quantity=$(".number")[0].innerHTML;

    //var cinnamonRollCart = [];
    var newCinnamonRoll = new Roll(flavor,glaze,cost,quantity);
    //console.log(newCinnamonRoll);
    //cinnamonRollCart=cinnamonRollCart.push(newCinnamonRoll);
    localStorage.setItem("cinnamonRoll"+counter, JSON.stringify(newCinnamonRoll));
    localStorage.setItem("counter", JSON.stringify(counter));
  };
  });






});
