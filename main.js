var bark_count = 0
var growl_count = 0
var meow_count = 0
var mooo_count = 0
var back_count = 0
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pO4iQwTxK/model.json' , modelReady);
}
 function modelReady(){
    classifier.classify(gotResults);
    
 }
 function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        img = document.getElementById("image")
        console.log(results)
        random_r = Math.floor(Math.random * 255) + 1;
        random_g = Math.floor(Math.random * 255) + 1;
        random_b = Math.floor(Math.random * 255) + 1;
        document.getElementById("currentSound").innerHTML = "I can hear - " + results[0].label
        if(results[0].label == "Barking"){
            bark_count++;
            document.getElementById("numberOfTimes").innerHTML = "Number of times sound was heard - " + bark_count;
            img.src = "115_dogs.jpg"
        }
        else if(results[0].label == "Growling"){
            growl_count++;
            document.getElementById("numberOfTimes").innerHTML = "Number of times sound was heard - " + growl_count;
            img.src = "115_dogs.jpg"
        }
        else if(results[0].label == "Meowing"){
            meow_count++;
            document.getElementById("numberOfTimes").innerHTML = "Number of times sound was heard - " + meow_count;
            img.src = "115_cats.jpg"
        }
        else if(results[0].label == "Mooing"){
            mooo_count++;
            document.getElementById("numberOfTimes").innerHTML = "Number of times sound was heard - " + mooo_count;
            img.src = "115_cows.jpg"
        }
        else{
            back_count++;
            document.getElementById("numberOfTimes").innerHTML = "Number of times sound was heard - " + back_count;
            img.src = "115_default.png"
        }
        document.getElementById("currentSound").style.color = "(" + random_r + "," + random_g + "," + random_b + ")"
        document.getElementById("numberOfTimes").style.color = "(" + random_r + "," + random_g + "," + random_b + ")"
    }
 }