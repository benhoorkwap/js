

const onClick = () => {
    const graph = document.getElementById("graph")

    const context =  graph.getContext('2d')

    // // Begin Drawing
    // context.beginPath()
    // context.moveTo(10, 10);
    // context.lineTo(100, 100)

    // // Fill Styles 
    // context.fillStyle="green";
    // context.strokeStyle="red";

    // // Draw the line
    // context.stroke()

    // // Close Path
    // context.closePath()


    // const computeCI = (principal, rate, time) => {
    //    return principal * Math.pow((1 + rate), time)
    // }

    // const principal = 10000;
    // const rate = 0.05;
    // const time = 3;

    // const CI = computeCI(principal, rate, time)

    // const Yscale = (CI - principal)/ graph.height

    // const Xscale = time/graph.width;


    const DrawGraph = (context) => {
        context.fillStyle = 'orange'
        context.strokeStyle = 'red'
        context.save()

        const path = new Path2D();
        path.moveTo(0, 0)
        path.quadraticCurveTo(100, 0, 100, 100);
        
        path.lineTo(100, 0);
        path.closePath()
        context.stroke(path)
        context.fill(path)
        
       

        
        


    }

   
    DrawGraph(context)
    
}