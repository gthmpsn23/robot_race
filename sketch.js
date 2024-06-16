/*
Hack It: Robot Olympics

* Make each robot move down the track by increasing its x coordinate each frame. You will want to add some randomness to this so each robot races at a different speed. 
* Check which robot has won the race and display a message saying which robot won. Remember the lanes will are labelled 1-5 not 0-4. 
* Some other things to try out when you've done the basics: 
    * Switch the robotXs and robotYs arrays to a single array of objects. 
    * Change the look of each robot.  
    * [HARD] Make the robots run the other way, or down the screen not across. 
    * [V HARD] make the race distance longer without increasing the size of the canvas. 
    * [V HARD] add "on your marks.", "Get set" and "go" before the start of the race. 
*/

var finishLineX = 1450;

var cameraPosX = 0
// var robotXs = [40, 40, 40, 40, 40];
// var robotYs = [50, 200, 350, 500, 650];

var robots = [
	{
		X: 40,
		Y: 50,
		// speed:
	},
	{
		X: 40,
		Y: 200,
		// speed: 2
	},
	{
		X: 40,
		Y: 350,
		// speed: 2
	},
	{
		X: 40,
		Y: 500,
		// speed: 2
	},
	{
		X: 40,
		Y: 650,
		// speed: 3
	}

]

function setup()
{
	createCanvas(1200, 800);
	for (var i = 0; i < robots.length; i++) {
        robots[i].speed = random(1, 5);  // Assign random speeds to each robot
    }

}


function draw()
{

	cameraPosX = robots.X - width / 2;

	background(200, 100, 0);


	//draw the finish line and first line marker
	strokeWeight(7);
	stroke(255);
	line(finishLineX, 0, finishLineX, height);
	line(0, robots[0].Y - 20, width, robots[0].Y - 10);

	for (var i = 0; i < 5; i++)
		{
			if (robots[i].X < finishLineX)
			robots[i].X += robots[i].speed
		}

	for (var i = 0; i < robots.length; i++)
	{

		// Draw the robots
		strokeWeight(2);
		stroke(0);

		// Robot head
		fill(200);
		rect(robots[i].X, robots[i].Y, 100, 100, 10);

		// Ears
		fill(255, 0, 0);
		rect(robots[i].X - 7, robots[i].Y + 30, 10, 33);
		rect(robots[i].X + 97, robots[i].Y + 30, 10, 33);

		// Robots' antennas
		fill(250, 250, 0);
		ellipse(robots[i].X + 50, robots[i].Y - 7, 10, 10);

		fill(200, 0, 200);
		rect(robots[i].X + 40, robots[i].Y - 3, 20, 10);

		// Eyes
		fill(255);
		ellipse(robots[i].X + 25, robots[i].Y + 30, 26, 26);
		point(robots[i].X + 25, robots[i].Y + 30);
		ellipse(robots[i].X + 75, robots[i].Y + 30, 26, 26);
		point(robots[i].X + 75, robots[i].Y + 30);

		// Robots' noses
		fill(255, 0, 0);
		triangle(robots[i].X + 50, robots[i].Y + 35, robots[i].X + 35, robots[i].Y + 60, robots[i].X + 65, robots[i].Y + 60);

		// Robot mouth
		noFill();
		beginShape();
		vertex(robots[i].X + 28, robots[i].Y + 75);
		vertex(robots[i].X + 36, robots[i].Y + 85);
		vertex(robots[i].X + 42, robots[i].Y + 75);
		vertex(robots[i].X + 50, robots[i].Y + 85);
		vertex(robots[i].X + 58, robots[i].Y + 75);
		vertex(robots[i].X + 66, robots[i].Y + 85);
		vertex(robots[i].X + 74, robots[i].Y + 75);
		endShape();

		// Draw the lower line marker for this lane
		strokeWeight(7);
		stroke(255);
		line(0, robots[i].Y + 120, width, robots[i].Y + 120);


		//TODO: update the robots x location 

		// for (var i = 0; i < 5; i++)
		// {
		// 	robots[i].X += robots[i].speed
			
		// }





		//TODO Check if the robot has won and display message!   
	}

}