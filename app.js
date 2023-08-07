var fullImg = document.getElementById('fullImg');
var img = document.getElementById('img');
const imgId =document.getElementById("imgId");
let currentId=0;

function openImg(srcImg, id) {
    fullImg.style.display = "flex";
    currentId = id;
    img.src = srcImg;
    updateImgId()
}
 function updateImgId(){
    currentId++;
    imgId.textContent = "page="+currentId;
 }
function closeImg() {
    fullImg.style.display= "none"
}
function previous() {
    switch (currentId) {
        case 2:
            img.src = "https://picsum.photos/id/0/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        case 3:
            img.src = "https://picsum.photos/id/1/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        case 4:
            img.src = "https://picsum.photos/id/2/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        case 5:
            img.src = "https://picsum.photos/id/3/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        case 6:
            img.src = "https://picsum.photos/id/4/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        case 7:
            img.src = "https://picsum.photos/id/5/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        case 8:
            img.src = "https://picsum.photos/id/6/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        case 9:
            img.src = "https://picsum.photos/id/7/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        case 10:
            img.src = "https://picsum.photos/id/8/5000/3333"
            currentId--;
            imgId.textContent = "page="+currentId;
          break;
        default:
          console.log("Invalid image ID");
      }
  }
  
  function next() {
    switch (currentId) {
        case 1:
            img.src = "https://picsum.photos/id/1/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        case 2:
            img.src = "https://picsum.photos/id/2/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        case 3:
            img.src = "https://picsum.photos/id/3/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        case 4:
            img.src = "https://picsum.photos/id/4/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        case 5:
            img.src = "https://picsum.photos/id/5/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        case 6:
            img.src = "https://picsum.photos/id/6/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        case 7:
            img.src = "https://picsum.photos/id/7/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        case 8:
            img.src = "https://picsum.photos/id/8/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        case 9:
            img.src = "https://picsum.photos/id/9/5000/3333"
            currentId++;
            imgId.textContent = "page="+currentId;
          break;
        default:
          console.log("Invalid image ID");
      }
  }