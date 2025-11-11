// I know it is not clean code I just did it for fun and fast.
// u can make it more clean by dividing it into functions.
// and kill repetition

const cancelBtn = document.getElementById('cancelBtn');
const okBtn = document.getElementById('okBtn');
const myTalk = document.getElementById('mytalk');
let isCancelClicked = false;
let isOkClicked = false;

okBtn.addEventListener("click", () => {
    if (okBtn.textContent.includes("OK")) {
        isOkClicked = true;
        myTalk.innerHTML = "💓 thank u, I was about to colse this tab  <br> in your face <br> if u clicked cancel";
        onYeeee();
    } else {
        isCancelClicked = true;
        myTalk.innerHTML = "😭Fuck you I hate u [crying emoji] <br> now I will close the tab get out of my face, <br> do not come back,<br> I am just waiting u to finshe reading";
        setTimeout(() => {
            window.close();
        }, 11000)
    }
    
    Rest();
})

cancelBtn.addEventListener("click", () => {
    if (cancelBtn.textContent.includes("OK")) {
        isOkClicked = true;
        myTalk.innerHTML = "💓 thank u, I was about to colse this tab  <br> in your face <br> if u clicked cancel";
        onYeeee();
    } else {
        isCancelClicked = true;
        myTalk.innerHTML = "😭Fuck you I hate u [crying emoji] <br> now I will close the tab get out of my face, <br> do not come back, I am just waiting u to finshe reading";
        setTimeout(() => {
            window.close();
        }, 11000)
    }
    Rest();
})

function Rest() {
    okBtn.textContent = "OK";
    okBtn.setAttribute("disabled", "true");
    cancelBtn.textContent = "Cancel";
    cancelBtn.setAttribute("disabled", "true");
}
function onYeeee() {
    Swal.fire({
        imageHeight: 200,
        imageUrl: "./download - 2025-11-11T080111.580.jpg",
        title: "Yeeeeeee you ara my lover now",
        width: 600,
        padding: "3em",
        color: "#dd1919ff",
        backdrop: `
			rgba(0,0,123,0.4)
			url("PYh.gif")
			left top
			no-repeat
		`
    });
}

function storyFlow() {
    setTimeout(() => {
        if(!isOkClicked && !isCancelClicked) {
            cancelBtn.textContent = "OK 💖";
        okBtn.textContent = "Cancel 📌";
        myTalk.textContent = "buttons swapped hihih choose wisely";

        }
        

        setTimeout(() => {
            if (!isOkClicked && !isCancelClicked) {
                myTalk.textContent = "Why didn't you click OK yet? 😠";
            }
        }, 5000);

        setTimeout(() => {
            if (!isOkClicked && !isCancelClicked) {
                myTalk.innerHTML = "niggaaa u can't see 😠<br> just click cencel if u don't want";
            }
        }, 9000);

        setTimeout(() => {
            if (!isOkClicked && !isCancelClicked) {
                myTalk.innerHTML = "ok I will scale it for u now click it:";
                okBtn.style.transition = "transform 0.6s ease";
                okBtn.style.transform = "scale(2)";

                setTimeout(() => {
                if (!isOkClicked && !isCancelClicked) {
                    okBtn.innerHTML = "OK 💖";
                }
            }, 900);
                }
        }, 11000);

        

        setTimeout(() => {
            if (!isOkClicked && !isCancelClicked) {
                myTalk.innerHTML = "Bruh u didn't fall in trap <br> what ar u doing in ur life <br> u just watching. I give up";
            }
        }, 19000);

        setTimeout(() => {
            if (!isOkClicked && !isCancelClicked) {
                myTalk.innerHTML = "U still watching ok I will click ok for u, <br> even if u want or no, <br> I just want u to be my love [shy emoji]";
                setTimeout(() => {
                    okBtn.click();
                }, 3000)
            }
        }, 25000);


    }, 2000);
}


storyFlow();