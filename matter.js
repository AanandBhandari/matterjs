let Engine = Matter.Engine;
let Render = Matter.Render;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Composites  = Matter.Composites;
let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine : engine
});
Engine.run(engine);
Render.run(render);
let ball = Bodies.circle(200,10,40);
let floor = Bodies.trapezoid(340, 300,500, 100, .9, { isStatic: true });
let myCar = Composites.car(390, 0, 100, 30, 40);
let myCradle = Composites.newtonsCradle(600, 100, 5, 10, 160);
World.add(engine.world, [ball, floor, myCar, myCradle]);
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, { mouse: mouse });
World.add(engine.world, mouseConstraint);
render.mouse = mouse;
