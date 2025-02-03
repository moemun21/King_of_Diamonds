 //VARIABLES
        //
        //players scores
        let p1_score = 0;
        let p2_score = 0;
        let p3_score = 0;
        let p4_score = 0;
        let p5_score = 0;
        //player ticket to keep playin
        let pt1 = true;
        let pt2 = true;
        let pt3 = true;
        let pt4 = true;
        let pt5 = true;
        //rules adding counter
        let counter = 0;

        //FUNCTIONS
        //
        //how to play function sends an alert to show detailed rules
        function h2p(){
            alert("Players choose a random number from 1 to 100, average is multiplied by 0.8, closest to it wins the round, and everytime a player is disqualified a new rule is added to the game. ENJOY!");
        }
        //
        //starts new game by reseting everything
        function ng(){
        //reset players scores
        p1_score = 0;
        p2_score = 0;
        p3_score = 0;
        p4_score = 0;
        p5_score = 0;
        //reset player ticket to keep playin
        pt1 = true;
        pt2 = true;
        pt3 = true;
        pt4 = true;
        pt5 = true;
        //reset counter
        counter = 0;
        //reset all displays on screen
        //players scores reset to 0
        document.getElementById("p1sc").innerHTML = p1_score;
        document.getElementById("p2sc").innerHTML = p2_score;
        document.getElementById("p3sc").innerHTML = p3_score;
        document.getElementById("p4sc").innerHTML = p4_score;
        document.getElementById("p5sc").innerHTML = p5_score;
        //target reset to 0
        document.getElementById("target").innerHTML = "0";
        //round won by who msg
        document.getElementById("round-win").innerHTML = "‎ ";
        //rules display
        document.getElementById("newrule1").innerHTML = "‎";
        document.getElementById("newrule2").innerHTML = "‎";
        document.getElementById("newrule3").innerHTML = "‎";
        //score colors
        document.getElementById("p1sc").style.color = "black";
        document.getElementById("p2sc").style.color = "black";
        document.getElementById("p3sc").style.color = "black";
        document.getElementById("p4sc").style.color = "black";
        document.getElementById("p5sc").style.color = "black";
        //victory msg
        document.getElementById("status").innerHTML = "‎";
                    
        }
        //
        //main function to start and evaluate in
        function calculate(){
            //players in game number
            let x = document.getElementById("number");
            let p1 = parseInt(x.value);
            let p2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            let p3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            let p4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            let p5 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            
            //check if player entered number out of range
            if(!(p1>=0 && p1<=100)){
                document.getElementById("msg2").innerHTML = "Out of range, try again!";
                return;
            }else{
                document.getElementById("msg2").innerHTML = "‎ ";
            }
            //check is player aplicable to play next round
            if(p1_score == -10){
                pt1 = false;
                document.getElementById("p1sc").style.color = "red";
            }
            if(p2_score == -10){
                pt2 = false;
                document.getElementById("p2sc").style.color = "red";
            }
            if(p3_score == -10){
                pt3 = false;
                document.getElementById("p3sc").style.color = "red";
            }
            if(p4_score == -10){
                pt4 = false;
                document.getElementById("p4sc").style.color = "red";
            }
            if(p5_score == -10){
                pt5 = false;
                document.getElementById("p5sc").style.color = "red";
            }
            //creating numbers array to push players numbers
            let numbers = [];
            //avg calculation
            let avg = 0;
            if(pt1 == false){ //if player 1 out then stop game
                alert("You lose!");
                return;
            }else if(pt1 && pt2 && pt3 && pt4 && pt5){ //all players in
                avg = (p1 + p2 + p3 + p4 + p5)/5;
                numbers.push(p1,p2,p3,p4,p5);
            }else if(pt1 && pt2 && pt3 && pt4 && !pt5){ //player 5 out
                avg = (p1 + p2 + p3 + p4 )/4;
                numbers.push(p1,p2,p3,p4);
            }else if(pt1 && pt2 && pt3 && !pt4 && pt5){ //player 4 out
                avg = (p1 + p2 + p3 + p5)/4;
                numbers.push(p1,p2,p3,p5);
            }else if(pt1 && pt2 && !pt3 && pt4 && pt5){ //player 3 out
                avg = (p1 + p2 + p4 + p5)/4;
                numbers.push(p1,p2,p4,p5);
            }else if(pt1 && !pt2 && pt3 && pt4 && pt5){ //player 2 out
                avg = (p1+ p3 + p4 + p5)/4;
                numbers.push(p1,p3,p4,p5);
            }else if(pt1 && pt2 && pt3 && !pt4 && !pt5){ //player 5 and 4 out
                avg = (p1 + p2 + p3)/3;
                numbers.push(p1,p2,p3);
            }else if(pt1 && pt2 && !pt3 && pt4 && !pt5){ //player 5 and 3 out
                avg = (p1 + p2 + p4)/3;
                numbers.push(p1,p2,p4);
            }else if(pt1 && !pt2 && pt3 && pt4 && !pt5){ //player 5 and 2 out
                avg = (p1 + p3 + p4)/3;
                numbers.push(p1,p3,p4);
            }else if(pt1 && pt2 && !pt3 && !pt4 && pt5){ //player 4 and 3 out
                avg = (p1 + p2 + p5)/3;
                numbers.push(p1,p2,p5);
            }else if(pt1 && !pt2 && pt3 && !pt4 && pt5){ //player 4 and 2 out
                avg = (p1 + p3 + p5)/3;
                numbers.push(p1,p3,p5);
            }else if(pt1 && !pt2 && !pt3 && pt4 && pt5){ //player 3 and 2 out
                avg = (p1 + p4 + p5)/3;
                numbers.push(p1,p4,p5);
            }else if(pt1 && pt2 && !pt3 && !pt4 && !pt5){ //player 5 4 3 out
                avg = (p1 + p2)/2;
                numbers.push(p1,p2);
            }else if(pt1 && !pt2 && pt3 && !pt4 && !pt5){ //player 5 4 2 out
                avg = (p1 + p3)/2;
                numbers.push(p1,p3);
            }else if(pt1 && !pt2 && !pt3 && pt4 && !pt5){ //player 5 3 2 out
                avg = (p1 + p4)/2;
                numbers.push(p1,p4);
            }else if(pt1 && !pt2 && !pt3 && !pt4 && pt5){ //player 4 3 2 out
                avg = (p1 + p5)/2;
                numbers.push(p1,p5);
            }else if(pt1 && !pt2 && !pt3 && !pt4 && !pt5){ //player 5 4 3 2 out
                alert("You win!");
            }
            //target value
            let target = avg * 0.8;
            target = Math.ceil(target * 100) / 100;
            document.getElementById("target").innerHTML = target;
            //testing who is close to target
            let closestNumber = findClosestNumber(numbers, target);

            //test if game is normal or with extra rules
            if(counter == 0){
                //normal game
                normal(closestNumber,p1,p2,p3,p4,p5);
            }else if(counter == 1){
                //rule 1 game
                rule1game(closestNumber,p1,p2,p3,p4,p5);
            }else if(counter == 2){
                //rule 2 game
                rule2game(closestNumber,p1,p2,p3,p4,p5,target);
            }else if(counter == 3){
                //rule 3 game
                rule3game(closestNumber,p1,p2,p3,p4,p5);
            }

            //testing log
            // console.log(numbers);
            // console.log(closestNumber);

            //display scores on screen
            document.getElementById("p1sc").innerHTML = p1_score;
            document.getElementById("p2sc").innerHTML = p2_score;
            document.getElementById("p3sc").innerHTML = p3_score;
            document.getElementById("p4sc").innerHTML = p4_score;
            document.getElementById("p5sc").innerHTML = p5_score;
            //reset close number for next round
            closestNumber = 0;


            //check if player is aplicable to play next round after round done
            if(p1_score <= -10 && pt1 == true){
                pt1 = false;
                document.getElementById("p1sc").style.color = "red";
            }
            if(p2_score <= -10 && pt2 == true){
                pt2 = false;
                document.getElementById("p2sc").style.color = "red";
                counter++;
            }
            if(p3_score <= -10 && pt3 == true){
                pt3 = false;
                document.getElementById("p3sc").style.color = "red";
                counter++;
            }
            if(p4_score <= -10 && pt4 == true){
                pt4 = false;
                document.getElementById("p4sc").style.color = "red";
                counter++;
            }
            if(p5_score <= -10 && pt5 == true){
                pt5 = false;
                document.getElementById("p5sc").style.color = "red";
                counter++;
            }
            //check after round over for player if lost or not
            if(p1_score == -10){ //if player 1 out then stop game
                document.getElementById("status").innerHTML = "YOU LOST!";
                document.getElementById("status").style.color = "red";
                // alert("You lost!");
                return;
            }else if(pt1 && !pt2 && !pt3 && !pt4 && !pt5){ //player 5 4 3 2 out
                document.getElementById("status").innerHTML = "YOU WON!";
                document.getElementById("status").style.color = "green";
                // alert("You won!");
            }

            //counter test to add more rules
            switch(counter){
                case 1:
                    document.getElementById("newrule1").innerHTML = "-If players choose same number they get disqualified for round and <span style='color: red;''>GET -1</span>";
                    break;
                case 2:
                    document.getElementById("newrule1").innerHTML = "-If players choose same number they get disqualified for round and <span style='color: red;''>GET -1</span>";
                    document.getElementById("newrule2").innerHTML = "-If player get exact <span style='color: green;'>TARGET</span> everyone <span style='color: red;'>GET -2</span>";
                    break;
                case 3:
                    document.getElementById("newrule1").innerHTML = "-If players choose same number they get disqualified for round and <span style='color: red;''>GET -1</span>";
                    document.getElementById("newrule2").innerHTML = "-If player get exact <span style='color: green;'>TARGET</span> everyone <span style='color: red;'>GET -2</span>";
                    document.getElementById("newrule3").innerHTML = "-If a player choose 0 and other choose 100, <span style='color: green;'>100 WINS</span> round";
                    break;   
            }
        }


        //function for normal game before extra rules
        function normal(closestNumber,p1,p2,p3,p4,p5){
            //test to see who won and who lost
            switch(closestNumber){
                case p1:
                document.getElementById("round-win").innerHTML = "Player wins the round";
                if(p2_score > -10){
                    p2_score--;
                    }
                    if(p3_score > -10){
                        p3_score--;
                    }
                    if(p4_score > -10){
                        p4_score--;
                    }
                    if(p5_score > -10){
                        p5_score--;
                    }
                    break;
                case p2:
                    document.getElementById("round-win").innerHTML = "CPU 1 wins the round";
                    if(p1_score > -10){
                        p1_score--;
                    }
                    if(p3_score > -10){
                        p3_score--;
                    }
                    if(p4_score > -10){
                        p4_score--;
                    }
                    if(p5_score > -10){
                        p5_score--;
                    }
                    break;
                    case p3:
                        document.getElementById("round-win").innerHTML = "CPU 2 wins the round";
                        if(p1_score > -10){
                            p1_score--;
                    }
                    if(p2_score > -10){
                        p2_score--;
                    }
                    if(p4_score > -10){
                        p4_score--;
                    }
                    if(p5_score > -10){
                        p5_score--;
                    }
                    break;
                    case p4:
                        document.getElementById("round-win").innerHTML = "CPU 3 wins the round";
                        if(p1_score > -10){
                            p1_score--;
                    }
                    if(p2_score > -10){
                        p2_score--;
                    }
                    if(p3_score > -10){
                        p3_score--;
                    }
                    if(p5_score > -10){
                        p5_score--;
                    }
                    break;
                    case p5:
                        document.getElementById("round-win").innerHTML = "CPU 4 wins the round";
                        if(p1_score > -10){
                        p1_score--;
                    }
                    if(p2_score > -10){
                        p2_score--;
                    }
                    if(p3_score > -10){
                        p3_score--;
                    }
                    if(p4_score > -10){
                        p4_score--;
                    }
                    break;
            }
        }
        //
        //rule 1 added to normal game
        //
        function rule1game(closestNumber,a,b,c,d,e){
            // Create an object to store the frequency of each value
            let frequencyMap = {};

            // Populate the frequency map
            [a, b, c, d, e].forEach(value => {
                if (frequencyMap[value]) {
                    frequencyMap[value]++;
                } else {
                    frequencyMap[value] = 1;
                }
            });

            // Create an array to store the duplicated values
            let duplicates = [];

            // Check for duplicates and add them to the duplicates array
            for (let value in frequencyMap) {
                if (frequencyMap[value] >= 2) {
                    duplicates.push(Number(value)); // Convert key back to number
                }
            }
            // console.log("duplicates");
            // console.log(duplicates);
            //tests which ones have duplicate and deduce points
            for(let x in duplicates){
                // console.log(duplicates[x]);
                if(a == duplicates[x]){
                    a = -1;
                }
                if(b == duplicates[x]){
                    b = -1;
                }
                if(c == duplicates[x]){
                    c = -1;
                }
                if(d == duplicates[x]){
                    d = -1;
                }
                if(e == duplicates[x]){
                    e = -1;
                }
            }
            //checks if player is already out and turns their value to -1 to not interfer with rest
            //
            if(p2_score == -10){
                p2 = -1;
            }
            if(p3_score == -10){
                p3 = -1;
            }
            if(p4_score == -10){
                p4 = -1;
            }
            if(p5_score == -10){
                p5 = -1;
            }
            //starts normal game test
            normal(closestNumber,a,b,c,d,e);
        }
        //
        //rule 2 added to normal game
        //
        function rule2game(closestNumber,a,b,c,d,e,target){
            //checks the same thing as rule 1 first
            //
            // Create an object to store the frequency of each value
            let frequencyMap = {};

            // Populate the frequency map
            [a, b, c, d, e].forEach(value => {
                if (frequencyMap[value]) {
                    frequencyMap[value]++;
                } else {
                    frequencyMap[value] = 1;
                }
            });

            // Create an array to store the duplicated values
            let duplicates = [];

            // Check for duplicates and add them to the duplicates array
            for (let value in frequencyMap) {
                if (frequencyMap[value] >= 2) {
                    duplicates.push(Number(value)); // Convert key back to number
                }
            }
            // console.log("duplicates");
            // console.log(duplicates);
            //tests which ones have duplicate and deduce points
            for(let x in duplicates){
                // console.log(duplicates[x]);
                if(a == duplicates[x]){
                    a = -1;
                }
                if(b == duplicates[x]){
                    b = -1;
                }
                if(c == duplicates[x]){
                    c = -1;
                }
                if(d == duplicates[x]){
                    d = -1;
                }
                if(e == duplicates[x]){
                    e = -1;
                }
            }
            //checks if player is already out and turns their value to -1 to not interfer with rest
            //
            if(p2_score == -10){
                p2 = -1;
            }
            if(p3_score == -10){
                p3 = -1;
            }
            if(p4_score == -10){
                p4 = -1;
            }
            if(p5_score == -10){
                p5 = -1;
            }
            //
            //then goes to check check for rule 2
            target = Math.round(target);
            // console.log(target);

            if(a == target && a != -1){
                if(b != -1){
                    p2_score-=2;
                }
                if(c != -1){
                    p3_score-=2;
                }
                if(d != -1){
                    p4_score-=2;
                }
                if(e != -1){
                    p5_score-=2;
                }
            }else if(b == target && b != -1){
                if(a != -1){
                    p1_score-=2;
                }
                if(c != -1){
                    p3_score-=2;
                }
                if(d != -1){
                    p4_score-=2;
                }
                if(e != -1){
                    p5_score-=2;
                }
            }else if(c == target && c != -1){
                if(a != -1){
                    p1_score-=2;
                }
                if(b != -1){
                    p2_score-=2;
                }
                if(d != -1){
                    p4_score-=2;
                }
                if(e != -1){
                    p5_score-=2;
                }
            }else if(d == target && d != -1){
                if(a != -1){
                    p1_score-=2;
                }
                if(b != -1){
                    p2_score-=2;
                }
                if(c != -1){
                    p3_score-=2;
                }
                if(e != -1){
                    p5_score-=2;
                }
            }else if(e == target && e != -1){
                if(a != -1){
                    p1_score-=2;
                }
                if(b != -1){
                    p2_score-=2;
                }
                if(c != -1){
                    p3_score-=2;
                }
                if(d != -1){
                    p4_score-=2;
                }
            }else{
                // console.log("normal");
                normal(closestNumber,a,b,c,d,e);
            }
        }
        //
        //rule 3 added to normal game
        //
        function rule3game(closestNumber,a,b,c,d,e){
            //checks if player is already out and turns their value to -1 to not interfer with rest
            //
            if(p2_score == -10){
                b = -1;
            }
            if(p3_score == -10){
                c = -1;
            }
            if(p4_score == -10){
                d = -1;
            }
            if(p5_score == -10){
                e = -1;
            }
            //assign two normal players into vars
            //
            let var1 = null;
            let var2 = null;
            if (a !== -1) {
                if (var1 === null) {
                    var1 = a;
                } else {
                    var2 = a;
                }
            }

            if (b !== -1) {
                if (var1 === null) {
                    var1 = b;
                } else {
                    var2 = b;
                }
            }

            if (c !== -1) {
                if (var1 === null) {
                    var1 = c;
                } else {
                    var2 = c;
                }
            }

            if (d !== -1) {
                if (var1 === null) {
                    var1 = d;
                } else {
                    var2 = d;
                }
            }

            if (e !== -1) {
                if (var1 === null) {
                    var1 = e;
                } else {
                    var2 = e;
                }
            }
            //test the vars for 0 and 100
            if ((var1 === 0 && var2 === 100) || (var1 === 100 && var2 === 0)) {
                // Determine which variable has the value 100
                if (var1 === 100) {
                    // console.log("var1 has the value 100");
                    //tests to see which value var2 is from the players to deduce points
                    if (var2 == a) {
                        p1_score--;
                    }else if (var2 == b) {
                        p2_score--;
                    }else if (var2 == c) {
                        p3_score--;
                    }else if (var2 == d) {
                        p4_score--;
                    }else if (var2 == e) {
                        p5_score--;
                    }
                } else {
                    // console.log("var2 has the value 100");
                    //tests to see which value var1 is from the players to deduce points
                    if (var1 == a) {
                        p1_score--;
                    }else if (var1 == b) {
                        p2_score--;
                    }else if (var1 == c) {
                        p3_score--;
                    }else if (var1 == d) {
                        p4_score--;
                    }else if (var1 == e) {
                        p5_score--;
                    }
                }
            } else {
                //else plays as a normal round
                normal(closestNumber,a,b,c,d,e);
            }
        }
        //
        //function to find closest number to target
        function findClosestNumber(numbers, target) {
        let closestNum = numbers[0];
        let minDifference = Math.abs(target - closestNum);

        for (let i = 1; i < numbers.length; i++) {
            let currentDifference = Math.abs(target - numbers[i]);
            if (currentDifference < minDifference) {
            closestNum = numbers[i];
             minDifference = currentDifference;
            }
        }

        return closestNum;
        }
