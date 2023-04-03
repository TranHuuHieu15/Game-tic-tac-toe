let playerSymbol = "O";
let gameEnded = false;

let winPos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function checkWin() {
    let counter = 0;
    for (let i = 0; i < winPos.length; i++) {
        if (
            document.getElementById(winPos[i][0]).innerHTML.trim().length > 0 &&
            document.getElementById(winPos[i][0]).innerHTML === document.getElementById(winPos[i][1]).innerHTML &&
            document.getElementById(winPos[i][1]).innerHTML === document.getElementById(winPos[i][2]).innerHTML
        ) {
            document.getElementById(winPos[i][0]).classList.add("win");
            document.getElementById(winPos[i][1]).classList.add("win");
            document.getElementById(winPos[i][2]).classList.add("win");

            setTimeout(function () {
                Swal.fire({
                    icon: 'success',
                    title: `${playerSymbol} chiến thắng`,
                    showConfirmButton: false,
                    timer: 3000
                })
            }, 500);
            gameEnded = true;
            return;
        }
    }

    // Check là đã đánh hay chưa :v
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(i.toString()).innerHTML !== "") {
            counter++;
        }
    }

    if (counter === 9) {
        setTimeout(function () {
            Swal.fire({
                icon: 'success',
                title: 'Hai bạn hòa nhau!',
                showConfirmButton: false,
                timer: 3000
            })
        }, 500);
        gameEnded = true;
    }
}

//xử lý sự kiện cho các ô đánh
for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
        "click",
        function () {
            if (this.innerHTML === "" && !gameEnded) {
                console.log(`Trước khi click ${playerSymbol}`);
                // Đổi biển tượng này thành biểu tượng khác cho lượt tiếp theo
                if (playerSymbol === "X") {
                    playerSymbol = "O"
                } else {
                    playerSymbol = "X"
                };
                console.log(`sau khi click ${playerSymbol}`);
                this.innerHTML = playerSymbol;
                this.classList.add(playerSymbol.toLowerCase());
                checkWin();
            }
        }
    );
}

// nút reset
document.getElementById("reset").addEventListener("click", function () {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).innerHTML = "";
        document.getElementById(i.toString()).classList.remove("x");
        document.getElementById(i.toString()).classList.remove("o");
        document.getElementById(i.toString()).classList.remove("win");
    }
    playerSymbol = "O";
    gameEnded = false;
});