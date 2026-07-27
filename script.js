const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("message");
const micBtn = document.getElementById("micBtn");

function addMessage(text, type){

    const div=document.createElement("div");

    div.className=type==="user" ? "user-message":"bot-message";

    div.innerHTML=text;

    chatBox.appendChild(div);

    chatBox.scrollTop=chatBox.scrollHeight;
}

function sendMessage(){

    const message=messageInput.value.trim();

    if(message==="") return;

    addMessage(message,"user");

    fetch("chat.php",{

        method:"POST",

        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },

        body:"message="+encodeURIComponent(message)

    })

    .then(response=>response.text())

    .then(reply=>{

    addMessage("Typing...", "bot");

    setTimeout(()=>{

        chatBox.lastChild.remove();

        addMessage(reply,"bot");

    },1000);

})

    .catch(()=>{

        addMessage("Server connection error.","bot");

    });

    messageInput.value="";
}

messageInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

if("webkitSpeechRecognition" in window){

    const recognition=new webkitSpeechRecognition();

    recognition.lang="en-US";

    micBtn.onclick=()=>recognition.start();

    recognition.onresult=function(event){

        messageInput.value=event.results[0][0].transcript;

    };
    window.onload = function () {

    addMessage("👋 Welcome! I am your AI Voice Assistant.", "bot");

    addMessage("You can ask me about the time, date, or introduce yourself.", "bot");

};
function clearChat(){

    chatBox.innerHTML="";

}

}