<!DOCTYPE html>
 
<html>
 
<head>
 
 <meta charset="UTF-8"/>
  <title>Ping Pong Scoreboard</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <?php
  	$p1Score = 0;
  	$p2Score = 0;
  ?>
 
</head>
 
<body>
 
  <div id="Content">
 
    <div id="PlayerNames" class="Wrappers">
 
      <div id="Player1Name">
 
        <h1>Player 1</h1>
 
      </div>
 
      <div id="Player2Name">
 
        <h1>Player 2</h1>
 
      </div>
 
    </div>

    <div id="LowerContent">
	    <div id="LeftPlayerContent" class="Wrappers">
	 
	      <div id="Player1Score">
	 
	        <h1>0</h1>
	 
	      </div>
	 

	 	  <div id="Player1Buttons">
	 
	        <button type="button" class="Buttons PlusButton" name="P1PlusButton">+</button>
	        <button type="button" class="Buttons" name="P1MinusButton">-</button>

	      </div>
	      
	 	</div>
	    <div id="RightPlayerContent" class="Wrappers">
	 	  
	 	  <div id="Player2Score">
	 
	        <h1>0</h1>
	 
	      </div>

	      <div id="Player2Buttons">
	 
	        <button type="button" class="Buttons PlusButton" name="P2PlusButton">+</button>
	        <button type="button" class="Buttons" name="P2MinusButton">-</button>
	 
	      </div>
		 
		</div>
	</div>
 
  </div>
 
</body>
 
</html>