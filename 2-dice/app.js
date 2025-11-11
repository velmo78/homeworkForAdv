    function roll (dice) {
        if (dice[0] != 'D' || dice.length > 3 ){
            return console.log ('Введите верный кубик')
        }
        const min = 1;
            const max = parseInt(dice.match(/\d+/)?.[0] || "0");
                return console.log(Math.floor(Math.random() * (max - min + 1) + min))
    }

  roll("D4")
   roll("D6")
    roll("D8")
    roll("D10")
     roll("D12")
      roll("D16")
        roll("D20")
         roll("a20")
          roll("D123")